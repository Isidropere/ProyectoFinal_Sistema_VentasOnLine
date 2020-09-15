//window.onload=function(){
function muu(){
$$('#menu a').each(function(el) { 
	el.addEvent('mouseenter',function(){
	p = el.innerHTML.toUpperCase();
	el.innerHTML = p;
	//el.setStyle('background','url(bg1.jpg)');
	myEffect = el.effect('margin-left', {duration: 100,transition: Fx.Transitions.linear, wait: true}).start('10','30');
	})
	
	el.addEvent('mouseleave',function(){
	p = el.innerHTML.toUpperCase();
	el.innerHTML = p;
	//el.setStyle('background','url(bg.jpg)');
	myEffect = el.effect('margin-left', {duration: 800,transition: Fx.Transitions.Bounce.easeOut, wait: true}).start('30','0');
	})
})
	
myStretch = document.getElementsByClassName('toggler');
myStretcher = document.getElementsByClassName('accordion');

// setup the accordion elements by clearing display styles	
myStretcher.each(function(el){
	el.style.display = '';
});

var ac = new Fx.Accordion(myStretch,myStretcher,
  {
		onActive: function(tog){
        tog.setStyle('color', '#ACDA4E');
		tog.setStyle('cursor', 'default');
		
    },
    onBackground: function(tog){
       
		tog.setStyle('color', '#FFF');
		tog.setStyle('cursor', 'default');
		
    },
		alwaysHide: true,
		start : 'all-closed',
	
		height: true,
		opacity : true			
	});
}

/*
st = document.getElementsByClassName('toggler2');
stc = document.getElementsByClassName('accordion2');

// setup the accordion elements by clearing display styles	
stc.each(function(el){
	el.style.display = '';
});
	
var acc = new Fx.Accordion(st,stc,
{
	onActive: function(tog){
	tog.setStyle('color', '#ACDA4E');
	tog.setStyle('cursor', 'default');
	
},
onBackground: function(tog){
   
	tog.setStyle('color', '#FFF');
	tog.setStyle('cursor', 'default');
	
},
	alwaysHide: true,
	start : 'all-closed',
	opacity : true			
});
*/

function sinReflejo() {
	document.getElementById('tdReflejo').style.background="";
}

function conReflejo() {
	document.getElementById('tdReflejo').style.background='url(img/loginglare.png) no-repeat';
}

function goto(url) {
	top.mainFrame.location.href = url;
}

function loadIframe(iframeName, url) {
  if(window.frames[iframeName]) {
    window.frames[iframeName].location = url;
    return false;
  }
  else return true;
}

function redimensiona(){
	top.grand(document.body.scrollHeight);
}

function resizeThis(img) {
	var imagen = img.src.split('/');
	var id = img.id;
	
	if(imagen[5]=='cierra.jpg'){
		parent.document.getElementsByTagName("FRAMESET").item(0).rows = '15,*';
		document.getElementById(id).src = '../img/abre.jpg';
	}
	else {
		parent.document.getElementsByTagName("FRAMESET").item(0).rows = '140,*';
		document.getElementById(id).src = '../img/cierra.jpg';
	}
}