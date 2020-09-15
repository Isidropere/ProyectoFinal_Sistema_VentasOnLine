using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace PROYECTOVENTAS.Utils.Dto
{
    public class Correo
    {
        public string subject { get; set; }
        public string[] to { get; set; }
        public string from { get; set; }
        public string body { get; set; }
        public Boolean isHtml { get; set; }
        public Attachment data { get; set; }
    }
}