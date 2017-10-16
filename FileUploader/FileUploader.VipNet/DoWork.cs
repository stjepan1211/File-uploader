using FileUploader.Common.IProcessing;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace FileUploader.VipNet
{
    public class DoWork: IDoProcess
    {
        public void ReadFile(IHubContext procesStateHub)
        {
            int i = 0;
            while(i < 3)
            {
                i++;
                procesStateHub.Clients.All.processMessage("Vipnet read file: i - " + i.ToString());
                Thread.Sleep(5000);
            }
        }

        public String Process()
        {
            return string.Empty;
        }
    }
}
