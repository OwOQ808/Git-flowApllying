class PaymentWindow{
	//constuctor(...args,cost){
	//	this.books=args;
	//}
	createWindow(elem){
		let elem1=document.createElement('div');
		elem1.classList.toggle('modalback');
		elem1.id='mw';
		elem2=document.createElement('div');
		elem2.classList.toggle('modalblock');

		let close=document.createElement('div');
		close.classList.toggle('head');
		let tmp=document.createElement('div');
		tmp.style.position='relative';
		tmp.style.width='100%';
		tmp.style.display='flex';
		tmp.style.justifyContent='right';
		tmp.style.top='10px';
		tmp.style.right='2%';
		let closeicon=document.createElement('img');
		closeicon.src = '/resourses/images/close.png';
		closeicon.classList.toggle('closeicon');
		closeicon.onclick=()=>{
			document.getElementById('mw').classList.toggle('showmodal');
		};
		tmp.appendChild(closeicon);
		close.appendChild(tmp);
		elem2.appendChild(close);

		let elem3=document.createElement('div');
		elem3.classList.toggle('elem1');
		elem3.appendChild(document.createTextNode('Номер карты'));
		let elem4=document.createElement('input');
		elem4.classList.toggle('inp');
		elem4.type='text';
		elem4.style.marginTop='5px';
		elem4.style.height='30px';
		elem4.style.borderRadius='3px';
		elem3.appendChild(elem4);
		elem2.appendChild(elem3);
		elem3=document.createElement('div');
		elem3.classList.toggle('elem2');
		elem4=document.createElement('div');
		elem4.appendChild(document.createTextNode('Срок действия'));

		let elem5=document.createElement('input');
		elem5.classList.toggle('inp');
		elem5.type='text';
		elem5.style.marginTop='5px';
		elem5.style.height='30px';
		elem5.style.borderRadius='3px';

		elem4.appendChild(elem5);
		elem3.appendChild(elem4);

		elem4=document.createElement('div');
		elem3.appendChild(elem4);

		elem4=document.createElement('div');
		elem4.appendChild(document.createTextNode('CVV код'));

		elem5=document.createElement('input');
		elem5.classList.toggle('inp');
		elem5.type='text';
		elem5.style.marginTop='5px';
		elem5.style.height='30px';
		elem5.style.borderRadius='3px';
		elem4.appendChild(elem5);

		elem5=document.createElement('div');
		elem5.id='cost';
		elem5.style.marginTop='5px';
		elem4.appendChild(elem5);
		
		elem5=document.createElement('div');
		elem5.classList.toggle('bn');
		elem5.id='pay';
		elem5.appendChild(document.createTextNode('Оплатить'));
		elem4.appendChild(elem5);

		elem3.appendChild(elem4);
		elem2.appendChild(elem3);

		elem3=document.createElement('div');
		elem3.classList.toggle('elem3');
		elem3.appendChild(document.createTextNode('Позиции заказа:'));

		elem2.appendChild(elem3);
		elem3=document.createElement('div');
		elem3.classList.toggle('elem3');
		elem3.id='pz';
		elem3.style.borderTop='1px solid rgba(0, 0, 0, .3)';
		elem3.style.borderBottom='1px solid rgba(0, 0, 0, .3)';
		elem3.style.fontSize='15px';
		elem3.style.fontWeight='500';
		elem3.style.gap='5px';
		elem2.appendChild(elem3);



		elem1.appendChild(elem2);
		elem.appendChild(elem1);
	}
	openWindow(all,books,cost){
		let elem=document.getElementById('cost');
		elem.innerHTML='';
		elem.appendChild(document.createTextNode('Итого: '+cost.toString()+'руб'));
		let elem1=document.getElementById('pz');
		elem1.innerHTML='';
		
		for(let i=0;i<all.length;i++){
			for (let j=0;j<books.length;j++){
				if(all[i][0]==books[j]){
					let elem2=document.createElement('div');
					elem2.classList.toggle('elem4');
					let elem3=document.createElement('div');
					elem3.appendChild(document.createTextNode(all[i][1]));
			
					elem2.appendChild(elem3);

					elem3=document.createElement('div');
					elem3.appendChild(document.createTextNode(all[i][5]+'руб'));
					elem3.style.textAlign='right';

					elem2.appendChild(elem3);
					elem1.appendChild(elem2);
				}
			}
		}
		document.getElementById('pay').onclick=()=>{
			for(let i=0;i<books.length;i++){

				let xmlt=new XMLHttpRequest();
				xmlt.open('GET','bag/deleteBook?book='+books[i].toString());
				xmlt.onreadystatechange = function(){
					
				};
				xmlt.send();
				let xmll=new XMLHttpRequest();
				xmll.open('GET','bag/buyBook?book='+books[i].toString());
				xmlt.onreadystatechange = function(){
					
				};
				xmll.send();
			}
			//window.location.reload();
			document.getElementById('mw').classList.toggle('showmodal');
			loadBag();
			
		};
		document.getElementById('mw').classList.toggle('showmodal');
	}
}