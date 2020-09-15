﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Shared;

namespace PROYECTOVENTAS.Controllers
{
    public class GenericReportViewerController : Controller
    {
        //
        // GET: /GenericReportViewer/

        public ActionResult Index()
        {
            return View();
        }

        public void ShowGenericRpt()
        {
            try
            {
                bool isValid = true;
                string strReportName = System.Web.HttpContext.Current.Session["ReportName"].ToString();    // Setting ReportName
                var rptSource = System.Web.HttpContext.Current.Session["rptSource"];
                if (string.IsNullOrEmpty(strReportName))
                {
                    isValid = false;
                }
                if (isValid)
                {
                    ReportDocument rd = new ReportDocument();
                    string strRptPath = System.Web.HttpContext.Current.Server.MapPath("../") + "Reports/" + strReportName;
                    rd.Load(strRptPath);
                    if (rptSource != null && rptSource.GetType().ToString() != "System.String")
                        rd.SetDataSource(rptSource);
                    rd.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, "crReport");
                    // Clear all sessions value
                    Session["ReportName"] = null;
                    Session["rptSource"] = null;
                }
                else
                {
                    Response.Write("<H2>Nothing Found; No Report name found</H2>");
                }
            }
            catch (Exception ex)
            {
                Response.Write(ex.ToString());
            }
        }
    }

}
