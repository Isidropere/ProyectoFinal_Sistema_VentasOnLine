/*var nav4 = window.Event ? true : false;
function acceptNum(evt){ 
// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57 
var key = nav4 ? evt.which : evt.keyCode; 
return (key <= 13 || (key >= 48 && key <= 57));
}*/

function rellena_dep(cl, no, pr, pp)
{
 	with (document.frm)
	{
		clave.value= cl;
		nombre.value= no;
		Id.value = cl;

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
		pro.value = pp;
	}
}

function rellena(cl, no)
{
 	with (document.frm)
	{
		clave.value= cl;
		nombre.value= no;

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function rellena_pla(c, n, o, s, u, po, per)
{
 	with (document.frm)
	{
		clave.value= c;
		nombre.value= n;		
		sec.value = s;
		Id_S.value = s;
		Eliminar.style.display = '';
		Modificar.style.display = '';
		Guardar.style.display = 'none';
		if(u == '0' || per == '0'){
			pro.value = po;
		document.frm.target = 'derecho';
		document.frm.action = 'planos.php';
		document.frm.submit();}
		Id_S.value = s;
	}
}

function rellena_colaborador(cl, no, pu, d, p, bd)
{
 	with (document.frm)
	{
		clave.value= cl;
		nombre.value= no;
		puesto.value= pu;
		dep2.value = d;
		dep.value = d;
		
		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
		pro.value= p;
		if(bd == 1){	document.frm.submit();}
	}
}

function rellena_software(cl, no, au)
{
 	with (document.frm)
	{
		clave.value= cl;
		nombre.value= no;
		if(aut1.value == au){ 
			aut1.checked=true;
			aut2.checked=false;}
		else{aut2.checked=true;
			aut1.checked=false;}
		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function limpia() 
{
  with (document.frm) 
  {
    reset();
	nombre.focus();
    Guardar.style.display = "";
    Modificar.style.display = "none";
	Eliminar.style.display="none";
  }
}

function rellena_proyecto(po, de, di, cl, so)
{
 	with (document.frm)
	{
		id_proyecto.value= po;
		nombre.value= de;
		dire.value= di;
		clave.value= cl;
		social.value = so;

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function rellena_sistema(idp, nom)
{
 	with (document.frm)
	{
		id_proyecto.value= idp;
		nombre.value= nom;	

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function rellena_usuario(emp, c, us, pa, sis, pe)
{
 	with (document.frm)
	{
		empresa.value = emp;
		id_col.value = c;
		usuario.value = us;
		pass.value = pa;		
		sistema.value = sis;
		if(per1.value == pe)		
			{
				per1.checked = true;
				per2.checked = false;
				per3.checked = false;
			}
		else if(per2.value == pe)
			{
				per2.checked = true;
				per1.checked = false;
				per3.checked = false;
			}
		else
			{
				per3.checked = true;
				per1.checked = false;
				per2.checked = false;
			}
		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
		document.frm.submit();
	}
}

function rellena_res(a, b, c, d, e, f, g, h, i, j, k, l, m, n ,z)
{
 	
	with (document.frm)
	{
		cant.value= a;
		acc.value= b;		
		//tipo.value= d;		
		id_tipo.value = d;
		marca.value = f;		
		modelo.value = h;
		serie.value = i;
		fecha.value = j;
		pro.value = k;
		
		if(aut1.value == l){ 
			aut1.checked=true;
			aut2.checked=false;}
		else{aut2.checked=true;
			aut1.checked=false;}
		fact.value = m;
		notas.value = n;
		id.value = z;	
		
		Enviar();
		id_tipo.value = d;
	}
}

function rellena_tipo(aa, bb, cc, ee)
{
 	with (document.frm)
	{
		clave.value = aa;
		des.value = bb;
		acc.value = cc;
		acc.text = ee;

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function limpia_t() 
{
  with (document.frm) 
  {
	cant.value ="";
	acc.value ="";
	tipo.value ="";
	marca.value ="";
	modelo.value ="";
	serie.value ="";
	notas.value ="";
	cant.focus();

    Guardar.style.display = "";
    Modificar.style.display = "none";
	Eliminar.style.display="none";

  }
}

/*function rellena_equipo(cl, no, de, em, a, b, d)
{
 	with (document.frm)
	{
		clav.value = cl;
		nombr.value = no;
		empe.value = de;	
		empe.text = em;
		
		id.value = a;
		pre.value = b;
		
		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}

	with (document.form1)
	{
		clave.value = cl;
		nombre.value = no;
		dep.value = d;
		emp.value = em;

		Resguardo.style.display = '';
		Software.style.display = '';
	}
}*/

function limpia_e() 
{
  with (document.frm) 
  {
    reset();
    Guardar.style.display = "";
    Modificar.style.display = "none";
	Eliminar.style.display="none";
  }
	with (document.form1)
	{
		Resguardo.style.display ="none";
		Software.style.display = "none";
		Auditoria.style.display = "none";
	}
	
}

function limpia_r() 
{
  with (document.frm) 
  {
    cant.value ="";
	acc.value ="";
	tipo.value ="";
	marcacant.value ="";
	modelo.value ="";
	serie.value ="";
	notas.value ="";
	fecha.value ="";
	pro.value ="";
	arre.value ="";
	fact.value ="";

	agregar.style.display = "";
    Modificar.style.display = "none";
	Eliminar.style.display="none";
  }	
}

function salir() 
{
	close();
}

function hr() 
{
	with (document.frm) 
  	{	 
    	Modificar.style.display = '';	
  	}
}

function rellena_soft(a, b, c, d, e, f)
{
 	with (document.frm)
	{
		id.value = a;
		soft.value = b;
		ver.value = c;
		if(aut1.value == d){ 
			aut1.checked=true;
			aut2.checked=false;}
		else{aut2.checked=true;
			aut1.checked=false;}
		usu.value = e;
		pass.value = f;

		Eliminar.style.display = '';
		agregar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function limpia_s() 
{
  with (document.frm) 
  {
    reset();
	agregar.style.display = "";
    Modificar.style.display = "none";
	Eliminar.style.display="none";
  }	
}

function software(a, b, c, d, e ,f)
{
 	with (document.frm)
	{
		id.value= a;
		soft.value= b;
		ver.value = c;
		if(aut1.value == d){ 
			aut1.checked=true;
			aut2.checked=false;}
		else{aut2.checked=true;
			aut1.checked=false;}
		usu.value = e;
		pass.value = f;

		Eliminar.style.display = '';
		agregar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function cambia(l)
{
	document.form1.action = l;
}

function cambia1(l)
{
	document.frm.action = l;
}

function auditoria(A, b, c, d, e, f, g, h, i)
{
 	with (document.frm)
	{
		I.value= A;
		fecha.value= b;
		mp3.value = c;
		vm.value = d;
		vf.value = e;
		vp.value = f;
		ip.value = g;
		ie.value = h;
		ob.value = i;
		
		Eliminar.style.display = '';
		agregar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function limpia_accesorio()
{
 	with (document.frm)
	{
		cant.value = "";
		acc.value = 0;
		tipo.value =0;
		marca.value = 0;
		modelo.value = "";
		serie.value="";
		notas.value="";
		fecha.value="";
		pro.value ="";
		aut1.checked=true;
		aut2.checked=false;
		fact.value = "";
		id.value = "";	
		agregar.style.display = "";
   		Modificar.style.display = "none";
		Eliminar.style.display="none";
	}
}

function limpia_colaborador(cl)
{
 	with (document.frm)
	{
		clave.value = cl;
		nombre.value = "";
		puesto.value = "";
		Guardar.style.display = "";
   		Modificar.style.display = "none";
		Eliminar.style.display="none";
		dep.value = 0;
		pro.value = 0;
	}
}

function Limpia_telefonos() 
{
  with (document.frm) 
  {
    reset();
	Nombre.focus();
    Guardar.style.display = "";
    Modificar.style.display = "none";
	Eliminar.style.display="none";

  }
}


function rellena_telefonos(d,aa, bb, b, c)
{
 	with (document.frm)
	{
		proyecto.value = d;
		identificador.value= aa;
		Nombre.value = bb;
		Celular.value = b;		
		Convencional.value = c;		

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}

function rellena_ext(Ident, dep, nom, ex)
{
 	with (document.frm)
	{
		Id.value=Ident;
		Depto.value=dep;
		Nombre.value= nom;
		Ext.value=ex;

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
	}
}


//**********************************************************************************************************

//Funciones para todos los formularios
function fecha_calendario(obj) 
{	
	Calendar.setup
	({ 
		inputField : obj,  		 	// id del campo de texto 
		ifFormat   : "%Y-%m-%d",    // formato de la fecha que se escriba en el campo de texto 
		button     : obj          	// el id del bot&oacute;n que lanzar&aacute; el calendario 
	}); 
}

function tecla()
{
	if (event.keyCode==13)
	{
		alert("Enter Invalido");
		event.keyCode=0;
		event.returnValue=false;
	}
} 	
document.onkeydown=tecla;

function click() 
{
	if (event.button== 2 ) 
	{
		alert( 'No se puede usar ese botón!' );
	}
}
document.onmousedown=click 

function cerrar()
{
document.close();
}

function rellena_comercial(aa, bb, a, b, c, d, e)
{
 	with (document.frm)
	{
		id.value= aa;
		pro.value = bb;
		
		nombre.value= a;
		rsoc.value= b;
		cont.value= c;
		tel.value= d;
		direc.value = e;

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
		pro1.value = bb;
	}
}

function rellena_ext(aa, bb, a, b, c)
{
 	with (document.frm)
	{
		Idd.value= aa;
		Depto.value = bb;
		pro.value = c;
		Nombre.value = a;
		Ext.value = b;
		

		Eliminar.style.display = '';
		Guardar.style.display = 'none';
		Modificar.style.display = '';
		pro1.value = c;
	}
}

