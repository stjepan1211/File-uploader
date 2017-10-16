using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FileUploader.WebApi.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class FileDownloadModel
    {
        public Guid FileId { get; set; }
        public Guid UserId { get; set; }
        public string Extension { get; set; }
        public string Name { get; set; }
        public byte[] Value { get; set; }
    }
}