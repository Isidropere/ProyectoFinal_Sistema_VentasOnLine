using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CrystalDecisions.CrystalReports.Engine;

namespace CR_With_MVC.AspNetForms
{
    public partial class aspnetgeneric : System.Web.UI.Page
    {

        /// <summary>
        /// This is generic report viewer
        /// This ReportViewer will load report with the report name Session["ReportName"]
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {

            try
            {
                bool isValid = true;

                // Setting ReportName
                string strReportName = System.Web.HttpContext.Current.Session["ReportName"].ToString();
                // Setting FromDate 

                // Setting Report Data Source     
                var rptSource = System.Web.HttpContext.Current.Session["rptSource"];

                if (string.IsNullOrEmpty(strReportName)) // Checking is Report name provided or not
                {
                    isValid = false;
                }


                if (isValid) // If Report Name provided then do other operation
                {
                    ReportDocument rd = new ReportDocument();
                                      string strRptPath=  Path.Combine(Server.MapPath("../Reports"), strReportName);
                    //Loading Report
                    rd.Load(strRptPath);

                    // Setting report data source
                    if (rptSource != null && rptSource.GetType().ToString() != "System.String")
                        rd.SetDataSource(rptSource);

                   
                    CrystalReportViewer1.ReportSource = rd;


                    Session["ReportName"] = "";
 
                    Session["rptSource"] = "";
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
