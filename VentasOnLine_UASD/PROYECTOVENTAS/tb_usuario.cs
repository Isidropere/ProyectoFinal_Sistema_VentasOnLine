//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PROYECTOVENTAS
{
    using System;
    using System.Collections.Generic;
    
    public partial class tb_usuario
    {
        public tb_usuario()
        {
            this.PAGO = new HashSet<PAGO>();
            this.PAGO1 = new HashSet<PAGO>();
            this.tb_venta = new HashSet<tb_venta>();
        }
    
        public int idUsuario { get; set; }
        public string correoUsuario { get; set; }
        public string claveUsuario { get; set; }
        public string nombresUsuario { get; set; }
        public string apePatUsuario { get; set; }
        public string apeMatUsuario { get; set; }
        public string dniUsuario { get; set; }
        public System.DateTime fecNacimientoUsuario { get; set; }
        public string telefonoUsuario { get; set; }
        public string celularUsuario { get; set; }
        public int idRol { get; set; }
    
        public virtual ICollection<PAGO> PAGO { get; set; }
        public virtual ICollection<PAGO> PAGO1 { get; set; }
        public virtual tb_rol tb_rol { get; set; }
        public virtual ICollection<tb_venta> tb_venta { get; set; }
    }
}
