using System.Web;
using System.Web.Mvc;

namespace FileUploader.WebGui
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
