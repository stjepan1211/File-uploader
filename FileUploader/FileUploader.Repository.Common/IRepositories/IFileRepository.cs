using FileUploader.EF.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FileUploader.Repository.Common.IRepositories
{
    public interface IFileRepository
    {
        Task<int> Add(File entity);
        Task<IEnumerable<File>> GetAll();
        Task<File> GetOne(Guid id);
        IQueryable<File> GetQueryable();
        Task<IEnumerable<File>> GetRange(Expression<Func<File, bool>> match);
    }
}
