using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace FileUploader.WebApi.Hubs
{
    public class Clock : Hub
    {
        public void Hello()
        {
            Clients.All.hello("Pozdrav");
        }

        public void GetRealTime()
        {
            Clients.Caller.setRealTime(DateTime.Now.ToString("h:mm:ss tt"));
        }

        public void GetProcessMessage()
        {
            Clients.Caller.getProcessMessage("Hello from WebAPI server.");
        }
    }
}