using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace FileUploader.WebApi.Hubs
{
    public class ProcessStateHub : Hub
    {

        public void ProcessMessage()
        {
            Clients.Caller.processMessage("Hello from WebAPI server.");
        }
    }
}