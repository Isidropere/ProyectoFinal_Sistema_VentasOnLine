//ABRE UNA VENTANA DEL TAMAÑO ESPECIFICADO
function ventana(url, ancho, alto, barra, nombre) {
	izquierda = (screen.width) ? (screen.width-ancho)/2 : 100
	arriba = (screen.height) ? (screen.height-alto)/2 : 100
	opciones = 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=' + barra + ',resizable=0,width=' + ancho + ',height=' + alto + ',left=' + izquierda + ',top=' + arriba + ''
	window.open(url,nombre, opciones)
}
//ABRE UNA VENTANA SEMI FULL SCREEN
function BigWindow(page,nombre,cerrar) {
	var yes = 1;
	var no = 0;
	
	var menubar = no;      // The File, Edit, View Menus
	var scrollbars = yes   // Horizontal and vertical scrollbars
	var locationbar = no;  // The location box with the site URL
	var directories = no;  // the "What's New", "What Cool" links
	var resizable = no;    // Can the window be resized?
	var statusbar = no;    // Status bar (with "Document: Done")
	var toolbar = no;      // Back, Forward, Home, Stop toolbar
	
	windowprops = "width=" + (screen.width-10) + ",height=" + (screen.height-50) + ",top=0,left=0";
	
	windowprops += (menubar ? ",menubars" : "") +
	(scrollbars ? ",scrollbars" : "") +
	(locationbar ? ",location" : "") +
	(directories ? ",directories" : "") +
	(resizable ? ",resizable" : "") +
	(statusbar ? ",status" : "") +
	(toolbar ? ",toolbar" : "");
	
	newwindow = window.open(page, nombre, windowprops);
	newwindow.focus();
	
	if(cerrar==1){
		window.self.opener='xx'
		window.close()
	}
}
//ABRE UNA VENTANA SEMI FULL SCREEN
function ventanaEspecial(page,nombre) {
	var yes = 1;
	var no = 0;
	
	var menubar = no;      // The File, Edit, View Menus
	var scrollbars = yes   // Horizontal and vertical scrollbars
	var locationbar = yes;  // The location box with the site URL
	var directories = no;  // the "What's New", "What Cool" links
	var resizable = no;    // Can the window be resized?
	var statusbar = no;    // Status bar (with "Document: Done")
	var toolbar = yes;      // Back, Forward, Home, Stop toolbar
	
	windowprops = "width=" + (screen.width-10) + ",height=" + (screen.height-50) + ",top=0,left=0";
	
	windowprops += (menubar ? ",menubars" : "") +
	(scrollbars ? ",scrollbars" : "") +
	(locationbar ? ",location" : "") +
	(directories ? ",directories" : "") +
	(resizable ? ",resizable" : "") +
	(statusbar ? ",status" : "") +
	(toolbar ? ",toolbar" : "");
	
	window.open(page, nombre, windowprops);
}
// DESHABILITAR CLICK BOTON DERECHO
function NRC(e) {
	if(navigator.appName=="Netscape") {
		if(e.which==3||e.which==2) { return false; return true }
	}
	else { event.cancelBubble=true; event.returnValue=false }
}
//PONER ESTO ENTRE LOS TAGS DE <HEAD> Y </HEAD>
/*
	if(navigator.appName=="Netscape") window.captureEvents(Event.MOUSEDOWN)
	document.oncontextmenu=NRC; window.onmousedown=NRC
*/

//DESHABILITAR SELECCION DE TEXTO
function disabletext(e){
	return false
}
function reEnable(){
	return true
}

//CANCELAR F5 -->
// Just add this script to the header
  function showDown(evt) {
        evt = (evt) ? evt : ((event) ? event : null);
        if (evt) {
            if (event.keyCode == 8 && (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password")) {
                // When backspace is pressed but not in form element
                cancelKey(evt);
            }
            else if (event.keyCode == 116) {
                // When F5 is pressed
                cancelKey(evt);
            }
            else if (event.ctrlKey && (event.keyCode == 78 || event.keyCode == 82)) {
                // When ctrl is pressed with R or N
                cancelKey(evt);
            }
        }
    }

    function cancelKey(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
            return false;
        }
        else {
            evt.keyCode = 0;
            evt.returnValue = false;
        }
    }
//TE DESPLAZA DE UN OBJETO A OTRO CON ENTER
function accion_blur(element){
	x=element.name
}
function accion_focus(element) {
	x=element.name
	objeto_focus=element.name
	document.all['tmpfocus'].value=element.name
	return;
}
function TeclaPulsada() {
	f=frm;
	tecla =window.event.keyCode
	if(tecla == 13) {
		for (var i=0;i<f.elements.length;i++) {
		//for (var i=0;i<document.forms[0].elements.length;i++) {	
			var e = f.elements[i].name
			if(e==objeto_focus && i<f.elements.length-1) {
				while (i<f.elements.length-1){
					var tipo=f.elements[i+1].type
					var des=f.elements[i+1].readOnly
					var vis=f.elements[i+1].style.visibility
				 	if(tipo!="submit" && des!=true && tipo!="button" && vis!="hidden" && f.elements[i+1].disabled!=true) {
						f.elements[i+1].focus()
						break
					}
					else i++
				}
			}
		}
	}
	return true;
}
function captura_evento(f) {
	var focus_handler  = new Function("accion_focus(this)")
	var Blur_handler  = new Function("accion_blur(this)")
	document.onkeydown=TeclaPulsada
	for (var i=0;i<f.elements.length;i++){   	  
		f.elements[i].onfocus  = focus_handler
		f.elements[i].onblur   = Blur_handler
	}
}
//MUESTRA EL CONTENIDO DE UN REGISTRO EN SUS RESPECTIVOS CAMPOS AL SELECCIONARLO
function selecciona_presupuesto(e) {
	if(frm.txtNumero) frm.txtNumero.value=e.numero
	if(frm.txtUnidad) frm.txtUnidad.value=e.unidad
	if(frm.txtCantidad) frm.txtCantidad.value=e.cantidad
	if(frm.cboConcepto) frm.cboConcepto.selectedIndex=e.concepto
	if(frm.txtDescripcion) frm.txtDescripcion.value=e.descripcion
	if(frm.txtFecha) frm.txtFecha.value=e.fecha
	if(frm.txtCostoUnitario) frm.txtCostoUnitario.value=e.unitario
	if(frm.txtCostoTotal) frm.txtCostoTotal.value=e.total
	if(frm.cboHotel) frm.cboHotel.value=e.hotel
	if(frm.txtEditar) frm.txtEditar.value=true
}
//VACIA TODOS LOS CAMPOS DE UN FORMULARIO
function limpia_formato() {
	for (var i=0;i<frm.elements.length;i++){   	  
		frm.elements[i].value  = ''
	}
}
//ACTIVA TODOS LOS OBJETOS DE UN FORMULARIO
function activa_objetos() {
	for (var i=0;i<frm.elements.length;i++) {
		frm.elements[i].disabled=false
		frm.elements[i].readOnly=false
	}
}
//DESACTIVA TODOS LOS OBJETOS DE UN FORMULARIO
function desactiva_objetos() {
	for (var i=0;i<frm.elements.length;i++) {
		frm.elements[i].readOnly=true
		frm.elements[i].disabled=true
	}
}
//CONVIERTE A MAYUSCULAS EL CONTENIDO DE TODOS LOS OBJETOS DE UN FORMULARIO
function fuentes_mayusculas() {
	for (var i=0;i<frm.elements.length;i++){   	  
		frm.elements[i].value=frm.elements[i].value.toUpperCase()
	} 	
}
//DETERMINA LOS PARAMETROS PARA CALCULAR EL COSTO UNITARIO EN EL PRESUPUESTO DE SEGURIDAD
function costo_unitario(e) {
	frm.txtCostoUnitario.value=e.options[e.selectedIndex].costo
	frm.txtUnidad.value=e.options[e.selectedIndex].unidad
	calcula_costo_total()
}
//CALCULA EL COSTO TOTAL DE UN REGISTRO EN EL PRESUPUESTO DE SEGURIDAD
function calcula_costo_total() {
	if(frm.txtCantidad.value!='') {
		frm.txtCostoTotal.value=frm.txtCantidad.value*frm.txtCostoUnitario.value
	}
}
//REDIRECCIONA EL EXPLORADOR A LA PAGINA INDICADA
function ir(url) {
	top.location.href=url
}
//REDIRECCIONA EL EXPLORADOR A LA PAGINA INDICADA EN EL MAINFRAME
function goto(url) {
	top.mainFrame.location.href=url
}
//CARGA LA URL EN EL FRAME PRINCIPAL
function loadUrl(url,fr) {
	//top.frames[frm].location.href = url;
	//eval("top.parent.frames['mainFrame'].document.getElementById('"+fr+"').src = '"+url+"'");
	top.parent.frames['mainFrame'].document.getElementById(fr).src = url;
}
//DETERMINA LA TABLA QUE ESTA ACTIVA, LA MUESTRA Y CAMBIA EL ESTILO DEL TAB
function cambia_tabla(tabla) {
	eval("top.mainFrame.document.all['tbl"+Ahora+"'].innerHTML=top.mainFrame.document.all['tblTablas'].innerHTML")
	//eval("document.all['tab"+Ahora+"'].className='TabInactivo'")
	Ahora=tabla
	eval("top.mainFrame.document.all['tblTablas'].innerHTML=top.mainFrame.document.all['tbl"+tabla+"'].innerHTML")
  	eval("top.mainFrame.document.all['tbl"+tabla+"'].innerHTML=''")
	//eval("document.all['tab"+tabla+"'].className='TabActivo'")
	//frm.txtTab.value="tbl"+tabla
}
//VERIFICA QUE TODOS LOS CAMPOS CONTENGAN ALGUN VALOR
function checa_formulario() {
	for (var i=0;i<frm.elements.length;i++){
		if(frm.elements[i].type!="submit" && frm.elements[i].type!="reset" && frm.elements[i].type!="hidden") {
			if(frm.elements[i].value=='') error=true
			else error=false
		}
	}
	if(error==true) alert("Debe llenar todos los campos.")
	else frm.submit()
}
//MUESTRA LA PAGINA INDICADA EN EL iFRAME INDICADO
function iframe(frm,url) {
	eval("document.all['"+frm+"'].src=url")
}
//DA CLICK EN EL LINK QUE CONTIENE COMO REFERENCIA EL ARCHIVO QUE SE DESEA BAJAR
function bajar_archivo() {
	document.all['lnkArchivo'].click()
}
//CUANDO CAMBIA EL ESTILO DEL BORDE DE UN OBJETO.
function ItemClicked(item) {
	if(this.sliding)
		return;		
	item.style.border="2 inset #ffffff";
}
function ItemSelected(item) {
	if(this.sliding)
		return;
	item.style.border="1 outset #ffffff";
	
	if(item.link.indexOf("javascript")!=-1) {
		eval(item.link)
	}
	else {
		eval(item.targetFrame+".location='"+item.link+"'");
	}
}
function OverItems(item) {
	if(this.sliding)
		return;		
	item.style.border="1 outset #ffffff";
}
function OutItems(item) {
	if(this.sliding)
		return;		
	item.style.border="0 none black";
}
function agregar(xl,xl2) {
	lista=eval("document.all['"+xl+"']")		
	seleccionados=eval("document.all['"+xl2+"']")		
	xpos=lista.selectedIndex
	if(xpos>=0){
		xsel=lista.options[xpos].text
		xenc=0
		for(vcic=0;vcic<seleccionados.options.length;vcic++){
			if(xsel==seleccionados.options[vcic].text){
				xenc++
				alert('El campo (' + seleccionados.options[vcic].text + ') ya fue agregado en la lista...');					
				break	
			}			   
		}
		if(xenc<=0){	
			seleccionados.options.length++		
			seleccionados.options[seleccionados.options.length-1].text  = lista.options[lista.selectedIndex].text	
			seleccionados.options[seleccionados.options.length-1].value = lista.options[lista.selectedIndex].value
		}	
	}	
}
function agregar_todos(xl,xl2) {
	lista=eval("document.all['"+xl+"']")		
	seleccionados=eval("document.all['"+xl2+"']")		
	seleccionados.options.length=0
	for(vcic=0;vcic<lista.options.length;vcic++){
		seleccionados.options.length++		
		seleccionados.options[vcic].text  = lista.options[vcic].text	
		seleccionados.options[vcic].value = lista.options[vcic].value
	}			
}
function quitar(xl,xl2) {
	lista=eval("document.all['"+xl+"']")		
	seleccionados=eval("document.all['"+xl2+"']")		
	xpos=seleccionados.selectedIndex
	if(xpos>=0){
		for(vcic=xpos;vcic<=seleccionados.options.length-2;vcic++) {
			seleccionados.options[vcic].text=seleccionados.options[vcic+1].text
			seleccionados.options[vcic].value=seleccionados.options[vcic+1].value
		}
		seleccionados.options.length--	
	}
}
function quitar_todos(xl,xl2) {	
	lista=eval("document.all['"+xl+"']")		
	seleccionados=eval("document.all['"+xl2+"']")		
	seleccionados.options.length=0	
}
function abajo(xl,xl2) {
	lista=eval("document.all['"+xl+"']")		
	seleccionados=eval("document.all['"+xl2+"']")		
	xpos=seleccionados.selectedIndex
	if(xpos<seleccionados.options.length-1 && xpos>=0){
		texto=seleccionados.options[xpos].text
		valor=seleccionados.options[xpos].value
		seleccionados.options[xpos].text=seleccionados.options[xpos+1].text
		seleccionados.options[xpos].value=seleccionados.options[xpos+1].value
		seleccionados.options[xpos+1].text=texto
		seleccionados.options[xpos+1].value=valor
		seleccionados.selectedIndex=xpos+1					
	}
}
function arriba(xl,xl2){
	lista=eval("document.all['"+xl+"']")		
	seleccionados=eval("document.all['"+xl2+"']")		
	xpos=seleccionados.selectedIndex
	if(xpos>0){
		texto=seleccionados.options[xpos].text
		valor=seleccionados.options[xpos].value
		seleccionados.options[xpos].text=seleccionados.options[xpos-1].text
		seleccionados.options[xpos].value=seleccionados.options[xpos-1].value
		seleccionados.options[xpos-1].text=texto
		seleccionados.options[xpos-1].value=valor
		seleccionados.selectedIndex=xpos-1					
	}
}
//ASIGNA LOS ACCESOS A LOS USUARIOS
function aceptar_accesos() {
	document.all['Aceptar'].click()
}
function busca_elemento(e) {
	top.topFrame.document.all['xelemento'].value=e
	top.topFrame.document.all['Completar'].click()
}
function selecciona_elemento(e) {
	if(frm.txtNumero) frm.txtNumero.value=e.value
	if(frm.txtDescripcion) frm.txtDescripcion.value=e.descripcion
	if(frm.txtContrasenia) frm.txtContrasenia.value=e.contrasenia
	if(frm.cboGrupo) frm.cboGrupo.selectedIndex=e.grupo
	if(frm.cboTipo) frm.cboTipo.selectedIndex=e.tipo
	if(frm.cboProyecto) frm.cboProyecto.selectedIndex=e.proyecto
	if(frm.txtFecha) frm.txtFecha.value=e.fecha
}
function sel_articulo(r){
	frm.txtNumero.value=eval("document.all['r_numero_"+r+"'].value")
	frm.txtArticulo.value=eval("document.all['r_descripcion_"+r+"'].value")
	frm.txtPrecio.value=eval("document.all['r_precio_"+r+"'].value")
	//frm.txtAlmacen.value=eval("document.all['r_numero_"+r+"'].almacen")
	//frm.txtFamilia.value=eval("document.all['r_numero_"+r+"'].familia")
	frm.txtAlmacen.value=eval("document.all['r_numero_"+r+"'].almacen")+" "+eval("document.all['r_numero_"+r+"'].nombre_almacen")
	frm.txtFamilia.value=eval("document.all['r_numero_"+r+"'].familia")+" "+eval("document.all['r_numero_"+r+"'].nombre_familia")
	frm.txtCantidad.value=eval("document.all['r_numero_"+r+"'].cantidad")
	frm.txtUnidad.value=eval("document.all['r_numero_"+r+"'].nombre_unidad")
	frm.cboUnidades.selectedIndex=eval("document.all['r_numero_"+r+"'].unidad")
	frm.txtMedida.value=eval("document.all['r_numero_"+r+"'].medida")
	frm.txtClase.value=eval("document.all['r_numero_"+r+"'].nombre_clase")
	frm.cboClases.selectedIndex=eval("document.all['r_numero_"+r+"'].clase")
}
function mas_articulos(pos,mas) {
	id='tArticulos'	
	win=window.parent.opener
	
	numero=frm.txtNumero.value
	descripcion=frm.txtArticulo.value
	almacen=frm.txtAlmacen.value
	familia=frm.txtFamilia.value
	precio=frm.txtPrecio.value
	cantidad=frm.txtCantidad.value
	//unidad=frm.txtUnidad.value
	//e.options[e.selectedIndex].text
	unidad=frm.cboUnidades.options[frm.cboUnidades.selectedIndex].value+" "+frm.cboUnidades.options[frm.cboUnidades.selectedIndex].nombre
	medida=frm.txtMedida.value
	//clase=frm.txtClase.value
	clase=frm.cboClases.options[frm.cboClases.selectedIndex].value+" "+frm.cboClases.options[frm.cboClases.selectedIndex].nombre
	//alert("Numero: "+numero+", Descripcion: "+descripcion+", Almacen: "+almacen+", Familia: "+familia)
	
	if(mas=="Agregar") {
		var tot=Number(win.document.all['cant_art'].value)+1		
		win.document.all['cant_art'].value=Number(win.document.all['cant_art'].value)+1		
		
		var col0="<input name='indice"+tot+"' type='text' size='3' value='"+tot+"' onClick='eliminar_articulo("+tot+")' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		//var col0="<a href='#' name='"+tot+"'>'"+tot+"'</a>";
		var col1="<input name='numero"+tot+"' type='text' size='10' value='"+numero+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col2="<input name='descripcion"+tot+"' type='text' size='25' value='"+descripcion+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col3="<input name='almacen"+tot+"' type='text' size='5' value='"+almacen+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col4="<input name='familia"+tot+"' type='text' size='5' value='"+familia+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col5="<input name='precio"+tot+"' type='text' size='10' value='"+precio+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col6="<input name='cantidad"+tot+"' type='text' size='5' value='"+cantidad+"' style='cursor:hand;'>"
		var col7="<input name='unidad"+tot+"' type='text' size='5' value='"+unidad+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col8="<input name='medida"+tot+"' type='text' size='5' value='"+medida+"' style='cursor:hand;'>"
		var col9="<input name='clase"+tot+"' type='text' size='5' value='"+clase+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		
		var tbody = win.document.getElementById
		(id).getElementsByTagName("TBODY")[0];
		var row = win.document.createElement("TR")
		
		var td0 = win.document.createElement("TD")
		td0.appendChild(win.document.createElement(col0))
		var td1 = win.document.createElement("TD")
		td1.appendChild(win.document.createElement(col1))
		var td2 = win.document.createElement("TD")
		td2.appendChild(win.document.createElement(col2))
		var td3 = win.document.createElement("TD")
		td3.appendChild(win.document.createElement(col3))
		var td4 = win.document.createElement("TD")
		td4.appendChild(win.document.createElement(col4))
		var td5 = win.document.createElement("TD")
		td5.appendChild(win.document.createElement(col5))
		var td6 = win.document.createElement("TD")
		td6.appendChild(win.document.createElement(col6))
		var td7 = win.document.createElement("TD")
		td7.appendChild(win.document.createElement(col7))
		var td8 = win.document.createElement("TD")
		td8.appendChild(win.document.createElement(col8))
		var td9 = win.document.createElement("TD")
		td9.appendChild(win.document.createElement(col9))
		
		row.appendChild(td0);
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		row.appendChild(td4);
		row.appendChild(td5);
		row.appendChild(td6);
		row.appendChild(td7);
		row.appendChild(td8);
		row.appendChild(td9);
		tbody.appendChild(row);
	}
	frm.txtNumero.value=''
	frm.txtArticulo.value=''
	frm.txtPrecio.value=''
	frm.txtAlmacen.value=''
	frm.txtFamilia.value=''
	frm.txtCantidad.value=''
	frm.txtUnidad.value=''
	frm.txtMedida.value=''
	frm.txtClase.value=''
	frm.cboUnidades.selectedIndex=''
	frm.cboClases.selectedIndex=''
}

function eliminar_articulo(pos){   
	pos=Number(pos)
    tot=Number(document.all['cant_art'].value)
	//alert(pos)
	for(x=pos;x<tot;x++){
		campo1=eval("document.all['indice"+x+"']")
		campo2=eval("document.all['numero"+x+"']")
		campo3=eval("document.all['descripcion"+x+"']")
		campo4=eval("document.all['almacen"+x+"']")
		campo5=eval("document.all['familia"+x+"']")
		campo6=eval("document.all['precio"+x+"']")
		campo7=eval("document.all['cantidad"+x+"']")
		campo8=eval("document.all['unidad"+x+"']")
		campo9=eval("document.all['medida"+x+"']")
		campo10=eval("document.all['clase"+x+"']")
		
		xcampo1=eval("document.all['indice"+(x+1)+"']")
		xcampo2=eval("document.all['numero"+(x+1)+"']")
		xcampo3=eval("document.all['descripcion"+(x+1)+"']")
		xcampo4=eval("document.all['almacen"+(x+1)+"']")
		xcampo5=eval("document.all['familia"+(x+1)+"']")
		xcampo6=eval("document.all['precio"+(x+1)+"']")
		xcampo7=eval("document.all['cantidad"+(x+1)+"']")
		xcampo8=eval("document.all['unidad"+(x+1)+"']")
		xcampo9=eval("document.all['medida"+(x+1)+"']")
		xcampo10=eval("document.all['clase"+(x+1)+"']")
		
		campo1.value=xcampo1.value;
		campo2.value=xcampo2.value;
		campo3.value=xcampo3.value;
		campo4.value=xcampo4.value;
		campo5.value=xcampo5.value;
		campo6.value=xcampo6.value;
		campo7.value=xcampo7.value;
		campo8.value=xcampo8.value;
		campo9.value=xcampo9.value;
		campo10.value=xcampo10.value;
	}	


	document.all['tArticulos'].deleteRow(document.all['tArticulos'].rows.length-1)	
	document.all['cant_art'].value=Number(document.all['cant_art'].value)-1
	//Limpia_Refe()
	//quitar_botonR()	
	
//	quitar_edicion()
}
function catalogo_articulos() {
	if(frm.cboNivel.selectedIndex!='') ventana('articulos.php','640','480','0','articulos_window')
	else {
		alert('Seleccione un Nivel')
		frm.cboNivel.focus()
	}
}
function checa_requisicion() {
	if(frm.cant_art.value>0) frm.Guardar.click()
	else alert('Debe agregar al menos un artículo para poder enviar la requisición.')
}

//FUNCIONES PARA EL SISTEMA SAAC
function DivisionNuevo(){		
	document.forms.Departamento.NvoDivision.disabled=false; 
	document.forms.Departamento.SelecDivision.disabled=true; 
	document.forms.Departamento.NvoDivision.value="";
	document.forms.Departamento.NvoDivision.focus();
}
	
function DivisionExist(){
	document.forms.Departamento.NvoDivision.value="";
	document.forms.Departamento.NvoDivision.disabled=true; 
	document.forms.Departamento.SelecDivision.disabled=false; 
	document.forms.Departamento.SelecDivision.focus(); 
}
	
function DeptoNuevo(){		
	document.forms.Departamento.NvoDepto.disabled=false; 
	document.forms.Departamento.SelecDepto.disabled=true; 
	document.forms.Departamento.NvoDepto.value="";
	document.forms.Departamento.NvoDepto.focus();
}
	
function DeptoExis(){
	document.forms.Departamento.NvoDepto.value="";
	document.forms.Departamento.NvoDepto.disabled=true; 
	document.forms.Departamento.SelecDepto.disabled=false; 
	document.forms.Departamento.SelecDepto.focus(); 
}
function Validar(){	
	//Para Obtener la división a la que pertenece el departamento
	if(document.forms.Departamento.SelecDivision.value==""){
		document.forms.Departamento.Division.value=document.forms.Departamento.NvoDivision.value
	}
	else{
		document.forms.Departamento.Division.value=document.forms.Departamento.SelecDivision.value
	}
	//Departamento
	if(document.forms.Departamento.SelecDepto.value==""){
		document.forms.Departamento.Depto.value=document.forms.Departamento.NvoDepto.value
	}
	else {
		document.forms.Departamento.Depto.value=document.forms.Departamento.SelecDepto.value
	}
	if((document.forms.Departamento.Division.value=="")||(document.forms.Departamento.Depto.value=="")||(document.forms.Departamento.Puestos.value=="")){
		//No se envia		
		alert("Debe llenar todos los campos solicitados");
		document.forms.Departamento.SelecDepto.focus(); 
		return false;
	}
}
	
function Enviar(){
	alert("Envia")
	frm.action="ReporteServicio.php";
	frm.submit();
}
	
function Guardar(){
	//Verificamos si los campos estas llenos
	if	((frm.Departamento.value!="") && (frm.Puesto.value!="") && (frm.Colaborador.value!="") && (frm.Problema.value!="")){
			frm.Grabar.click()
	}
	else{
		alert("Debe llenar todos los campos");
		return false;
	}		
}
	
function Respuesta(){
	if (frm.Folio.value!=""){
		//se despliega el folio			
		alert("El folio asignado a su reporte es " + frm.Folio.value);
		frm.Folio.value="";
	}		
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_validateForm() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);
    if (val) { nm=val.name; if ((val=val.value)!="") {
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
      } else if (test!='R') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
  } if (errors) alert('The following error(s) occurred:\n'+errors);
  document.MM_returnValue = (errors == '');
}
function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}

function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strMonth=dtStr.substring(0,pos1)
	var strDay=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : mm/dd/yyyy")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date")
		return false
	}
return true
}

function ValidateForm2(objeto){
	var dt=objeto
	if (isDate(dt.value)==false){
		dt.focus()
		return false
	}
    return true
 }
 
function ValidateForm() {
	for (var i=0;i<frm.elements.length;i++){
		if(frm.elements[i].type!="submit" && frm.elements[i].type!="reset" && frm.elements[i].type!="button") {
			alert(frm.elements[i].name+" -> "+frm.elements[i].value)
			if(frm.elements[i].value=='') error=false
			else error=true
		}
	}
	if (error==false) {
		alert("Debe capturar todos los campos")
		frm.elements[0].focus()
	}
	return error
}



function buscaRegistro(e) {
	window.parent.topFrame.frm.txtClave.value=e.value
	window.parent.topFrame.frm.BuscaRegistro.click()
}

function errorMsg() {
	alert("La clave del artículo ya existe.")
	window.parent.framePrincipal.frm.txtClave.focus()
}

function selecciona_auditoria(e) {
	frm.Folio.value=e.id
	frm.cboDepartamento.selectedIndex=e.depto
	frm.txtNombre.value=e.nombre
	frm.txtMp3Audio.value=e.mp3
	frm.txtVideosMusicales.value=e.videos_musicales
	frm.txtOtrosVideos.value=e.otros_videos
	frm.txtVideosPorno.value=e.videos_porno
	frm.txtImagenesPorno.value=e.imagenes_porno
	frm.txtImagenesEroticas.value=e.imagenes_eroticas
	frm.txtArchivosExe.value=e.archivos_exe
	frm.txtPresentaciones.value=e.presentaciones
	frm.txtRespaldos.value=e.respaldos
	frm.txtAntiguedad.value=e.antiguedad
	frm.txtIncidencias.value=e.incidencias
	frm.txtObservaciones.value=e.observaciones
	frm.txtFecha.value=e.auditoria
	frm.Nuevo.value='NoNuevo'
}

function autocomplete(e) {
	if(e.options[e.selectedIndex].descripcion!="catalogo") {
		window.parent.framePrincipal.document.all['txtArticulo'].value=e.options[e.selectedIndex].descripcion
		window.parent.framePrincipal.document.all['txtCodigo'].value=e.options[e.selectedIndex].codigo
		window.parent.framePrincipal.document.all['txtClaveArticulo'].value=e.options[e.selectedIndex].value
		window.parent.framePrincipal.document.all['txtParStock'].value=e.options[e.selectedIndex].parstock
		window.parent.framePrincipal.document.all['txtInventarioAnterior'].value=e.options[e.selectedIndex].inventario
	}
	else {
		ventana('catalogo_blancos.php?Redirect=Movimientos_Blancos', 765, 250, 0, 'CatBlancos')
	}
	
	window.parent.framePrincipal.document.all['AyudaArticulo'].style.visibility='hidden'
	window.parent.framePrincipal.document.all['AyudaArticulo'].innerHTML=''
	window.parent.framePrincipal.document.all['txtInventarioAnterior'].focus()
}

function diferencias_inventario_blancos() {
	frm.txtInvContable.value=(Number(frm.txtInventarioAnterior.value)+Number(frm.txtEntradas.value))-Number(frm.txtBajas.value)
	frm.txtContableVSFisico.value=Number(frm.txtInvContable.value-frm.txtInvFisico.value)
	frm.txtFisicoVSParStock.value=Number(frm.txtInvFisico.value-frm.txtParStock.value)
}

function edita_movimiento_blancos(e) {
	frm.Folio.value=e.folio
	frm.txtParStock.value=e.parstock
	frm.txtCodigo.value=e.codigo
	frm.txtClaveArticulo.value=e.clave_articulo
	frm.txtArticulo.value=e.articulo
	frm.txtInventarioAnterior.value=e.inventario_anterior
	frm.txtEntradas.value=e.entradas
	frm.txtFEntrada.value=e.fecha_entrada
	frm.txtBajas.value=e.bajas
	frm.txtInvContable.value=e.contable
	frm.txtInvFisico.value=e.fisico
	frm.txtFecha.value=e.fecha
	frm.txtContableVSFisico.value=e.contable_fisico
	frm.txtFisicoVSParStock.value=e.fisico_parstock
	frm.Nuevo.value='NoNuevo'
}

function edita_catalogo_blancos(e) {
	frm.Folio.value=e.getAttribute("folio");
	frm.txtClave.value=e.getAttribute("clave");
	frm.txtCodigo.value=e.getAttribute("e.codigo");
	frm.txtDescripcion.value=e.getAttribute("e.descripcion");
	frm.txtParstock.value=e.getAttribute("e.parstock");
	frm.Nuevo.value='NoNuevo'
}

function edita_catalogo_presupuesto(e) {
	frm.txtNumero.value=e.getAttribute("numero");
	frm.txtDescripcion.value=e.getAttribute("descripcion");
	frm.txtPresupuesto.value=e.getAttribute("presupuesto");
}

function edita_catalogo_suites(e) {
	frm.Folio.value=e.getAttribute("folio");
	frm.txtClave.value=e.getAttribute("clave");
	frm.txtDescripcion.value=e.getAttribute("descripcion");
	if(frm.cboProyecto) frm.cboProyecto.selectedIndex=e.getAttribute("proyecto");
	frm.Nuevo.value='NoNuevo'
}

function edita_modulos(e) {
	frm.txtClave.value=e.getAttribute("clave");
	frm.txtDescripcion.value=e.getAttribute("descripcion");
	frm.txtDirectorio.value=e.getAttribute("link");
	frm.txtOrden.value=e.getAttribute("orden");
	frm.Nuevo.value='NoNuevo'
}

function edita_opciones(e) {
	frm.txtClave.value=e.getAttribute("clave");
	frm.txtDescripcion.value=e.getAttribute("descripcion");
	frm.txtDirectorio.value=e.getAttribute("dir");
	frm.cboModulo.selectedIndex=e.getAttribute("modulo");
	frm.txtOrden.value=e.getAttribute("orden");
	frm.Nuevo.value='NoNuevo'
}

function edita_usuarios(e) {
	frm.txtCuenta.value=e.getAttribute("cuenta");
	frm.txtPasswd.value=e.getAttribute("passwd");
	frm.txtNombre.value=e.getAttribute("nombre");
	frm.txtEmail.value=e.getAttribute("email");
	frm.cboProyecto.selectedIndex=e.getAttribute("proyecto");
	frm.cboDepartamento.selectedIndex=e.getAttribute("departamento");
	frm.cboArea.selectedIndex=e.getAttribute("area");
	frm.cboPuesto.selectedIndex=e.getAttribute("puesto");
	frm.Nuevo.value='NoNuevo'
}

function edita_salones(e) {
	frm.cboProyecto.value=e.getAttribute("proyecto");
	frm.txtsalon.value=e.getAttribute("salon");
	frm.txtdescripcion.value=e.getAttribute("descripcion");
	frm.txtmax.value=e.getAttribute("max");
	frm.Nuevo.value='NoNuevo'
}

function edita_eventosgrupos(e) {
	frm.txtevento.value=e.getAttribute("evento");
	frm.txtdescripcion.value=e.getAttribute("descripcion");
	frm.Nuevo.value='NoNuevo'
}

function downloadFile(file) {
   	window.ie_download = window.open(file,"DOWNLOAD","width=0,height=0,location=no,menubar=no,toolbar=no");
	setTimeout('ie_download.document.execCommand("SaveAs"); ie_download.close();', "1000");
}


function autocompletepresup(e) {
	if(e.options[e.selectedIndex].descripcion!="catalogo") {
		window.parent.framePrincipal.document.all['txtDescripcion'].value=e.options[e.selectedIndex].descripcion
		window.parent.framePrincipal.document.all['txtNumero'].value=e.options[e.selectedIndex].numero

	}
	
	window.parent.framePrincipal.document.all['AyudaConcepto'].style.visibility='hidden'
	window.parent.framePrincipal.document.all['AyudaConcepto'].innerHTML=''
	window.parent.framePrincipal.document.all['txtPresupuesto'].focus()
}

function cerrar_ventana() {
	window.parent.self.opener='xx'
	window.parent.close()
}

function edita_auditoria(e) {
	document.getElementById('Folio').value = e.folio
	document.getElementById('cboDepartamento').selectedIndex = e.depto
	document.getElementById('txtPuesto').value = e.puesto
	document.getElementById('txtNombre').value = e.nombre
	document.getElementById('txtMp3Audio').value = e.mp3
	document.getElementById('txtVideosMusicales').value = e.videos_musicales
	document.getElementById('txtOtrosVideos').value = e.otros_videos
	document.getElementById('txtVideosPorno').value = e.videos_porno
	document.getElementById('txtImagenesPorno').value = e.imagenes_porno
	document.getElementById('txtImagenesEroticas').value = e.imagenes_eroticas
	document.getElementById('txtArchivosExe').value = e.archivos_exe
	document.getElementById('txtPresentaciones').value = e.presentaciones
	document.getElementById('txtRespaldos').value = e.respaldos
	document.getElementById('txtAntiguedad').value = e.antiguedad
	document.getElementById('txtIncidencias').value = e.incidencias
	document.getElementById('txtObservaciones').value = e.observaciones
	document.getElementById('txtFecha').value = e.auditoria
	document.getElementById('Nuevo').value = 'NoNuevo'
	
	if(e.r1=='1') document.all['r1'][0].checked = true
	else document.all['r1'][1].checked = true
	
	if(e.r2=='1') document.all['r2'][0].checked = true
	else document.all['r2'][1].checked = true
	
	if(e.r3=='1') document.all['r3'][0].checked = true
	else document.all['r3'][1].checked = true
	
	if(e.r4=='1') document.all['r4'][0].checked = true
	else document.all['r4'][1].checked = true
	
	if(e.r5=='1') document.all['r5'][0].checked = true
	else document.all['r5'][1].checked = true
	
	if(e.r6=='1') document.all['r6'][0].checked = true
	else document.all['r6'][1].checked = true
	
	if(e.r7=='1') document.all['r7'][0].checked = true
	else document.all['r7'][1].checked = true
	
	if(e.r8=='1') document.all['r8'][0].checked = true
	else document.all['r8'][1].checked = true
	
	if(e.r9=='1') document.all['r9'][0].checked = true
	else document.all['r9'][1].checked = true
	
	if(e.r10=='1') document.all['r10'][0].checked = true
	else document.all['r10'][1].checked = true
	
	/*frm.Folio.value=e.folio
	frm.cboDepartamento.selectedIndex=e.depto
	frm.txtPuesto.value=e.puesto
	frm.txtNombre.value=e.nombre
	frm.txtMp3Audio.value=e.mp3
	frm.txtVideosMusicales.value=e.videos_musicales
	frm.txtOtrosVideos.value=e.otros_videos
	frm.txtVideosPorno.value=e.videos_porno
	frm.txtImagenesPorno.value=e.imagenes_porno
	frm.txtImagenesEroticas.value=e.imagenes_eroticas
	frm.txtArchivosExe.value=e.archivos_exe
	frm.txtPresentaciones.value=e.presentaciones
	frm.txtRespaldos.value=e.respaldos
	frm.txtAntiguedad.value=e.antiguedad
	frm.txtIncidencias.value=e.incidencias
	frm.txtObservaciones.value=e.observaciones
	frm.txtFecha.value=e.auditoria
	frm.Nuevo.value='NoNuevo'*/
}

function checkModulo(objeto) {
	if(eval("frm."+objeto.name+".checked==true")) {
		frm.txtModulo.value=objeto.value
		frm.submit()
	}
}

function checkOpcion(objeto) {
	if(eval("frm."+objeto.name+".checked==true")) {	
		//if(frm.txtOpciones.value!='') frm.txtOpciones.value+=","
		frm.txtOpciones.value+=objeto.value+","
	}
	else {
		var where_is_cadena=frm.txtOpciones.value.indexOf(objeto.value+",")
		//frm.txtOpciones.value-=where_is_cadena
		x=frm.txtOpciones.value.substr(0,where_is_cadena)+frm.txtOpciones.value.substr(where_is_cadena+objeto.value.length+1)
		frm.txtOpciones.value=x
	}
}
//función para reservaciones de grupos.
function mas_eventos(pos,mas) {
	id='tEvento'
	win=window.parent.opener
	
	proyecto=frm.cboProyecto.options[frm.cboProyecto.selectedIndex].value+" "+frm.cboProyecto.options[frm.cboProyecto.selectedIndex].nombre
	salon=frm.cbosalon.options[frm.cbosalon.selectedIndex].value+" "+frm.cbosalon.options[frm.cbosalon.selectedIndex].nombre
	evento = frm.cboevento.options[frm.cboevento.selectedIndex].value+" "+frm.cboevento.options[frm.cboevento.selectedIndex].nombre
	fechaini=frm.txtFechaini.value
	fechafin=frm.txtFechafin.value
	personas=frm.txtpersonas.value
	Horaini = frm.cboHoraini.options[frm.cboHoraini.selectedIndex].value+" "+frm.cboHoraini.options[frm.cboHoraini.selectedIndex].nombre
	Horafin = frm.cboHora.options[frm.cboHora.selectedIndex].value+" "+frm.cboHora.options[frm.cboHora.selectedIndex].nombre
	Minutosini = frm.cboMinutosini.options[frm.cboMinutosini.selectedIndex].value+" "+frm.cboMinutosini.options[frm.cboMinutosini.selectedIndex].nombre
	Minutosfin = frm.cboMinutos.options[frm.cboMinutos.selectedIndex].value+" "+frm.cboMinutos.options[frm.cboMinutos.selectedIndex].nombre
	personas=frm.txtpersonas.value
	
	if(mas=="Agregar") {
		var tot=Number(win.document.all['cant_art'].value)+1
		win.document.all['cant_art'].value=Number(win.document.all['cant_art'].value)+1
		
		var col0="<input name='indice"+tot+"' type='text' size='3' value='"+tot+"' onClick='eliminar_articulo("+tot+")' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col1="<input name='numero"+tot+"' type='text' size='10' value='"+numero+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col2="<input name='descripcion"+tot+"' type='text' size='25' value='"+descripcion+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col3="<input name='almacen"+tot+"' type='text' size='5' value='"+almacen+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col4="<input name='familia"+tot+"' type='text' size='5' value='"+familia+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col5="<input name='precio"+tot+"' type='text' size='10' value='"+precio+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col6="<input name='cantidad"+tot+"' type='text' size='5' value='"+cantidad+"' style='cursor:hand;'>"
		var col7="<input name='unidad"+tot+"' type='text' size='5' value='"+unidad+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		var col8="<input name='medida"+tot+"' type='text' size='5' value='"+medida+"' style='cursor:hand;'>"
		var col9="<input name='clase"+tot+"' type='text' size='5' value='"+clase+"' Readonly style='border:0px none #FFFFFF;cursor:hand;'>"
		
		var tbody = win.document.getElementById
		(id).getElementsByTagName("TBODY")[0];
		var row = win.document.createElement("TR")
		
		var td0 = win.document.createElement("TD")
		td0.appendChild(win.document.createElement(col0))
		var td1 = win.document.createElement("TD")
		td1.appendChild(win.document.createElement(col1))
		var td2 = win.document.createElement("TD")
		td2.appendChild(win.document.createElement(col2))
		var td3 = win.document.createElement("TD")
		td3.appendChild(win.document.createElement(col3))
		var td4 = win.document.createElement("TD")
		td4.appendChild(win.document.createElement(col4))
		var td5 = win.document.createElement("TD")
		td5.appendChild(win.document.createElement(col5))
		var td6 = win.document.createElement("TD")
		td6.appendChild(win.document.createElement(col6))
		var td7 = win.document.createElement("TD")
		td7.appendChild(win.document.createElement(col7))
		var td8 = win.document.createElement("TD")
		td8.appendChild(win.document.createElement(col8))
		var td9 = win.document.createElement("TD")
		td9.appendChild(win.document.createElement(col9))
		
		row.appendChild(td0);
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		row.appendChild(td4);
		row.appendChild(td5);
		row.appendChild(td6);
		row.appendChild(td7);
		row.appendChild(td8);
		row.appendChild(td9);
		tbody.appendChild(row);
	}
	frm.txtNumero.value=''
	frm.txtArticulo.value=''
	frm.txtPrecio.value=''
	frm.txtAlmacen.value=''
	frm.txtFamilia.value=''
	frm.txtCantidad.value=''
	frm.txtUnidad.value=''
	frm.txtMedida.value=''
	frm.txtClase.value=''
	frm.cboUnidades.selectedIndex=''
	frm.cboClases.selectedIndex=''
}

	function addEndCol(obj)
	{
		if(document.all)return;
		var rows = obj.getElementsByTagName('TR');
		for(var no=0;no<rows.length;no++){
			var cell = rows[no].insertCell(-1);
			cell.innerHTML = ' ';
			cell.style.width = '13px';
			cell.width = '13';

		}	
		
	}
	
	function highlightTableHeader()
	{
		this.className='tableWigdet_headerCellOver';
		if(document.all){	// I.E fix for "jumping" headings
			var divObj = this.parentNode.parentNode.parentNode.parentNode;
			this.parentNode.style.top = divObj.scrollTop + 'px';

		}
			
	}
	
	function deHighlightTableHeader()
	{
		this.className='tableWidget_headerCell';		
	}
	
	function mousedownTableHeader()
	{
		this.className='tableWigdet_headerCellDown';
		if(document.all){	// I.E fix for "jumping" headings
			var divObj = this.parentNode.parentNode.parentNode.parentNode;
			this.parentNode.style.top = divObj.scrollTop + 'px';
		}		
	}
	
	function sortNumeric(a,b){		    
       
		a = a.replace(/,/,'');
		b = b.replace(/,/,'');
		a = a.replace(/[^\d\.\/]/g,'');
		b = b.replace(/[^\d\.\/]/g,'');
		if(a.indexOf('/')>=0)a = eval(a);
		if(b.indexOf('/')>=0)b = eval(b);
		return a/1 - b/1;
	}
	

	function sortString(a, b) {

	  if ( a.toUpperCase() < b.toUpperCase() ) return -1;
	  if ( a.toUpperCase() > b.toUpperCase() ) return 1;
	  return 0;
	}	
	function cancelTableWidgetEvent()
	{
		return false;
	}
	
	function sortTable()
	{
		if(!tableWidget_okToSort)return;
		tableWidget_okToSort = false;
		/* Getting index of current column */
		var obj = this;
		var indexThis = 0;
		while(obj.previousSibling){
			obj = obj.previousSibling;
			if(obj.tagName=='TD')indexThis++;		
		}
		var images = this.getElementsByTagName('IMG');
		
		if(this.getAttribute('direction') || this.direction){
			direction = this.getAttribute('direction');
			if(navigator.userAgent.indexOf('Opera')>=0)direction = this.direction;
			if(direction=='ascending'){
				direction = 'descending';
				this.setAttribute('direction','descending');
				this.direction = 'descending';	
			}else{
				direction = 'ascending';
				this.setAttribute('direction','ascending');		
				this.direction = 'ascending';		
			}
		}else{
			direction = 'ascending';
			this.setAttribute('direction','ascending');
			this.direction = 'ascending';
		}
		
		
		
		if(direction=='descending'){
			images[0].style.display='inline';
			images[0].style.visibility='visible';
			images[1].style.display='none';
		}else{
			images[1].style.display='inline';
			images[1].style.visibility='visible';
			images[0].style.display='none';		
		}

		
		var tableObj = this.parentNode.parentNode.parentNode;
		var tBody = tableObj.getElementsByTagName('TBODY')[0];
		
		var widgetIndex = tableObj.id.replace(/[^\d]/g,'');
		var sortMethod = tableWidget_arraySort[widgetIndex][indexThis]; // N = numeric, S = String
		if(activeColumn[widgetIndex] && activeColumn[widgetIndex]!=this){
			var images = activeColumn[widgetIndex].getElementsByTagName('IMG');
			images[0].style.display='none';
			images[1].style.display='inline';
			images[1].style.visibility = 'hidden';
			if(activeColumn[widgetIndex])activeColumn[widgetIndex].removeAttribute('direction');			
		}

		activeColumn[widgetIndex] = this;
		
		var cellArray = new Array();
		var cellObjArray = new Array();
		for(var no=1;no<tableObj.rows.length;no++){
			var content= tableObj.rows[no].cells[indexThis].innerHTML+'';
			cellArray.push(content);
			cellObjArray.push(tableObj.rows[no].cells[indexThis]);
		}
		
		if(sortMethod=='N'){
			cellArray = cellArray.sort(sortNumeric);
		}else{
			cellArray = cellArray.sort(sortString);
		}
		
		if(direction=='descending'){
			for(var no=cellArray.length;no>=0;no--){
				for(var no2=0;no2<cellObjArray.length;no2++){
					if(cellObjArray[no2].innerHTML == cellArray[no] && !cellObjArray[no2].getAttribute('allreadySorted')){
						cellObjArray[no2].setAttribute('allreadySorted','1');	
						tBody.appendChild(cellObjArray[no2].parentNode);				
					}				
				}			
			}
		}else{
			for(var no=0;no<cellArray.length;no++){
				for(var no2=0;no2<cellObjArray.length;no2++){
					if(cellObjArray[no2].innerHTML == cellArray[no] && !cellObjArray[no2].getAttribute('allreadySorted')){
						cellObjArray[no2].setAttribute('allreadySorted','1');	
						tBody.appendChild(cellObjArray[no2].parentNode);				
					}				
				}			
			}				
		}
		
		for(var no2=0;no2<cellObjArray.length;no2++){
			cellObjArray[no2].removeAttribute('allreadySorted');		
		}

		tableWidget_okToSort = true;
		
		
	}
	
	function initTableWidget(objId,width,height,sortArray)
	{
		width = width + '';
		height = height + '';
		var obj = document.getElementById(objId);
		tableWidget_arraySort[tableWidget_tableCounter] = sortArray;
		if(width.indexOf('%')>=0){
			obj.style.width = width;
			obj.parentNode.style.width = width;
		}else{
			obj.style.width = width + 'px';
			obj.parentNode.style.width = width + 'px';
		}
		
		if(height.indexOf('%')>=0){
			obj.style.height = height;		
			obj.parentNode.style.height = height;			
			
		}else{
			obj.style.height = height + 'px';		
			obj.parentNode.style.height = height + 'px';
		}
		obj.id = 'tableWidget' + tableWidget_tableCounter;
		addEndCol(obj);
		
		obj.cellSpacing = 1;
		obj.cellPadding = 0;
		obj.className='tableWidget';
		var tHead = obj.getElementsByTagName('THEAD')[0];
		var cells = tHead.getElementsByTagName('TD');
		for(var no=0;no<cells.length;no++){
			cells[no].className = 'tableWidget_headerCell';
			cells[no].onselectstart = cancelTableWidgetEvent;
			if(no==cells.length-1){
				cells[no].style.borderRight = '0px';	
			}
			if(sortArray[no]){
				cells[no].onmouseover = highlightTableHeader;
				cells[no].onmouseout =  deHighlightTableHeader;
				cells[no].onmousedown = mousedownTableHeader;		
				cells[no].onmouseup = highlightTableHeader;		
				cells[no].onclick = sortTable;	
				
				var img = document.createElement('IMG');
				img.src = arrowImagePath + 'arrow_up.gif';
				cells[no].appendChild(img);	
				img.style.visibility = 'hidden';
				
				var img = document.createElement('IMG');
				img.src = arrowImagePath + 'arrow_down.gif';
				cells[no].appendChild(img);	
				img.style.display = 'none';
				
				
			}else{
				cells[no].style.cursor = 'default';	
			}
			
			
		}		
		var tBody = obj.getElementsByTagName('TBODY')[0];
		if(document.all && navigator.userAgent.indexOf('Opera')<0){
			tBody.className='scrollingContent';
			tBody.style.display='block';			
		}else{
			tBody.className='scrollingContent';
			tBody.style.height = (obj.parentNode.clientHeight-tHead.offsetHeight) + 'px';
			if(navigator.userAgent.indexOf('Opera')>=0){
				obj.parentNode.style.overflow = 'auto';
			}
		}
		
		for(var no=1;no<obj.rows.length;no++){
			obj.rows[no].onmouseover = highlightDataRow;
			obj.rows[no].onmouseout = deHighlightDataRow;
			for(var no2=0;no2<sortArray.length;no2++){	/* Right align numeric cells */
				if(sortArray[no2] && sortArray[no2]=='N')obj.rows[no].cells[no2].style.textAlign='right';
			}
		}
		for(var no2=0;no2<sortArray.length;no2++){	/* Right align numeric cells */
			if(sortArray[no2] && sortArray[no2]=='N')obj.rows[0].cells[no2].style.textAlign='right';
		}		
		
		tableWidget_tableCounter++;
	}
	
	
	function highlightDataRow()
	{
		if(navigator.userAgent.indexOf('Opera')>=0)return;
		this.className='tableWidget_dataRollOver';
		if(document.all){	// I.E fix for "jumping" headings
			var divObj = this.parentNode.parentNode.parentNode;
			var tHead = divObj.getElementsByTagName('TR')[0];
			tHead.style.top = divObj.scrollTop + 'px';
			
		}	
	}
	
	function deHighlightDataRow()
	{
		if(navigator.userAgent.indexOf('Opera')>=0)return;
		this.className=null;
		if(document.all){	// I.E fix for "jumping" headings
			var divObj = this.parentNode.parentNode.parentNode;
			var tHead = divObj.getElementsByTagName('TR')[0];
			tHead.style.top = divObj.scrollTop + 'px';
		}			
	}
	
//function Sort a table	
	
	function SortableTable(oTable, oSortTypes) {

	this.sortTypes = oSortTypes || [];

	this.sortColumn = null;
	this.descending = null;

	var oThis = this;
	this._headerOnclick = function (e) {
		oThis.headerOnclick(e);
	};

	if (oTable) {
		this.setTable( oTable );
		this.document = oTable.ownerDocument || oTable.document;
	}
	else {
		this.document = document;
	}


	// only IE needs this
	var win = this.document.defaultView || this.document.parentWindow;
	this._onunload = function () {
		oThis.destroy();
	};
	if (win && typeof win.attachEvent != "undefined") {
		win.attachEvent("onunload", this._onunload);
	}
}

SortableTable.gecko = navigator.product == "Gecko";
SortableTable.msie = /msie/i.test(navigator.userAgent);
// Mozilla is faster when doing the DOM manipulations on
// an orphaned element. MSIE is not
SortableTable.removeBeforeSort = SortableTable.gecko;

SortableTable.prototype.onsort = function () {};

// default sort order. true -> descending, false -> ascending
SortableTable.prototype.defaultDescending = false;

// shared between all instances. This is intentional to allow external files
// to modify the prototype
SortableTable.prototype._sortTypeInfo = {};

SortableTable.prototype.setTable = function (oTable) {
	if ( this.tHead )
		this.uninitHeader();
	this.element = oTable;
	this.setTHead( oTable.tHead );
	this.setTBody( oTable.tBodies[0] );
};

SortableTable.prototype.setTHead = function (oTHead) {
	if (this.tHead && this.tHead != oTHead )
		this.uninitHeader();
	this.tHead = oTHead;
	this.initHeader( this.sortTypes );
};

SortableTable.prototype.setTBody = function (oTBody) {
	this.tBody = oTBody;
};

SortableTable.prototype.setSortTypes = function ( oSortTypes ) {
	if ( this.tHead )
		this.uninitHeader();
	this.sortTypes = oSortTypes || [];
	if ( this.tHead )
		this.initHeader( this.sortTypes );
};

// adds arrow containers and events
// also binds sort type to the header cells so that reordering columns does
// not break the sort types
SortableTable.prototype.initHeader = function (oSortTypes) {
	if (!this.tHead) return;
	var cells = this.tHead.rows[0].cells;
	var doc = this.tHead.ownerDocument || this.tHead.document;
	this.sortTypes = oSortTypes || [];
	var l = cells.length;
	var img, c;
	for (var i = 0; i < l; i++) {
		c = cells[i];
		if (this.sortTypes[i] != null && this.sortTypes[i] != "None") {
			img = doc.createElement("IMG");
			img.src = "../img/blank.png";
			c.appendChild(img);
			if (this.sortTypes[i] != null)
				c._sortType = this.sortTypes[i];
			if (typeof c.addEventListener != "undefined")
				c.addEventListener("click", this._headerOnclick, false);
			else if (typeof c.attachEvent != "undefined")
				c.attachEvent("onclick", this._headerOnclick);
			else
				c.onclick = this._headerOnclick;
		}
		else
		{
			c.setAttribute( "_sortType", oSortTypes[i] );
			c._sortType = "None";
		}
	}
	this.updateHeaderArrows();
};

// remove arrows and events
SortableTable.prototype.uninitHeader = function () {
	if (!this.tHead) return;
	var cells = this.tHead.rows[0].cells;
	var l = cells.length;
	var c;
	for (var i = 0; i < l; i++) {
		c = cells[i];
		if (c._sortType != null && c._sortType != "None") {
			c.removeChild(c.lastChild);
			if (typeof c.removeEventListener != "undefined")
				c.removeEventListener("click", this._headerOnclick, false);
			else if (typeof c.detachEvent != "undefined")
				c.detachEvent("onclick", this._headerOnclick);
			c._sortType = null;
			c.removeAttribute( "_sortType" );
		}
	}
};

SortableTable.prototype.updateHeaderArrows = function () {
	if (!this.tHead) return;
	var cells = this.tHead.rows[0].cells;
	var l = cells.length;
	var img;
	for (var i = 0; i < l; i++) {
		if (cells[i]._sortType != null && cells[i]._sortType != "None") {
			img = cells[i].lastChild;
			if (i == this.sortColumn)
				img.className = "sort-arrow " + (this.descending ? "descending" : "ascending");
			else
				img.className = "sort-arrow";
		}
	}
};

SortableTable.prototype.headerOnclick = function (e) {
	// find TD element
	var el = e.target || e.srcElement;
	while (el.tagName != "TH")
		el = el.parentNode;

	this.sort(SortableTable.msie ? SortableTable.getCellIndex(el) : el.cellIndex);
};

// IE returns wrong cellIndex when columns are hidden
SortableTable.getCellIndex = function (oTd) {
	var cells = oTd.parentNode.childNodes
	var l = cells.length;
	var i;
	for (i = 0; cells[i] != oTd && i < l; i++)
		;
	return i;
};

SortableTable.prototype.getSortType = function (nColumn) {
	return this.sortTypes[nColumn] || "String";
};

// only nColumn is required
// if bDescending is left out the old value is taken into account
// if sSortType is left out the sort type is found from the sortTypes array

SortableTable.prototype.sort = function (nColumn, bDescending, sSortType) {
	if (!this.tBody) return;
	if (sSortType == null)
		sSortType = this.getSortType(nColumn);

	// exit if None
	if (sSortType == "None")
		return;

	if (bDescending == null) {
		if (this.sortColumn != nColumn)
			this.descending = this.defaultDescending;
		else
			this.descending = !this.descending;
	}
	else
		this.descending = bDescending;

	this.sortColumn = nColumn;

	if (typeof this.onbeforesort == "function")
		this.onbeforesort();

	var f = this.getSortFunction(sSortType, nColumn);
	var a = this.getCache(sSortType, nColumn);
	var tBody = this.tBody;

	a.sort(f);

	if (this.descending)
		a.reverse();

	if (SortableTable.removeBeforeSort) {
		// remove from doc
		var nextSibling = tBody.nextSibling;
		var p = tBody.parentNode;
		p.removeChild(tBody);
	}

	// insert in the new order
	var l = a.length;
	for (var i = 0; i < l; i++)
		tBody.appendChild(a[i].element);

	if (SortableTable.removeBeforeSort) {
		// insert into doc
		p.insertBefore(tBody, nextSibling);
	}

	this.updateHeaderArrows();

	this.destroyCache(a);

	if (typeof this.onsort == "function")
		this.onsort();
};

SortableTable.prototype.asyncSort = function (nColumn, bDescending, sSortType) {
	var oThis = this;
	this._asyncsort = function () {
		oThis.sort(nColumn, bDescending, sSortType);
	};
	window.setTimeout(this._asyncsort, 1);
};

SortableTable.prototype.getCache = function (sType, nColumn) {
	if (!this.tBody) return [];
	var rows = this.tBody.rows;
	var l = rows.length;
	var a = new Array(l);
	var r;
	for (var i = 0; i < l; i++) {
		r = rows[i];
		a[i] = {
			value:		this.getRowValue(r, sType, nColumn),
			element:	r
		};
	};
	return a;
};

SortableTable.prototype.destroyCache = function (oArray) {
	var l = oArray.length;
	for (var i = 0; i < l; i++) {
		oArray[i].value = null;
		oArray[i].element = null;
		oArray[i] = null;
	}
};

SortableTable.prototype.getRowValue = function (oRow, sType, nColumn) {
	// if we have defined a custom getRowValue use that
	if (this._sortTypeInfo[sType] && this._sortTypeInfo[sType].getRowValue)
		return this._sortTypeInfo[sType].getRowValue(oRow, nColumn);

	var s;
	var c = oRow.cells[nColumn];
	if (typeof c.innerText != "undefined")
		s = c.innerText;
	else
		s = SortableTable.getInnerText(c);
	return this.getValueFromString(s, sType);
};

SortableTable.getInnerText = function (oNode) {
	var s = "";
	var cs = oNode.childNodes;
	var l = cs.length;
	for (var i = 0; i < l; i++) {
		switch (cs[i].nodeType) {
			case 1: //ELEMENT_NODE
				s += SortableTable.getInnerText(cs[i]);
				break;
			case 3:	//TEXT_NODE
				s += cs[i].nodeValue;
				break;
		}
	}
	return s;
};

SortableTable.prototype.getValueFromString = function (sText, sType) {
	if (this._sortTypeInfo[sType])
		return this._sortTypeInfo[sType].getValueFromString( sText );
	return sText;
	/*
	switch (sType) {
		case "Number":
			return Number(sText);
		case "CaseInsensitiveString":
			return sText.toUpperCase();
		case "Date":
			var parts = sText.split("-");
			var d = new Date(0);
			d.setFullYear(parts[0]);
			d.setDate(parts[2]);
			d.setMonth(parts[1] - 1);
			return d.valueOf();
	}
	return sText;
	*/
	};

SortableTable.prototype.getSortFunction = function (sType, nColumn) {
	if (this._sortTypeInfo[sType])
		return this._sortTypeInfo[sType].compare;
	return SortableTable.basicCompare;
};

SortableTable.prototype.destroy = function () {
	this.uninitHeader();
	var win = this.document.parentWindow;
	if (win && typeof win.detachEvent != "undefined") {	// only IE needs this
		win.detachEvent("onunload", this._onunload);
	}
	this._onunload = null;
	this.element = null;
	this.tHead = null;
	this.tBody = null;
	this.document = null;
	this._headerOnclick = null;
	this.sortTypes = null;
	this._asyncsort = null;
	this.onsort = null;
};

// Adds a sort type to all instance of SortableTable
// sType : String - the identifier of the sort type
// fGetValueFromString : function ( s : string ) : T - A function that takes a
//    string and casts it to a desired format. If left out the string is just
//    returned
// fCompareFunction : function ( n1 : T, n2 : T ) : Number - A normal JS sort
//    compare function. Takes two values and compares them. If left out less than,
//    <, compare is used
// fGetRowValue : function( oRow : HTMLTRElement, nColumn : int ) : T - A function
//    that takes the row and the column index and returns the value used to compare.
//    If left out then the innerText is first taken for the cell and then the
//    fGetValueFromString is used to convert that string the desired value and type

SortableTable.prototype.addSortType = function (sType, fGetValueFromString, fCompareFunction, fGetRowValue) {
	this._sortTypeInfo[sType] = {
		type:				sType,
		getValueFromString:	fGetValueFromString || SortableTable.idFunction,
		compare:			fCompareFunction || SortableTable.basicCompare,
		getRowValue:		fGetRowValue
	};
};

// this removes the sort type from all instances of SortableTable
SortableTable.prototype.removeSortType = function (sType) {
	delete this._sortTypeInfo[sType];
};

SortableTable.basicCompare = function compare(n1, n2) {
	if (n1.value < n2.value)
		return -1;
	if (n2.value < n1.value)
		return 1;
	return 0;
};

SortableTable.idFunction = function (x) {
	return x;
};

SortableTable.toUpperCase = function (s) {
	return s.toUpperCase();
};

/*SortableTable.toDate = function (s) {
	var parts = s.split("-");
	var d = new Date(0);
	d.setFullYear(parts[0]);
	d.setDate(parts[2]);
	d.setMonth(parts[1] - 1);
	return d.valueOf();
};
*/
SortableTable.toDate = function (s) {
	var parts = s.split("/");
	var d = new Date(0);
	d.setFullYear(parts[2]);
	d.setDate(parts[1]);
	d.setMonth(parts[0] - 1);
	return d.valueOf();
};
function replace8a8(str) {
	str = str.toUpperCase();
	var splitstr = "____";
	var ar = str.replace(
		/(([0-9]*\.)?[0-9]+([eE][-+]?[0-9]+)?)(.*)/,
	 "$1"+splitstr+"$4").split(splitstr);
	var num = Number(ar[0]).valueOf();
	var ml = ar[1].replace(/\s*([KMGB])\s*/, "$1");

	if (ml == "K")
		num *= 1024;
	else if(ml == "M")
		num *= 1024 * 1024;
	else if (ml == "G")
		num *= 1024 * 1024 * 1024;
	else if (ml == "T")
		num *= 1024 * 1024 * 1024 * 1024;
	// B and no prefix

	return num;
}
function usCurrencyConverter( s )
{
	var n = s;
	var i = s.indexOf( "$" );
	if ( i == -1 )
		i = s.indexOf( "," );
	if ( i != -1 )
	{
		var p1 = s.substr( 0, i );
		var p2 = s.substr( i + 1, s.length );
		return usCurrencyConverter( p1 + p2 );
	}
	return parseFloat( n );
}

// add sort types
SortableTable.prototype.addSortType("Number", Number);
SortableTable.prototype.addSortType("CaseInsensitiveString", SortableTable.toUpperCase);
SortableTable.prototype.addSortType("Date", SortableTable.toDate);
SortableTable.prototype.addSortType("String");
SortableTable.prototype.addSortType( "NumberK", replace8a8 );
SortableTable.prototype.addSortType( "UsCurrency", usCurrencyConverter );
// None is a special case

<!-- Encabezados Fijos
/* http://www.alistapart.com/articles/zebratables/ */
function removeClassName (elem, className) {
	elem.className = elem.className.replace(className, "").trim();
}

function addCSSClass (elem, className) {
	removeClassName (elem, className);
	elem.className = (elem.className + " " + className).trim();
}

String.prototype.trim = function() {
	return this.replace( /^\s+|\s+$/, "" );
}

function stripedTable() {
	if (document.getElementById && document.getElementsByTagName) {
		var allTables = document.getElementsByTagName('table');
		if (!allTables) { return; }
		
		for (var i = 0; i < allTables.length; i++) {
			if (allTables[i].className.match(/[\w\s ]*scrollTable[\w\s ]*/)) {
				var trs = allTables[i].getElementsByTagName("tr");
				
				for (var j = 0; j < trs.length; j++) {
					removeClassName(trs[j], 'alternateRow');
					addCSSClass(trs[j], 'normalRow');
				}
				
				for (var k = 0; k < trs.length; k += 2) {
					removeClassName(trs[k], 'normalRow');
					addCSSClass(trs[k], 'alternateRow');
				}
			}
		}
	}
}
/* onload state is fired, append onclick action to the table's DIV */
/* container. This allows the HTML document to validate correctly. */
/* addIEonScroll added on 2005-01-28                               */
/* Terence Ordona, portal[AT]imaputz[DOT]com                       */
function addIEonScroll() {
	var thisContainer = document.getElementById('tableContainer');
	if (!thisContainer) { return; }
	
	var onClickAction = 'toggleSelectBoxes();';
	thisContainer.onscroll = new Function(onClickAction);
}

/* Only WinIE will fire this function. All other browsers scroll the TBODY element and not the DIV */
/* This is to hide the SELECT elements from scrolling over the fixed Header. WinIE only.           */
/* toggleSelectBoxes added on 2005-01-28 */
/* Terence Ordona, portal[AT]imaputz[DOT]com */
function toggleSelectBoxes() {
	var thisContainer = document.getElementById('tableContainer');
	var thisHeader = document.getElementById('fixedHeader');
	if (!thisContainer || !thisHeader) { return; }

	var selectBoxes = thisContainer.getElementsByTagName('select');
	if (!selectBoxes) { return; }

	for (var i = 0; i < selectBoxes.length; i++) {
		if (thisContainer.scrollTop >= eval(selectBoxes[i].parentNode.offsetTop - thisHeader.offsetHeight)) {
			selectBoxes[i].style.visibility = 'hidden';
		} else {
			selectBoxes[i].style.visibility = 'visible';
		}
	}
} 
//fixed cols
function lockCol(tblID) {
	var table = document.getElementById(tblID);
	//var button = document.getElementById('toggle');
	var cTR = table.getElementsByTagName('TR');  //collection of rows

	//if (table.rows[0].cells[0].className == '') {
		for (i = 0; i < cTR.length; i++)
		{
		var tr = cTR.item(i);
		tr.cells[0].className = 'locked'
		}
		//button.innerText = "Unlock First Column";
		//}
		//else {
		//for (i = 0; i < cTR.length; i++)
		//	{
		//	var tr = cTR.item(i);
		//	tr.cells[0].className = ''
		//	}
		//button.innerText = "Lock First Column";
		//}
}

//exporta a excel
function exportToXL(eSrc) {
var oExcel;
var oExcelSheet;
var oWkBooks;
var cols;
oExcel = new ActiveXObject('Excel.Application');
oWkBooks = oExcel.Workbooks.Add;
oExcelSheet = oWkBooks.Worksheets(1);
oExcelSheet.Activate();
    if (eSrc.tagName != 'TABLE') {
  alert('No ha sido posible exportar la tabla a excell');
  return false;
}
cols = Math.ceil(eSrc.cells.length / eSrc.rows.length);
    for (var i = 0; i < eSrc.cells.length; i ++)
{
var c, r;
  r = Math.ceil((i+1) / cols);
  c = (i+1)-((r-1)*cols)
  if (eSrc.cells(i).tagName == 'TH') {
    oExcel.ActiveSheet.Cells(r,c).Font.Bold = true;
    oExcel.ActiveSheet.Cells(r,c).Interior.Color = 14474460;
  }
  if (eSrc.cells(i).childNodes.length > 0 && eSrc.cells(i).childNodes(0).tagName == "B")
    oExcel.ActiveSheet.Cells(r,c).Font.Bold = true;
  oExcel.ActiveSheet.Cells(r,c).Value = eSrc.cells(i).innerText;
}
oExcelSheet.Application.Visible = true;
}
/* FUNCIONES PARA EL KARDEX DE SONARH */
function showColaborador(id) {
	//alert(id)
	//loadIframe('frmKardex','info-personal.php?Id='+id)
	//var url = 'info-personal.php?Id='+id
	//window.frames['frmKardex'].location = url;
	window.location='info-personal.php?Id='+id
}
function loadIframe(iframeName, url) {
  if (window.frames[iframeName]) {
    //alert(url)
	//window.frames[iframeName].location = url;
    return false;
  }
  else return true;
}
function editReserva(n) {
	var r = document.getElementById(n)
	var tiempo = r.hora.split(":")
	
	document.getElementById('Nuevo').value="NoNuevo"
	document.getElementById('Folio').value=r.folio
	document.getElementById('cboProyecto').value=r.proyecto
	document.getElementById('cboRestaurante').value=r.restaurante
	document.getElementById('txtFecha').value=r.fecha
	document.getElementById('cboHora').value=tiempo[0]
	document.getElementById('cboMinutos').value=tiempo[1]
	document.getElementById('txtNombre').value=r.huesped
	document.getElementById('txtRoom').value=r.habitacion
	document.getElementById('txtPax').value=r.pax
	document.getElementById('txtObservaciones').value=r.special_req
	document.getElementById('cboStatus').value=r.status
}

function JsResetForm() {
	f=document.getElementById('frm')
	for (var i=0;i<f.elements.length;i++) {
		if(f.elements[i].type!='button' && f.elements[i].type!='submit' && f.elements[i].type!='reset') f.elements[i].value = ''
		f.elements[i].disabled = false
	}
}

function modalWin(winid,url,title,w,h) {
	/*
		url - URL que se abrirá en la ventana
		title - Titulo de la ventana
		w - Ancho de la ventana
		h - Alto de la ventana
	*/
	
	if(w=='') w = 800;
	if(h=='') h = 600;
	
	var dhxWins = new dhtmlXWindows();
	dhxWins.enableAutoViewport(true);
	dhxWins.setImagePath("../dhtmlxSuite/dhtmlxWindows/codebase/imgs/");
	
	var win = dhxWins.createWindow(winid, 0, 0, w,h);
	win.setText("dhtmlxWindow");
	win.setModal(true);
	
	dhxWins.window(winid).center();
	dhxWins.window(winid).denyResize();
	dhxWins.window(winid).bringToTop();
	
	win.setText(title);
	win.attachURL(url);
}
//ADAM [04.07.2013] FUNCION PARA VALIDAR QUE SE TENGA SELECCIONADO UN PROYECTO
function validarProyecto(elemento)
{
	if(elemento.value != "")
	{ 
		frm.Buscar.click();
		return true;
	}
	else
	{ 
		alert('Seleccione un proyecto por favor.');
		return false;
	}
}