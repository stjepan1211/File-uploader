using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileUploader.Common.IProcessing
{
    public interface IDoProcess
    {
        void ReadFile(IHubContext procesStateHub);
        String Process();
    }
}
