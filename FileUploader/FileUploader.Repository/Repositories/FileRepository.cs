using FileUploader.Repository.GenericRepository;
using FileUploader.EF.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FileUploader.Repository.Common.IRepositories;
using FileUploader.Repository.Common.IGenericRepository;
using System.Linq.Expressions;

namespace FileUploader.Repository.Repositories
{
    public class FileRepository : IFileRepository
    {
        protected IGenericRepository GenericRepository { get; set; }

        public FileRepository(IGenericRepository genericRepository)
        {
            this.GenericRepository = genericRepository;
        }

        //Add File
        public async Task<int> Add(File entity)
        {
            try
            {
                return await GenericRepository.Add(entity);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Get all Files
        public async Task<IEnumerable<File>> GetAll()
        {
            try
            {
                var response = await GenericRepository.GetAll<File>();
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Get all Files
        public async Task<File> GetOne(Guid id)
        {
            try
            {
                var response = await GenericRepository.Get<File>(id);
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Get Queryable
        public IQueryable<File> GetQueryable()
        {
            try
            {
                var response = GenericRepository.GetQueryable<File>();
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Get range
        public async Task<IEnumerable<File>> GetRange(Expression<Func<File, bool>> match)
        {
            try
            {
                var response = await GenericRepository.GetRangeAsync<File>(match);
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
