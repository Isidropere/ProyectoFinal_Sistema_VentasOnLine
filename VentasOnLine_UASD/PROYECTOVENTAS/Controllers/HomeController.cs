using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PROYECTOVENTAS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.ocultarCategorias = true;
            return View();
        }
        public ActionResult index2()
        {
     
            return View();
        }

        public ActionResult index2error()
        {

            return View();
        }

        public ActionResult Mantenimiento()
        {

            return View();
        }
    }
}
