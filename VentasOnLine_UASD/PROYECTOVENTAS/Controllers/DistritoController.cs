using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PROYECTOVENTAS.Controllers
{
    public class DistritoController : Controller
    {
        private COMPUVENTASEntities db = new COMPUVENTASEntities();

        //
        // GET: /Distrito/

        public ActionResult Index()
        {
            return View(db.tb_distrito.ToList());
        }

        //
        // GET: /Distrito/Details/5

        public ActionResult Details(int id = 0)
        {
            tb_distrito tb_distrito = db.tb_distrito.Find(id);
            if (tb_distrito == null)
            {
                return HttpNotFound();
            }
            return View(tb_distrito);
        }

        //
        // GET: /Distrito/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Distrito/Create

        [HttpPost]
        public ActionResult Create(tb_distrito tb_distrito)
        {
            if (ModelState.IsValid)
            {
                db.tb_distrito.Add(tb_distrito);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tb_distrito);
        }

        //
        // GET: /Distrito/Edit/5

        public ActionResult Edit(int id = 0)
        {
            tb_distrito tb_distrito = db.tb_distrito.Find(id);
            if (tb_distrito == null)
            {
                return HttpNotFound();
            }
            return View(tb_distrito);
        }

        //
        // POST: /Distrito/Edit/5

        [HttpPost]
        public ActionResult Edit(tb_distrito tb_distrito)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tb_distrito).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tb_distrito);
        }

        //
        // GET: /Distrito/Delete/5

        public ActionResult Delete(int id = 0)
        {
            tb_distrito tb_distrito = db.tb_distrito.Find(id);
            if (tb_distrito == null)
            {
                return HttpNotFound();
            }
            return View(tb_distrito);
        }

        //
        // POST: /Distrito/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            tb_distrito tb_distrito = db.tb_distrito.Find(id);
            db.tb_distrito.Remove(tb_distrito);
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