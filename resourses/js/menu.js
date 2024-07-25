function showMenu(){
	document.getElementById('menuCat').classList.toggle('showmenu');	
}
function clearMenu(){
	let elem = document.getElementById('menuCat');
	let deleteElement = elem.querySelectorAll('div');
  	for (let i = 0; i < deleteElement.length; i++) {
    	deleteElement[i].remove();
  	}

}
function createMenuBox(values){
	let elem1=document.getElementById('menucontain');
	let elem2=document.createElement('div');
	let elem3=document.createElement('div');
	elem3.appendChild(document.createTextNode(values[0][0]));
	elem3.classList.toggle('divhov');
  	elem3.classList.toggle('cataloghead');
  	elem2.appendChild(elem3);
	for(let i=1;i<values.length;i++){
		elem3=document.createElement('div');
		elem3.appendChild(document.createTextNode(values[i][0]));
		elem3.classList.toggle('divhov');
  		elem3.classList.toggle('txt');

  		elem3.onclick=()=>{
  			if(document.getElementById('menuCat').classList.contains('showmenu')){
				showMenu();
			}
  			window.history.pushState('object or string','Title','/catalog?id='+values[i][2]);	
			
			
		
  		};
  		elem2.appendChild(elem3);
  		if(i==3 && values.length>4){
  			elem3=document.createElement('div');
  			elem3.appendChild(document.createTextNode('Все '+ (values.length-1).toString()));
  			elem3.classList.toggle('seeallcatalog');
  			elem3.onclick=function(){
  				createSubMenu(values);
  			}
  			elem2.appendChild(elem3);
  			break;
  		}
  	}
  	elem2.classList.toggle('booksmap');
  	elem1.appendChild(elem2);
}
function createCloseButton(){
	let elem=document.getElementById('menuCat');
	let elem1=document.createElement('div');
	elem1.style.position='relative';
	elem1.style.width='100%';
	elem1.style.display='flex';
	elem1.style.justifyContent='right';
	elem1.style.top='10px';
	elem1.style.right='2%';
	elem2=document.createElement('img');
	elem2.src = '/resourses/images/close.png';
	elem2.classList.toggle('closeicon');
	elem2.onclick=showMenu;
	elem1.appendChild(elem2);
	elem.appendChild(elem1);
}
function addContent(){
	clearMenu();
	createCloseButton();
	let elem1=document.createElement('div');
	elem1.classList.toggle('menucontain');
	elem1.id='menucontain';
	document.getElementById('menuCat').appendChild(elem1);
	let xml=new XMLHttpRequest();
	xml.open('GET','index/menu');
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		let menu=JSON.parse(xml.responseText);
  		for(let i=0;i<menu.length;i++){
  			createMenuBox(menu[i]);
  		}

	}
	xml.send();
}
function createSubMenu(values){
	clearMenu();
	let elem1=document.createElement('div');
	elem1.classList.toggle('menucontain');
	elem1.id='menucontain';
	elem1.style.gridTemplateColumns='1fr';
	document.getElementById('menuCat').appendChild(elem1);
	elem2=document.createElement('div');
	elem2.classList.toggle('subbooksmap');
	elem2.appendChild(createBackButton());
	elem1.appendChild(elem2);
	elem1=document.createElement('div');
	elem1.appendChild(document.createTextNode(values[0][0]));
	elem1.classList.toggle('txt');
	elem1.style.fontSize='20px';
	elem1.style.fontWeight='700';
	elem1.classList.toggle('divhov');
	elem2.appendChild(elem1);
	for(let i=1;i<values.length;i++){
		elem1=document.createElement('div');
		elem1.appendChild(document.createTextNode(values[i][0]));
		elem1.classList.toggle('divhov');
		elem1.classList.toggle('txt');
		elem1.style.fontSize='15px';
		elem1.onclick=()=>{
			if(document.getElementById('menuCat').classList.contains('showmenu')){
				showMenu();
			}
			window.history.pushState('object or string','Title','/catalog?id='+values[i][2]);
			
			
		};
		elem2.appendChild(elem1);
	}
}
function createBackButton(){
	let elem1=document.createElement('div');
	let elem2=document.createElement('img');
	elem2.classList.toggle('backicon');
	elem2.src = 'resourses/images/back.ico';
	elem2.onclick=addContent;
	elem1.appendChild(elem2);
	return elem1;
}

function loadProfile(){
  	if(window.location.pathname != '/profile')	window.history.pushState('object or string','Title','/profile');
}
function openBag(){
	if(window.location.pathname != '/bag')	window.history.pushState('object or string','Title','/bag');
}
function openSaved(){
  	if(window.location.pathname != '/saved')	window.history.pushState('object or string','Title','/saved');
}
function openHome(){
	if(window.location.pathname != '/')	window.history.pushState('object or string','Title','/');
	else location.reload();
}
function openSearch(){
	window.history.pushState('object or string','Title','/search?name='+document.getElementById('searchers').value);
}
home.onclick=openHome;
icon1.onclick=loadProfile;
icon2.onclick=openBag;
icon3.onclick=openSaved;
dropdown.onclick=showMenu;
search.onclick=openSearch;
window.addEventListener('DOMContentLoaded',addContent);
