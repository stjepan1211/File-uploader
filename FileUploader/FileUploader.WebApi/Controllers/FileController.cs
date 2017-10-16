using FileUploader.Common;
using FileUploader.Common.IProcessing;
using FileUploader.Common.PagedList;
using FileUploader.EF.Common.IContext;
using FileUploader.EF.Context;
using FileUploader.Repository.Common.IRepositories;
using FileUploader.Repository.Repositories;
using FileUploader.WebApi.Hubs;
using FileUploader.WebApi.Models;
using Microsoft.AspNet.SignalR;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Linq.Dynamic;

namespace FileUploader.WebApi.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class FileController : ApiController
    {
        private static readonly string path = ConfigurationManager.AppSettings["path"];
        private const string CONTENT_DISPOSITION_INLINE = "inline";

        private static IFileRepository FileRepository { get; set; }
        private static FUDbContext Db { get; set; }
        private static IDoProcess FileProcess { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="fileRepository"></param>
        /// <param name="db"></param>
        /// <param name="tenantProcess"></param>
        public FileController(IFileRepository fileRepository, FUDbContext db, IDoProcess tenantProcess)
        {
            FileRepository = fileRepository;
            Db = db;
            FileProcess = tenantProcess;
        }

        /// <summary>
        /// Get all files
        /// </summary>
        /// <remarks>
        /// Get a list of all files
        /// </remarks>   
        [Route("getAllFiles")]
        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(PagedList<EF.Model.File>))]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public async Task<IHttpActionResult> GetAll([FromUri]PaginationModel page)
        {
            try
            {
                using (var db = new FUDbContext())
                {
                    var result = new PagedList<EF.Model.File>();
                    result.TotalItemCount = 0;

                    IQueryable<EF.Model.File> query = db.Files.AsNoTracking();

                    if (page != null && page.PageNumber != 0 && page.PageSize != 0)
                    {
                        result.Page = page.PageNumber;
                        result.PageSize = page.PageSize;
                        result.TotalItemCount = query.Count();

                        query = this.SortFiles(query, page.OrderBy);
                        query = query.GetPage(page.PageNumber, page.PageSize);
                    }
                    else
                    {
                        result.Page = 1;
                        result.PageSize = result.TotalItemCount;
                    }

                    List<EF.Model.File> list = query.Cast<EF.Model.File>().ToList();
                    List<EF.Model.File> resultItems = new List<EF.Model.File>();

                    foreach (var item in list)
                    {
                        resultItems.Add(item);
                    }

                    result.Items =(IEnumerable<EF.Model.File>) resultItems;

                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        /// <summary>
        /// Post files
        /// </summary>
        /// <remarks>
        /// Used to upload file to db
        /// </remarks>
        [Route("upload")]
        [HttpPost]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(EF.Model.File))]
        [SwaggerResponse(HttpStatusCode.Created, Type = typeof(EF.Model.File))]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.Conflict)]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public async Task<HttpResponseMessage> Post()
        {
            try
            {
                HttpResponseMessage result = null;
                HttpRequest httpRequest = HttpContext.Current.Request;
                HttpFileCollection uploadedFiles = httpRequest.Files;
                var storedFilesNames = new List<string>();

                using (var dbContextTransaction = Db.Database.BeginTransaction())
                {
                    if (uploadedFiles.Count > 0)
                    {
                        int i;
                        for (i = 0; i < uploadedFiles.Count; i++)
                        {
                            EF.Model.File dbFile = new EF.Model.File();
                            HttpPostedFile postedFile = uploadedFiles[i];

                            byte[] buffer = new byte[postedFile.InputStream.Length];
                            await postedFile.InputStream.ReadAsync(buffer, 0, (int)postedFile.InputStream.Length);

                            dbFile.FileId = Guid.NewGuid();
                            dbFile.Extension = Path.GetExtension(postedFile.FileName);
                            dbFile.GuidName = Guid.NewGuid().ToString() + dbFile.Extension;
                            dbFile.OriginalName = Path.GetFileName(postedFile.FileName);
                            dbFile.Description = ""; //for now it's "", consider to add it in front end

                            var savePath = Path.Combine(path, dbFile.GuidName); //path for saving file
                            dbFile.Path = savePath;

                            using (FileStream stream = new FileStream(savePath, FileMode.Create, FileAccess.Write, FileShare.Read))
                            {
                                await stream.WriteAsync(buffer, 0, buffer.Length);
                            }
                            await FileRepository.Add(dbFile);

                            postedFile.SaveAs(savePath);
                            storedFilesNames.Add(dbFile.OriginalName);
                        }
                        result = Request.CreateResponse(HttpStatusCode.Created, storedFilesNames);
                    }
                    else
                    {
                        result = Request.CreateResponse(HttpStatusCode.BadRequest);
                    }
                    var procesStateHub = GlobalHost.ConnectionManager.GetHubContext<ProcessStateHub>();
                    //procesStateHub.Clients.All.processMessage(vipProcess.ReadFile(procesStateHub));
                    FileProcess.ReadFile(procesStateHub);

                    return result;
                    
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        /// <summary>
        /// Get file
        /// </summary>
        /// <remarks>
        /// Get specific file by id
        /// </remarks>
        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(EF.Model.File))]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.Conflict)]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public async Task<IHttpActionResult> GetOne(Guid id)
        {
            try
            {
                var file = await FileRepository.GetOne(id);
                return Ok(file);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        /// <summary>
        /// Download file
        /// </summary>
        /// <remarks>
        /// Get file for download
        /// </remarks>
        [Route("download/{id}")]
        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(EF.Model.File))]
        [SwaggerResponse(HttpStatusCode.Created, Type = typeof(EF.Model.File))]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.Conflict)]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public async Task<HttpResponseMessage> GetForDownload(Guid id)
        {
            try
            {
                FileInfo file = new FileInfo(path);

                EF.Model.File fileFromDb = await FileRepository.GetOne(id);

                MemoryStream stream = new MemoryStream();
                HttpResponseMessage returnMessage = new HttpResponseMessage(HttpStatusCode.OK);
                returnMessage.Content = new StreamContent(stream);
                returnMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                returnMessage.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue(CONTENT_DISPOSITION_INLINE);
                returnMessage.Content.Headers.ContentDisposition.FileName = fileFromDb.OriginalName;
                return returnMessage;
            }
            catch (Exception ex)
            {
                HttpResponseMessage returnMessage = Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error");
                return returnMessage;
            }
        }

        private IQueryable<EF.Model.File> SortFiles(IQueryable<EF.Model.File> query, string orderBy)
        {
            switch (orderBy)
            {
                case null:
                case "originalname asc":
                    query = query.OrderBy(x => x.OriginalName);
                    break;
                case "originalname desc":
                    query = query.OrderByDescending(x => x.OriginalName);
                    break;
                default:
                    throw new ApplicationException($"Sort type [{orderBy}] not supported!");
            }
            return query;
        }
    }
}