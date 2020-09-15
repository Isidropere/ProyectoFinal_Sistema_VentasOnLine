using System;
using System.Collections.Generic;
using System.Data.Objects.SqlClient;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using CrystalDecisions.CrystalReports.Engine;
using PROYECTOVENTAS.Models;
using PROYECTOVENTAS.Utils.Dto;

namespace PROYECTOVENTAS.Controllers
{
    public class ConsultaController : Controller
    {
        COMPUVENTASEntities db = new COMPUVENTASEntities();
        public ActionResult ExportReportConsultaPedidoxProducto(String fecha = null, String fecha2 = null, String producto = null, String fecha3 = null, String fecha4 = null)
        {
            List<PEDIDOXPRODUCTOXTODOS1_Result> p = new List<PEDIDOXPRODUCTOXTODOS1_Result>();
            if (!String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;

                p = db.PEDIDOXPRODUCTOXTODOS1(producto, f1, f2).ToList();

                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaProductoPedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }
            else if (!String.IsNullOrEmpty(producto) && String.IsNullOrEmpty(fecha) && String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha3).Date;
                DateTime f2 = Convert.ToDateTime(fecha4).Date;
                p = db.PEDIDOXPRODUCTOXTODOS1(producto, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaProductoPedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }
            else if (String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                p = db.PEDIDOXPRODUCTOXTODOS1(producto, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaProductoPedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }
            else
            {
                DateTime f1 = Convert.ToDateTime("01/01/01").Date;
                DateTime f2 = Convert.ToDateTime("12/31/3000").Date;
                IQueryable<PEDIDOXPRODUCTOXTODOS_Result> resultado1 = db.PEDIDOXPRODUCTOXTODOS("a3423432´+´sf", f1, f2);
                return View(resultado1.ToList());
            }
        }
        public ActionResult ExportReportConsultaPedidoCliente(String fecha = null, String fecha2 = null, String producto = null, String fecha3 = null, String fecha4 = null)
        {
            List<PEDIDOXCLIENTEXTODOS_Result> p = new List<PEDIDOXCLIENTEXTODOS_Result>();
            if (!String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                p = db.PEDIDOXCLIENTEXTODOS(producto, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaClientePedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }

            }

            else if (!String.IsNullOrEmpty(producto) && String.IsNullOrEmpty(fecha) && String.IsNullOrEmpty(fecha2))
            {

                DateTime f1 = Convert.ToDateTime(fecha3).Date;
                DateTime f2 = Convert.ToDateTime(fecha4).Date;
                p = db.PEDIDOXCLIENTEXTODOS(producto, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaClientePedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");

                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }

            else if (String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                p = db.PEDIDOXCLIENTEXTODOS(producto, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaClientePedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");

                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }
            else
            {

                DateTime f1 = Convert.ToDateTime("01/01/01").Date;
                DateTime f2 = Convert.ToDateTime("12/31/3000").Date;
                p = db.PEDIDOXCLIENTEXTODOS("ASDA´{+{fl--+", f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptConsultaClientePedido.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }
        }
        public ActionResult ExportReportConsultaBoleta(String box, String fecha = null, String fecha2 = null)
        {
            List<PEDIDOXCOMPROBANTE_Result> p = new List<PEDIDOXCOMPROBANTE_Result>();
            if (!String.IsNullOrEmpty(box) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                p = db.PEDIDOXCOMPROBANTE(box, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptDocumento.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
            }

            else
            {
                DateTime f1 = Convert.ToDateTime("01/01/01").Date;
                DateTime f2 = Convert.ToDateTime("12/31/3000").Date;

                p = db.PEDIDOXCOMPROBANTE(box, f1, f2).ToList();

                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptDocumento.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }

            }
        }
        public ActionResult TopClientes()
        {
            return View();
        }

        public ActionResult TopProductos()
        {
            return View();
        }
        public ActionResult AUDIFONOS()
        {
            var productos = from p in db.tb_producto
                            where p.idCategoria == 1
                            select new Producto
                            {
                                idProducto = p.idProducto,
                                nomProducto = p.nomProducto,
                                descProducto = p.descProducto,
                                precioProducto = (double)p.precioProducto,
                                stockProducto = p.stockProducto,
                                idCategoria = p.idCategoria,
                                estadoProducto = p.estadoProducto
                            };

            ViewBag.productos = productos.ToList();
            return View();
        }

        public ActionResult ARTCOMPU()
        {
            var productos = from p in db.tb_producto
                            where p.idCategoria == 2
                            select new Producto
                            {
                                idProducto = p.idProducto,
                                nomProducto = p.nomProducto,
                                descProducto = p.descProducto,
                                precioProducto = (double)p.precioProducto,
                                stockProducto = p.stockProducto,
                                idCategoria = p.idCategoria,
                                estadoProducto = p.estadoProducto
                            };


            ViewBag.productos = productos.ToList();
            return View();
        }
        public ActionResult USB()
        {
            var productos = from p in db.tb_producto
                            where p.idCategoria == 3
                            select new Producto
                            {
                                idProducto = p.idProducto,
                                nomProducto = p.nomProducto,
                                descProducto = p.descProducto,
                                precioProducto = (double)p.precioProducto,
                                stockProducto = p.stockProducto,
                                idCategoria = p.idCategoria,
                                estadoProducto = p.estadoProducto
                            };


            ViewBag.productos = productos.ToList();
            return View();
        }
        public ActionResult Clientes(String usu, String dni)
        {
            IQueryable<tb_usuario> resultado = db.tb_usuario;

            if (!String.IsNullOrEmpty(usu))
            {
                resultado = resultado.Where(p => p.nombresUsuario.Contains(usu) && p.idRol == 1);
                return View(resultado.ToList());
            }

            if (!String.IsNullOrEmpty(dni))
            {
                resultado = resultado.Where(p => p.dniUsuario.Contains(dni) && p.idRol == 1);
                return View(resultado.ToList());
            }

            else
                return View(resultado.Where(p => p.idRol == 1).ToList());
        }
        public ActionResult Index(bool checkboleta = false, bool checkfactura = false, bool checkTodo = false, String fecha = null, String fecha2 = null)
        {
            if (string.IsNullOrEmpty(fecha) && string.IsNullOrEmpty(fecha2))
            {
                return View("Error");
            }

            IQueryable<pagoconsulta> resultado = db.pagoconsulta;
            if (checkboleta == true)
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                resultado = resultado.Where(p => p.documento.Contains("Boleta") && p.fecha >= f1 && p.fecha <= f2);
                return View(resultado.ToList());
            }
            else if (checkfactura == true)
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                resultado = resultado.Where(p => p.documento.Contains("Factura") && p.fecha >= f1 && p.fecha <= f2);
                return View(resultado.ToList());
            }
            else if (checkTodo == true)
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                return View(resultado.Where(p => p.documento.Contains("Factura") && p.fecha >= f1 && p.fecha <= f2).ToList());
            }
            else
            {
                resultado = resultado.Where(p => p.documento.Contains("5"));
                return View(resultado.ToList());
            }

        }
        public ActionResult ConsultaPedidoxProducto(String fecha = null, String fecha2 = null, String producto = null, String fecha3 = null, String fecha4 = null)
        {
            if (string.IsNullOrEmpty(fecha) && string.IsNullOrEmpty(fecha2))
            {
                return View("Error");
            }

            if (!String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                IQueryable<PEDIDOXPRODUCTOXTODOS_Result> resultado = db.PEDIDOXPRODUCTOXTODOS(producto, f1, f2);
                return View(resultado.ToList());
            }
            else if (!String.IsNullOrEmpty(producto) && String.IsNullOrEmpty(fecha) && String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha3).Date;
                DateTime f2 = Convert.ToDateTime(fecha4).Date;
                IQueryable<PEDIDOXPRODUCTOXTODOS_Result> resultado = db.PEDIDOXPRODUCTOXTODOS(producto, f1, f2);
                return View(resultado.ToList());
            }

            else if (String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                IQueryable<PEDIDOXPRODUCTOXTODOS_Result> resultado = db.PEDIDOXPRODUCTOXTODOS(producto, f1, f2);
                return View(resultado.ToList());
            }
            else
            {
                DateTime f1 = Convert.ToDateTime("01/01/01").Date;
                DateTime f2 = Convert.ToDateTime("12/31/3000").Date;
                IQueryable<PEDIDOXPRODUCTOXTODOS_Result> resultado1 = db.PEDIDOXPRODUCTOXTODOS("a3423432´+´sf", f1, f2);

                return View(resultado1.ToList());
            }
        }
        public ActionResult ConsultaPedidoxCliente(String fecha = null, String fecha2 = null, String producto = null)
        {

            IQueryable<pagoconsulta> resultado = db.pagoconsulta;
            if (!String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                resultado = resultado.Where(p => p.fecha >= f1 && p.fecha <= f2 && p.cliente.Contains(producto));
                return View(resultado.ToList());
            }

            else if (!String.IsNullOrEmpty(producto) && String.IsNullOrEmpty(fecha) && String.IsNullOrEmpty(fecha2))
            {
                resultado = resultado.Where(p => p.cliente.Contains(producto));
                return View(resultado.ToList());
            }

            else if (String.IsNullOrEmpty(producto) && !String.IsNullOrEmpty(fecha) && !String.IsNullOrEmpty(fecha2))
            {
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;

                resultado = resultado.Where(p => p.fecha >= f1 && p.fecha <= f2);
                return View(resultado.ToList());
            }
            else

            resultado = resultado.Where(p => p.cliente.Contains("ñ´+{sad2113r4dfsl"));
            return View(resultado.ToList());
        }

        public ActionResult ExportReport(int id = 0, String fecha = null, String fecha2 = null)
        {

            if ( string.IsNullOrEmpty(fecha) && string.IsNullOrEmpty(fecha2))
            {
                return View("Error");
            }
          
                 Usuario usuario = (Usuario)Session["usuario"];
                List<TOPCLIENTES_Result> p = new List<TOPCLIENTES_Result>();
                DateTime f1 = Convert.ToDateTime(fecha).Date;
                DateTime f2 = Convert.ToDateTime(fecha2).Date;
                p = db.TOPCLIENTES(id, f1, f2).ToList();
                ReportDocument rd = new ReportDocument();
                rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptTopClientes.rpt"));
                rd.SetDataSource(p);
                Response.Buffer = false;
                Response.ClearContent();
                Response.ClearHeaders();
                try
                {
                    Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                    stream.Seek(0, SeekOrigin.Begin);
                    return File(stream, "application/pdf");
                }
                catch (Exception ex)
                {
                    return View("Error", ex);
                }
       
        }
        public ActionResult ExportReport1(int id = 1, String fecha = null, String fecha2 = null)
        {
            if (string.IsNullOrEmpty(fecha) && string.IsNullOrEmpty(fecha2))
            {
                return View("Error");
            }
            Usuario usuario = (Usuario)Session["usuario"];
            List<TOPPRODUCTOS_Result> p = new List<TOPPRODUCTOS_Result>();
            DateTime f1 = Convert.ToDateTime(fecha).Date;
            DateTime f2 = Convert.ToDateTime(fecha2).Date;
            p = db.TOPPRODUCTOS(id, f1, f2).ToList();
            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("../Reports"), "rptTopProductos.rpt"));
            rd.SetDataSource(p);
            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();
            try
            {
                Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
                stream.Seek(0, SeekOrigin.Begin);
                return File(stream, "application/pdf");
            }
            catch (Exception ex)
            {
                return View("Error", ex);
            }


        }


        public void enviarCorreo(Correo correo)
        {
            MailMessage mail = new MailMessage();
            foreach (string to in correo.to)
            {
                mail.To.Add(to);
            }

            mail.From = new MailAddress("isidro17pereza@gmail.com");
            mail.Subject = correo.subject;
            mail.Body = correo.body;
            mail.IsBodyHtml = correo.isHtml;

            mail.Attachments.Add(correo.data);
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential
            ("isidro17pereza@gmail.com", "@Zion12345");// Enter seders User name and password
            smtp.EnableSsl = true;
            smtp.Send(mail);
        }


    }

}
