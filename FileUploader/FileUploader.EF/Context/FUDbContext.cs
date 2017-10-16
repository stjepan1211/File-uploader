using System.Data.Entity;
using FileUploader.EF.Model;
using System.Data.Entity.ModelConfiguration.Conventions;
using FileUploader.EF.Common.IContext;

namespace FileUploader.EF.Context
{
    public class FUDbContext : DbContext, IFUDbContext
    {
        public FUDbContext() : base("FileUploaderDb")
        {
        }

        public DbSet<File> Files { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
