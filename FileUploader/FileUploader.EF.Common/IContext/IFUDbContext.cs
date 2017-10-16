using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileUploader.EF.Common.IContext
{
    public interface IFUDbContext: IDisposable
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        DbSet Set(Type entityType);
        int SaveChanges();
        Task<int> SaveChangesAsync();
    }
}
