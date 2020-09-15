w = window.screen.availWidth
h = window.screen.availHeight

//DESHABILITA SELECCION DE TEXTO
//if the browser is IE4+
/*	document.onselectstart=new Function ("return false")
	
//if the browser is NS6
if (window.sidebar){
	document.onmousedown=disabletext
	document.onclick=reEnable
}
//DESHABILITA CLICK BOTON DERECHO
<!--
if(navigator.appName=="Netscape") window.captureEvents(Event.MOUSEDOWN)
document.oncontextmenu=NRC; window.onmousedown=NRC*/

function loadIframe(iframeName,url) {
  if(window.frames[iframeName]) {
	window.frames[iframeName].location = url;   
    return false;
  }
  else return true;
}
// DESHABILITAR CLICK BOTON DERECHO
function NRC(e) { 
	if(navigator.appName=="Netscape") {
		if(e.which==3||e.which==2) { 
			return false; return true 
		}
	}
	else { 
		event.cancelBubble=true; event.returnValue=false
	}
}
//DESHABILITAR SELECCION DE TEXTO
function disabletext(e){
	return false
}
function reEnable(){
	return true
}
//ABRE DOCUMENTOS PDF EN VENTANAS EXTERNAS
function externalLinks() {
    if (!document.getElementsByTagName) return;
	
    var anchors = document.getElementsByTagName("a");
	
    for ( var i=0; i < anchors.length; i++ ) {
        var anchor = anchors[i];
		var filename = anchor.getAttribute("href")
		var longitud = filename.length
		//var ext = anchor.getAttribute("href").substr(longitud-4)
		var ext = filename.split(".")
		
        if ( anchor.getAttribute("href") && ext[4] == "pdf" ) {
            /*if ( anchor.getAttribute("className") ) {
                anchor.target = anchor.getAttribute("className");
            }
            else {
                anchor.target = "_blank";
            }*/
			anchor.target = "popup";
			anchor.onclick="window.open("+anchor.href+","+anchor.target+", 'width=1024,height=768,location=0,status=0,scrollbars=0,toolbar=0'); return false;"
        }
    }
}

function kswap() { 
	var srch = ".pdf";
	var replc = "#toolbar=0";
	
	//alert("Hay " + document.links.length + "links")
	
	for(var i=0; i<(document.links.length); i++) { 
		var enlace = document.links[i].href
		if(enlace.indexOf(srch)>0) {
			//alert("PDF")
			document.links[i].href = document.links[i].href + replc;
		}
	} 
}

function resize_iframe() {
	//resize the iframe according to the size of the
	//window (all these should be on the same line)
	document.getElementById("iExplorer").height = document.body.offsetHeight - document.getElementById("iExplorer").offsetTop;
}

function loadUrl(url,fr) {
	//top.frames[frm].location.href = url;
	//eval("top.parent.frames['mainFrame'].document.getElementById('"+fr+"').src = '"+url+"'");
	eval("top.parent.frames['mainFrame'].document.getElementById(fr).src = '"+url+"'");
}

window.onload = kswap;