using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PROYECTOVENTAS.Controllers
{
    public class MantProdController : Controller
    {
        private COMPUVENTASEntities db = new COMPUVENTASEntities();
        //
        // GET: /MantProd/
        public FileContentResult GetImage(Int32 CategoryID)
        {
            tb_producto cat = db.tb_producto.FirstOrDefault(c => c.idProducto == CategoryID);
            if (cat != null)
            {
                string type = string.Empty;
                if (!string.IsNullOrEmpty(cat.ruta_img))
                {
                    type = cat.ruta_img;
                }
                else
                {
                    type = "/images/jpeg";
                }

                return File(cat.imagen, type);
            }
            else
            {
                return null;
            }
        }

        public ActionResult Index()
        {
            var tb_producto = db.tb_producto.Include(t => t.tb_categoria);
            return View(tb_producto.ToList());
        }
        //
        // GET: /MantProd/Details/5

        public ActionResult Details(int id = 0)
        {
            tb_producto tb_producto = db.tb_producto.Find(id);
            if (tb_producto == null)
            {
                return HttpNotFound();
            }
            return View(tb_producto);
        }

        //
        // GET: /MantProd/Create

        public ActionResult Create()
        {
            ViewBag.idCategoria = new SelectList(db.tb_categoria, "CategoriaId", "descCategoria");
            return View();
        }

        //
        // POST: /MantProd/Create

        [HttpPost]
        public ActionResult Create(tb_producto tb_producto, HttpPostedFileBase image)
        {
            if (ModelState.IsValid)
            {

                if (image != null) {

                    tb_producto.ruta_img = image.ContentType;
                    int tam = image.ContentLength;
                    byte[] buffer = new byte[tam];
                    image.InputStream.Read(buffer, 0, tam);
                    tb_producto.imagen = buffer;
                }

                db.tb_producto.Add(tb_producto);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.idCategoria = new SelectList(db.tb_categoria, "CategoriaId", "descCategoria", tb_producto.idCategoria);
            return View(tb_producto);
        }

        //
        // GET: /MantProd/Edit/5

        public ActionResult Edit(int id = 0)
        {
            tb_producto tb_producto = db.tb_producto.Find(id);
            if (tb_producto == null)
            {
                return HttpNotFound();
            }
            ViewBag.idCategoria = new SelectList(db.tb_categoria, "CategoriaId", "descCategoria", tb_producto.idCategoria);
            return View(tb_producto);
        }

        //
        // POST: /MantProd/Edit/5

        [HttpPost]
        public ActionResult Edit(tb_producto tb_producto)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tb_producto).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.idCategoria = new SelectList(db.tb_categoria, "CategoriaId", "descCategoria", tb_producto.idCategoria);
            return View(tb_producto);
        }

        //
        // GET: /MantProd/Delete/5

        public ActionResult Delete(int id = 0)
        {
            tb_producto tb_producto = db.tb_producto.Find(id);
            if (tb_producto == null)
            {
                return HttpNotFound();
            }
            return View(tb_producto);
        }

        //
        // POST: /MantProd/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            tb_producto tb_producto = db.tb_producto.Find(id);
            db.tb_producto.Remove(tb_producto);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}