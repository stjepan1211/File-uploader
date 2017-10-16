using System.Web.Http;
using log4net;
using System.Reflection;


namespace FileUploader.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private static readonly ILog logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        protected void Application_Start()
        {
            logger.Info("FileUploader.WebApi starting.");

            AutofacWebapiConfig.Initialize(GlobalConfiguration.Configuration);

            GlobalConfiguration.Configure(WebApiConfig.Register);

            logger.Info("FileUploader.WebApi started.");

        }
    }
}
