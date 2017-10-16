using System;
using System.ComponentModel.DataAnnotations;

namespace FileUploader.EF.Model
{
    public class File
    {
        public File()
        {
        }

        [Key]
        public Guid FileId { get; set; }
        public string Extension { get; set; }
        public string Description { get; set; }
        public string OriginalName { get; set; }
        public string GuidName { get; set; }
        public string Path { get; set; }
    }
}
