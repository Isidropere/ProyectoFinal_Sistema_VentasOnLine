using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PROYECTOVENTAS.Models;
using PROYECTOVENTAS.Utils.Dto;

using System.IO;
using System.IO.MemoryMappedFiles;
using System.IO.Compression;
using System.Text.RegularExpressions;
using CrystalDecisions.CrystalReports.Engine;
using System.Net.Mail;

namespace PROYECTOVENTAS.Controllers
{
    public class PagoController : Controller
    {
        private COMPUVENTASEntities db = new COMPUVENTASEntities();
        //
        // GET: /Pago/
        //
        // GET: /Pago/Create
        public ActionResult Create()
        {
            ViewBag.documentopaga = new SelectList(db.DocPaga, "documentopaga", "descri");
            ViewBag.idCliente = new SelectList(db.tb_usuario, "idUsuario", "correoUsuario");
            ViewBag.idUsuario = new SelectList(db.tb_usuario, "idUsuario", "correoUsuario");
            return View();
        }

        [HttpPost]
        public ActionResult Create(PAGO pago)
        {
            if (ModelState.IsValid)
            {
                List<Producto> carro = (List<Producto>)Session["carro"];
                Usuario usuario = (Usuario)Session["usuario"];

                db.registrarPago(usuario.idUsuario, pago.in_id_tipopaVisa, pago.in_id_tipopaMastercard, pago.vc_dsc_numerotar, pago.fechaven, pago.cvc, pago.documentopaga);
                int? idVentaGenerada = db.PAGO.Max(v => v.in_id_pago);
                foreach (Producto prod in carro)
                {
                    db.registrarDetallePago(idVentaGenerada, prod.idProducto, prod.cantidad, decimal.Parse(prod.precioProducto.ToString()));
                }
                db.ppago5();

                //
                Correo correo = new Correo();
                
                correo.to = new string[] { usuario.correoUsuario };
                correo.subject = "Orden de Compra CompuVentas";
                correo.isHtml = true;
                correo.body = "Sr. " + usuario.nombresUsuario + " " + usuario.apePatUsuario + " " + usuario.apeMatUsuario + " se le adjunta su Orden de Compra en el siguiente PDF";

                List<REPORTPAGO_Result> p = new List<REPORTPAGO_Result>();
                p = db.REPORTPAGO(usuario.nombresUsuario + " " + usuario.apePatUsuario + " " + usuario.apeMatUsuario).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rpt_Pago2.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                Stream stream = (Stream)rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                stream.Seek(0, SeekOrigin.Begin);
                correo.data = new Attachment(stream, "OrdendeCompra.pdf", "application/pdf");
                try
                {
                    enviarCorreo(correo);
                    stream.Close();
                    stream.Flush();
                }
                catch (Exception e)
                {

                }
                Session["carro"] = new List<Producto>();
                Session["mensaje"] = "Enhorabuena " + usuario.nombresUsuario + ", tu compra se ha realizado.";
            }

            ViewBag.documentopaga = new SelectList(db.DocPaga, "documentopaga", "descri");
            return RedirectToAction("CarroCompras", "Productos");
        }

        //
        // GET: /Pago/Edit/5
        public void enviarCorreo(Correo correo)
        {
            MailMessage mail = new MailMessage();
            foreach (string to in correo.to)
            {
                mail.To.Add(to);
            }

            mail.From = new MailAddress("ttprincesstt@gmail.com");
            mail.Subject = correo.subject;
            mail.Body = correo.body;
            mail.IsBodyHtml = correo.isHtml;

            mail.Attachments.Add(correo.data);
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential
            ("ttprincesstt@gmail.com", "sphyro15");// Enter seders User name and password
            smtp.EnableSsl = true;
            smtp.Send(mail);
        }
    }
}