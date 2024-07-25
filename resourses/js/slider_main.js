class MainSlider{
	constructor(...args){
		this.currentslide=0;
		this.images=[];
		for(let i=0;i<args.length;i++){
			let elem1=document.createElement('div');
			elem1.style.backgroundImage="url("+args[i]+")";
			elem1.classList.toggle('mainsliderimage');
			this.images[i]=elem1;
		}
	}
	createSlider(value){
		value.classList.toggle('bigbook');
		for(let i=0;i<this.images.length;i++){
			value.appendChild(this.images[i]);
		}
		this.createButtons(value);
		this.images[0].style.display='block';

	}
	createButtons(value){
		let elem1=document.createElement('div');
		elem1.classList.toggle('sliderbuttons');
		elem1.onclick=()=>{
			this.swipeSlideLeft(this.images);
		}
		value.appendChild(elem1);
		elem1=document.createElement('div');
		elem1.classList.toggle('beetween');
		value.appendChild(elem1);
		let elem2=document.createElement('div');
		elem2.classList.toggle('sliderbuttons');
		elem2.onclick=()=>{
			this.swipeSlideRight(this.images);
		}
		value.appendChild(elem2);
	}
	swipeSlideRight(images){
		this.images[this.currentslide].style.display='none';
		this.currentslide+=1;
		if(this.currentslide==images.length){
			this.currentslide=0;
		}
		this.images[this.currentslide].style.display='block';
	}
	swipeSlideLeft(images){
		this.images[this.currentslide].style.display='none';
		this.currentslide-=1;
		if(this.currentslide==-1){
			this.currentslide=images.length-1;
		}
		this.images[this.currentslide].style.display='block';
	}

}
class Vech{
	constructor(name){
		this.books=[];
		this.name=name;
	}
	createVech(value){
		let xml=new XMLHttpRequest();
		xml.open('POST','index/indexBooks');
		xml.onreadystatechange = function(){
			if (xml.readyState !== 4 || xml.status !== 200) {
   				return;
  			}
  			this.books=(JSON.parse(xml.responseText));
  			let elem=document.createElement('div');
			elem.classList.toggle('vechblock');
			for(let i=0;i<this.books.length;i++){
				if(i>15){
					break;
				}
				let elem1=document.createElement('div');
				elem1.classList.toggle('vechitem');
				let elem2=document.createElement('div');
				let elem3=document.createElement('img');
				elem3.src=this.books[i][5];
				
				setTimeout(() => {
  					elem2.classList.toggle('vechimage');
					elem2.style.backgroundImage="url("+this.books[i][5]+")";
				
  					elem1.style.width=((253*(parseInt(elem3.naturalWidth)/parseInt(elem3.naturalHeight)))).toString()+'px';
				
				
				
  				
					
				elem2.onclick=()=>{
					window.history.pushState('object or string','Title','/book?id='+this.books[i][0].toString());
					 ///?id='+this.books[i][0].toString()
				};
				console.log(elem3.naturalWidth);
				console.log(elem3.naturalHeight);
				console.log(this.books[i][5]);
				elem3=document.createElement('div');
				elem3.appendChild(document.createTextNode(this.books[i][1]));
				elem3.classList.toggle('vechhead');
				elem1.appendChild(elem2);
				elem1.appendChild(elem3);
				elem3=document.createElement('div');
				elem3.appendChild(document.createTextNode(this.books[i][3]));
				elem3.classList.toggle('vechauthor');
				elem1.appendChild(elem3);
				elem.appendChild(elem1);
  
				}, 50);
				
				
					
			}	
			value.appendChild(elem);		
  		}
		xml.send(this.name);
	}
}

class VechReck{
	constructor(name){
		this.books=[];
		this.name=name;
	}
	createVech(value){
		let xml=new XMLHttpRequest();
		xml.open('POST','index/indexBs');
		xml.onreadystatechange = function(){
			if (xml.readyState !== 4 || xml.status !== 200) {
   				return;
  			}
  			this.books=(JSON.parse(xml.responseText));
  			let elem=document.createElement('div');
			elem.classList.toggle('vechblock');
			for(let i=0;i<this.books.length;i++){
				if(i>15){
					break;
				}
				let elem1=document.createElement('div');
				elem1.classList.toggle('vechitem');
				let elem2=document.createElement('div');
				let elem3=document.createElement('img');
				elem3.src=this.books[i][5];
				setTimeout(() => {
				elem2.classList.toggle('vechimage');
				elem2.style.backgroundImage="url("+this.books[i][5]+")";

				elem1.style.width=((253*(parseInt(elem3.naturalWidth)/parseInt(elem3.naturalHeight)))).toString()+'px';
				
				elem2.onclick=()=>{
					window.history.pushState('object or string','Title','/book?id='+this.books[i][0].toString());
					 ///?id='+this.books[i][0].toString()
				};
				console.log(elem3.naturalWidth);
				console.log(elem3.naturalHeight);
				console.log(this.books[i][5]);
				elem3=document.createElement('div');
				elem3.appendChild(document.createTextNode(this.books[i][1]));
				elem3.classList.toggle('vechhead');
				elem1.appendChild(elem2);
				elem1.appendChild(elem3);
				elem3=document.createElement('div');
				elem3.appendChild(document.createTextNode(this.books[i][3]));
				elem3.classList.toggle('vechauthor');
				elem1.appendChild(elem3);
				elem.appendChild(elem1);
			}, 50);
			}	
			value.appendChild(elem);		
  		}
		xml.send(this.name);
	}
}