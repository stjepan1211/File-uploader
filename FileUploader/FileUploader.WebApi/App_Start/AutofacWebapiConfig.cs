using Autofac;
using Autofac.Integration.WebApi;
using FileUploader.Common.IProcessing;
using FileUploader.EF.Common.IContext;
using FileUploader.EF.Context;
using FileUploader.Repository.Common.IGenericRepository;
using FileUploader.Repository.Common.IRepositories;
using FileUploader.Repository.GenericRepository;
using FileUploader.Repository.Repositories;
using System.Reflection;
using System.Web.Http;

namespace FileUploader.WebApi
{
    public class AutofacWebapiConfig
    {
        public static IContainer Container;

        public static void Initialize(HttpConfiguration config)
        {
            Initialize(config, RegisterServices(new ContainerBuilder()));
        }


        public static void Initialize(HttpConfiguration config, IContainer container)
        {
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

        private static IContainer RegisterServices(ContainerBuilder builder)
        {
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<FUDbContext>()
                   .As<IFUDbContext>()
                   .InstancePerRequest();

            builder.RegisterType<GenericRepository>()
                   .As<IGenericRepository>()
                   .InstancePerRequest();

            builder.RegisterType<FileRepository>()
                   .As<IFileRepository>()
                   .InstancePerRequest();

            builder.RegisterType<FUDbContext>()
                  .As<FUDbContext>()
                  .InstancePerRequest();

            //configuration from Properties->Build->Conditional compilation simbols
#if VIP
            builder.RegisterType<VipNet.DoWork>()
                  .As<IDoProcess>()
                  .InstancePerRequest();
#endif

#if TCOM
            builder.RegisterType<Tcom.DoWork>()
                  .As<IDoProcess>()
                  .InstancePerRequest();
#endif
            Container = builder.Build();

            return Container;
        }
    }
}
