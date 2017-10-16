using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Swashbuckle.Application;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net.Http.Headers;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Cors;
using System.Web.Http.Routing;

namespace FileUploader.WebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            var cors = new EnableCorsAttribute("http://localhost:59167", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.EnableSwagger(c =>
            {
                var xmlCommentsPath = GetXmlCommentsPath();
                if (xmlCommentsPath != null)
                {
                    c.IncludeXmlComments(xmlCommentsPath);
                }
                c.SingleApiVersion("v1", "FileUploader.WebApi");
            })
            .EnableSwaggerUi();
        }

        private static string GetXmlCommentsPath()
        {
            var path = HostingEnvironment.MapPath("~/bin/FileUploader.WebApi.xml");
            return path;
        }
    }
}
