
function historyLoader(){
	if(document.getElementById('menuCat').classList.contains('showmenu')){
		showMenu();
	}
	switch(window.location.pathname){
		case '/':
			loadMain();
			break;
		case '/bag':
			loadBag();
			break;
		case '/book':
			loadBook();
			break;
		case '/saved':
			loadSaved();
			break;
		case '/catalog':
			loadCatalog();
			break;
		case '/search':
			loadSearch();
			break;
		case '/profile':
			loadProfile();
			break;
	}
}
function loadSaved(){
	let xml=new XMLHttpRequest();
	xml.open('GET','auth/checkAuth');
	let allCost=0;
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		if(xml.responseText==0){
  			location.reload();
  		}
  		else{
			let elem = document.getElementById('box_contain');
			
			clearBody();
			let elem1=document.createElement('div');
			elem1.appendChild(document.createTextNode('Купленные книги'));
			elem1.classList.toggle('headmain');
			elem.appendChild(elem1);
			let xmll=new XMLHttpRequest();
			xmll.open('GET','saved/getSaved');
			xmll.onreadystatechange = function(){
				if (xmll.readyState !== 4 || xmll.status !== 200) {
   					return;
  				}
  				books=JSON.parse(xmll.responseText);
  				console.log(books);
  				for(let i=0;i<books.length;i++){
  					let elem3=document.createElement('img');
					elem3.src=books[i][3];

					setTimeout(()=>{
  					elem1=document.createElement('div');
					elem1.classList.toggle('bagelem');
					elem1.id=i.toString()+'checked';
					elem2=document.createElement('div');
					elem2.classList.toggle('bookimage');
					console.log(books[i][3]);
					

					elem2.style.height=((150*(parseInt(elem3.naturalHeight)/parseInt(elem3.naturalWidth)))).toString()+'px';
					elem1.style.minHeight=((170*(parseInt(elem3.naturalHeight)/parseInt(elem3.naturalWidth)))+10).toString()+'px';
					elem2.style.backgroundImage="url("+books[i][3]+")";
					elem1.appendChild(elem2);

					elem3=document.createElement('div');
					elem3.classList.toggle('bagpoint');
					elem2=document.createElement('div');
					elem2.classList.toggle('header1');
					elem2.appendChild(document.createTextNode(books[i][1]));
					elem3.appendChild(elem2);

					elem2=document.createElement('div');
					elem2.classList.toggle('header2');
					elem2.appendChild(document.createTextNode('Автор: '+books[i][11]));
					elem3.appendChild(elem2);

					elem2=document.createElement('div');
					elem2.classList.toggle('header2');
					elem2.appendChild(document.createTextNode('Жанр: '+books[i][13]));
					elem3.appendChild(elem2);

					elem1.appendChild(elem3);

					elem3=document.createElement('div');
					elem3.classList.toggle('btnpoint');

					elem2=document.createElement('div');
					elem2.classList.toggle('header2');
					elem2.appendChild(document.createTextNode('PDF формат'));
					elem3.appendChild(elem2);


					elem2=document.createElement('div');
					elem2.classList.toggle('bn');
					elem2.appendChild(document.createTextNode("Скачать"));
					elem2.onclick=()=>{
						window.location='saved/downloadBook?id='+books[i][0];
					};
					elem3.appendChild(elem2);


					elem1.appendChild(elem3);


					elem.appendChild(elem1);
					},50);
					
  				}
  				
				
  				setTimeout(()=>{
				elem1=document.createElement('div');
				elem1.classList.toggle('elem5');
				elem1.appendChild(document.createTextNode('*Уважаемые покупатели, обращаем ваше внимание на следующий факт: Постановление Правительства РФ от 19.01.1998 N 55 (ред. от 30.05.2018) "Об утверждении Правил продажи отдельных видов товаров, перечня товаров длительного пользования, на которые не распространяется требование покупателя о безвозмездном предоставлении ему на период ремонта или замены аналогичного товара, и перечня непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену" ПЕРЕЧЕНЬ НЕПРОДОВОЛЬСТВЕННЫХ ТОВАРОВ НАДЛЕЖАЩЕГО КАЧЕСТВА,НЕ ПОДЛЕЖАЩИХ ВОЗВРАТУ ИЛИ ОБМЕНУ НА АНАЛОГИЧНЫЙ ТОВАР ДРУГИХ РАЗМЕРА, ФОРМЫ, ГАБАРИТА, ФАСОНА,РАСЦВЕТКИ ИЛИ КОМПЛЕКТАЦИИ Непериодические издания (книги, брошюры, альбомы, картографические и нотные издания, листовые изоиздания, календари, буклеты, издания, воспроизведенные на технических носителях информации)'));



				elem.appendChild(elem1);
				elem.style.minHeight='400px';
				},60);

			}
			xmll.send();		
  		}	
	}
	xml.send();
	
}
function loadCatalog(){
	let xml=new XMLHttpRequest();
	xml.open('GET','catalog/getBook'+window.location.search);
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		let elem = document.getElementById('box_contain');
		clearBody();
		books=JSON.parse(xml.responseText);
		console.log(books);
		let elem1=document.createElement('div');
		elem1.appendChild(document.createTextNode('Каталог: '+books[0]));
		elem1.classList.toggle('headmain');
		elem.appendChild(elem1);
		
		elem1=document.createElement('div');
		elem1.classList.toggle('catalog');
		for(let i=3;i<books.length;i++){
			let elem4=document.createElement('img');
			elem4.src=books[i][5];
			setTimeout(()=>{
			elem2=document.createElement('div');
			elem2.classList.toggle('elem');
			let elem3=document.createElement('div');

  			elem3.classList.toggle('bookimage');
			elem3.style.backgroundImage="url("+books[i][5]+")";
			
			elem3.style.height=((180*(parseInt(elem4.naturalHeight)/parseInt(elem4.naturalWidth)))).toString()+'px';
			elem3.style.width='180px';
			
			elem3.onclick=()=>{
				window.history.pushState('object or string','Title','/book?id='+books[i][0].toString());
			};
			elem2.appendChild(elem3);
			console.log(elem3.naturalWidth);
			elem3=document.createElement('div');
			elem3.appendChild(document.createTextNode(books[i][1]));
			elem3.classList.toggle('header1');
			elem2.appendChild(elem3);
			elem3=document.createElement('div');
			elem3.appendChild(document.createTextNode(books[i][3]));
			elem3.classList.toggle('header2');
			elem2.appendChild(elem3);
			elem1.appendChild(elem2);
			},50);
			
		}
		
		elem.appendChild(elem1);
		setTimeout(()=>{elem.style.minHeight='400px';},60);	
  	}
  	xml.send();
}


function loadBook(){
	clearBody();
	let xml=new XMLHttpRequest();
	xml.open('GET','book/getBook'+window.location.search);
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		this.books=(JSON.parse(xml.responseText));
  		console.log(this.books);
  		let elem = document.getElementById('box_contain');
		
  		let elem1=document.createElement('div');
  		elem1.classList.toggle('bookinfo');
  		let elem2=document.createElement('img');
  		elem2.src=this.books[0][5];
  		let elem3=document.createElement('div');
  		elem3.classList.toggle('bookimage');
		elem3.style.backgroundImage="url("+this.books[0][5]+")";
		setTimeout(()=>{
			elem3.style.height=((200*(parseInt(elem2.naturalHeight)/parseInt(elem2.naturalWidth)))).toString()+'px';
		
		

		let elem4=document.createElement('div');
		elem4.appendChild(elem3);


		elem2=document.createElement('div');
		elem2.classList.toggle('point2');
		elem3=document.createElement('div');
		elem3.classList.toggle('header5');
		elem3.appendChild(document.createTextNode('Цена: '+this.books[0][4]+'руб'));
		elem2.appendChild(elem3);

		elem3=document.createElement('div');
		elem3.classList.toggle('buybtn');
		elem3.appendChild(document.createTextNode('Добавить в корзину'));
		elem3.onclick=()=>{
			let xmll=new XMLHttpRequest();
			xmll.open('GET','bag/addInBag?id='+this.books[0][0].toString());
			xmll.onreadystatechange = function(){
				if (xmll.readyState !== 4 || xmll.status !== 200) {
   					return;
  				}
  				alert(xmll.responseText);
			}
			xmll.send();		
		};
		elem2.appendChild(elem3);
		elem4.appendChild(elem2);
		elem1.appendChild(elem4);

		elem1.appendChild(elem4);

		elem2=document.createElement('div');
		elem2.classList.toggle('point');
		elem3=document.createElement('div');
		elem3.classList.toggle('header1');
		elem3.appendChild(document.createTextNode(this.books[0][1]));
		elem2.appendChild(elem3);

		elem3=document.createElement('div');
		elem3.classList.toggle('header2');
		elem3.appendChild(document.createTextNode("Автор: "+this.books[0][3]));
		elem2.appendChild(elem3);


		elem3=document.createElement('div');
		elem3.classList.toggle('header2');
		elem3.appendChild(document.createTextNode("Жанр: "+this.books[0][9]));
		console.log(this.books);
		elem3.onclick=()=>{
			if(document.getElementById('menuCat').classList.contains('showmenu')){
				showMenu();
			}
			window.history.pushState('object or string','Title','/catalog?id='+this.books[0][8]);
			
		};
		elem2.appendChild(elem3);

		elem3=document.createElement('div');
		elem3.classList.toggle('header3');
		elem3.style.marginTop='20px';
		elem3.appendChild(document.createTextNode("О книге: "));
		elem2.appendChild(elem3);

		elem3=document.createElement('div');
		elem3.classList.toggle('header4');
		
		elem3.appendChild(document.createTextNode(this.books[0][7]));
		elem2.appendChild(elem3);

		elem1.appendChild(elem2);
  		elem.appendChild(elem1);	

  		elem1=document.createElement('div');
  		elem1.classList.toggle('headmain');
  		elem1.appendChild(document.createTextNode('Другие книги жанра'));
  		elem.appendChild(elem1);

  		elem1=document.createElement('div');
  		elem1.classList.toggle('vechsliderblock');
  		elem1.id='vechsliderblock1';
  		elem.appendChild(elem1);

  		new VechReck(this.books[0][8]).createVech(document.getElementById('vechsliderblock1'));
  		elem.style.minHeight='900px';
  	},50);

	}
	xml.send();
}
function loadProfile(){
	let xml=new XMLHttpRequest();
	xml.open('GET','auth/checkAuth');
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		if(xml.responseText==0){
  			location.reload();
  		}
  		else{
  			let elem = document.getElementById('box_contain');
			clearBody();
			let elem1=document.createElement('div');
			elem1.appendChild(document.createTextNode('Профиль'));
			elem1.classList.toggle('headmain');
			elem.appendChild(elem1);
			elem.style.minHeight='400px';
			let xmll=new XMLHttpRequest();
			xmll.open('GET','profile/getInfo');
			xmll.onreadystatechange = function(){
				if (xmll.readyState !== 4 || xmll.status !== 200) {
   					return;
  				}
  				let info=JSON.parse(xmll.responseText);
  				console.log(info);

  				elem1=document.createElement('div');
  				elem1.classList.toggle('prof');
  				let elem2=document.createElement('div');
  				elem2.classList.toggle('elem13');


  				let elem3=document.createElement('div');
  				elem3.appendChild(document.createTextNode('Email: '+ info[0][0].substring(0, 3) + info[0][0].substring(3).replace(/[\s\S]/g, "*") ));
  				elem2.appendChild(elem3);

  				elem3=document.createElement('div');
  				elem3.appendChild(document.createTextNode('Логин: '+ info[0][1].substring(0, 3) + info[0][1].substring(3).replace(/[\s\S]/g, "*") ));
  				elem2.appendChild(elem3);

  				elem3=document.createElement('div');
  				elem3.appendChild(document.createTextNode('Телефон: '+ info[0][4].substring(0, 3) + info[0][4].substring(3).replace(/[\s\S]/g, "*") ));
  				elem2.appendChild(elem3);

  				elem1.appendChild(elem2);

  				elem2=document.createElement('div');
  				elem2.classList.toggle('elem13');


  				elem3=document.createElement('div');
  				elem3.appendChild(document.createTextNode('Книг в корзине: '+info[1]));
  				elem2.appendChild(elem3);

  				elem3=document.createElement('div');
  				elem3.appendChild(document.createTextNode('Книг куплено: '+info[2]));
  				elem2.appendChild(elem3);


  				elem1.appendChild(elem2);


  				elem2=document.createElement('div');
  				elem2.classList.toggle('elem23');

  				// elem3=document.createElement('div');
  				// elem3.classList.toggle('bn');
  				// elem3.appendChild(document.createTextNode('Администратор'));
  				// elem2.appendChild(elem3);

  				elem3=document.createElement('div');
  				elem3.classList.toggle('dn');
  				elem3.appendChild(document.createTextNode('Выход'));
  				elem3.onclick=()=>{
  					window.history.pushState('object or string','Title','/');
  					let xmlt=new XMLHttpRequest();
					xmlt.open('GET','profile/goout');
					xml.onreadystatechange = function(){
						if (xmlt.readyState !== 4 || xmlt.status !== 200) {
   							return;
  						}
  					}
  					xmlt.send();
  				};



  				elem2.appendChild(elem3);

  				elem1.appendChild(elem2);

  				elem.appendChild(elem1);


  			};
  			xmll.send();
			
  		}
	}
	xml.send();	
}
function loadMain(){
	let elem = document.getElementById('box_contain');
	//elem.style.minHeight='1200px';

	clearBody();
	elem.style.minHeight='1000px';
	//let elem1=document.createElement('div');
	//elem1.appendChild(document.createTextNode('Главная'));
	//elem1.classList.toggle('headmain');
	let xml=new XMLHttpRequest();
	xml.open('GET','index/loadContent');
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		elem.innerHTML=xml.responseText;
  		new MainSlider('/resourses/images/book.jpg','/resourses/images/book1.jpg','/resourses/images/book2.jpg').createSlider(document.getElementById('booksimages').querySelectorAll('div')[0]);
  		new Vech(1).createVech(document.getElementById('vechsliderblock1'));
  		new Vech(2).createVech(document.getElementById('vechsliderblock2'));
  		new Vech(3).createVech(document.getElementById('vechsliderblock3'));
  		new Vech(6).createVech(document.getElementById('vechsliderblock6'));
  		
  		
  		//document.body.innerHTML=xml.responseText;
	}
	xml.send();


	//elem.appendChild(elem1);
	
}
function loadBag(){
	let xml=new XMLHttpRequest();
	xml.open('GET','auth/checkAuth');
	let allCost=0;
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		if(xml.responseText==0){
  			location.reload();
  		}
  		else{
			let elem = document.getElementById('box_contain');
			//elem.style.minHeight='400px';
			clearBody();
			let elem1=document.createElement('div');
			elem1.appendChild(document.createTextNode('Корзина'));
			elem1.classList.toggle('headmain');
			elem.appendChild(elem1);
			let xmll=new XMLHttpRequest();
			xmll.open('GET','bag/getBag');
			xmll.onreadystatechange = function(){
				if (xmll.readyState !== 4 || xmll.status !== 200) {
   					return;
  				}
  				books=JSON.parse(xmll.responseText);
  				for(let i=0;i<books.length;i++){
  					let elem3=document.createElement('img');
					elem3.src=books[i][3];
					setTimeout(()=>{
  					elem1=document.createElement('div');
					elem1.classList.toggle('bagelem');
					elem1.id=i.toString()+'checked';
					elem2=document.createElement('div');
					elem2.classList.toggle('bookimage');
					console.log(books[i][3]);
					
					
					elem2.style.height=((150*(parseInt(elem3.naturalHeight)/parseInt(elem3.naturalWidth)))).toString()+'px';
					elem1.style.minHeight=((170*(parseInt(elem3.naturalHeight)/parseInt(elem3.naturalWidth)))).toString()+'px';
					elem2.style.backgroundImage="url("+books[i][3]+")";
					elem1.appendChild(elem2);

					elem3=document.createElement('div');
					elem3.classList.toggle('bagpoint');
					elem2=document.createElement('div');
					elem2.classList.toggle('header1');
					elem2.appendChild(document.createTextNode(books[i][1]));
					elem3.appendChild(elem2);

					elem2=document.createElement('div');
					elem2.classList.toggle('header2');
					elem2.appendChild(document.createTextNode('Автор: '+books[i][11]));
					elem3.appendChild(elem2);

					elem2=document.createElement('div');
					elem2.classList.toggle('header2');
					elem2.appendChild(document.createTextNode('Жанр: '+books[i][13]));
					elem3.appendChild(elem2);

					elem1.appendChild(elem3);

					elem3=document.createElement('div');
					elem3.classList.toggle('btnpoint');
					elem2=document.createElement('div');
					elem2.classList.toggle('header2');
					elem2.appendChild(document.createTextNode('Цена: '+books[i][5]+'руб'));
					elem3.appendChild(elem2);

					elem2=document.createElement('div');
					elem2.classList.toggle('bn');
					elem2.appendChild(document.createTextNode("К товару"));
					elem2.onclick=()=>{
						window.history.pushState('object or string','Title','/book?id='+books[i][0]);
					};
					elem3.appendChild(elem2);

					elem2=document.createElement('div');
					elem2.classList.toggle('dn');
					elem2.appendChild(document.createTextNode("Удалить"));
					elem2.onclick=()=>{
						if(document.getElementById(books[i][0].toString()).checked){
							allCost-=parseInt(books[i][5]);	
							document.getElementById('allCost').innerHTML='';
							document.getElementById('allCost').appendChild(document.createTextNode('К оплате: '+ allCost.toString()+'руб'));
						}
						document.getElementById(i.toString()+'checked').remove();
						let xmlt=new XMLHttpRequest();
						xmlt.open('GET','bag/deleteBook?book='+books[i][0].toString());
						xmlt.onreadystatechange = function(){

						};
						xmlt.send();
					};
					elem3.appendChild(elem2);

					elem2=document.createElement('input');
					elem2.type='checkbox';
					elem2.style.marginTop='10px';
					elem2.id=books[i][0].toString();
					elem2.name='check'+i.toString();

					elem2.onclick=()=>{
						if(document.getElementById(books[i][0].toString()).checked){
							allCost+=parseInt(books[i][5]);	
						}
						else{
							allCost-=parseInt(books[i][5]);	
						}
						document.getElementById('allCost').innerHTML='';
						document.getElementById('allCost').appendChild(document.createTextNode('К оплате: '+ allCost.toString()+'руб'));
		
					};
					

					elem3.appendChild(elem2);


					elem1.appendChild(elem3);


					elem.appendChild(elem1);
				},50);

					
  				}
  				
  				setTimeout(()=>{
				elem1=document.createElement('div');
				elem1.classList.toggle('bagelem');

				elem2=document.createElement('div');
				elem2.classList.toggle('bagpoint');
				elem1.appendChild(elem2);

				elem2=document.createElement('div');
				elem2.classList.toggle('bagpoint');
				elem1.appendChild(elem2);

				elem2=document.createElement('div');
				elem2.classList.toggle('btnpoint');
				

				elem3=document.createElement('div');
				elem3.classList.toggle('header2');
				elem3.id='allCost';
				elem3.appendChild(document.createTextNode('К оплате: '+ allCost.toString()+'руб'));
				elem2.appendChild(elem3);
				

				elem3=document.createElement('div');
				elem3.classList.toggle('bn');
				elem3.id='bb';
				elem3.appendChild(document.createTextNode("Купить"));
				elem2.appendChild(elem3);
				elem3.onclick=()=>{
					let check = document.querySelectorAll('input');
					let rtb=[];
					for(let j=0;j<check.length;j++){
						if(check[j].checked)
							rtb.push(check[j].id);
						}
					if(rtb.length==0){
						alert('Вы не выбрали ни одной книги!');
					}
					else{
						payment.openWindow(books,rtb,allCost);
					}			
					
				};
				elem1.appendChild(elem2);
				elem1.style.height='100px';
				elem1.style.bottom='0';
				elem.appendChild(elem1);

				elem1=document.createElement('div');
				elem1.classList.toggle('elem5');
				elem1.appendChild(document.createTextNode('*Уважаемые покупатели, обращаем ваше внимание на следующий факт: Постановление Правительства РФ от 19.01.1998 N 55 (ред. от 30.05.2018) "Об утверждении Правил продажи отдельных видов товаров, перечня товаров длительного пользования, на которые не распространяется требование покупателя о безвозмездном предоставлении ему на период ремонта или замены аналогичного товара, и перечня непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену" ПЕРЕЧЕНЬ НЕПРОДОВОЛЬСТВЕННЫХ ТОВАРОВ НАДЛЕЖАЩЕГО КАЧЕСТВА,НЕ ПОДЛЕЖАЩИХ ВОЗВРАТУ ИЛИ ОБМЕНУ НА АНАЛОГИЧНЫЙ ТОВАР ДРУГИХ РАЗМЕРА, ФОРМЫ, ГАБАРИТА, ФАСОНА,РАСЦВЕТКИ ИЛИ КОМПЛЕКТАЦИИ Непериодические издания (книги, брошюры, альбомы, картографические и нотные издания, листовые изоиздания, календари, буклеты, издания, воспроизведенные на технических носителях информации)'));



				elem.appendChild(elem1);
				elem.style.minHeight='400px';

				payment=new PaymentWindow();
				payment.createWindow(elem);
				},60);

			}
			xmll.send();		
  		}	
	}
	xml.send();
	
	
}
function loadSearch(){
	let xml=new XMLHttpRequest();
	xml.open('GET','search/getBookSearch'+window.location.search);
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		let elem = document.getElementById('box_contain');
		clearBody();
		let books=JSON.parse(xml.responseText);
		console.log(books);
		let elem1=document.createElement('div');
		elem1.appendChild(document.createTextNode('Поиск: '+books[0]));
		elem1.classList.toggle('headmain');
		elem.appendChild(elem1);
		
		elem1=document.createElement('div');
		elem1.classList.toggle('catalog');
		for(let i=1;i<books.length;i++){
			let elem4=document.createElement('img');
			elem4.src=books[i][5];
			setTimeout(()=>{
			elem2=document.createElement('div');
			elem2.classList.toggle('elem');
			let elem3=document.createElement('div');

  			elem3.classList.toggle('bookimage');
			elem3.style.backgroundImage="url("+books[i][5]+")";
			
			elem3.style.height=((180*(parseInt(elem4.naturalHeight)/parseInt(elem4.naturalWidth)))).toString()+'px';
			elem3.style.width='180px';
			
			elem3.onclick=()=>{
				window.history.pushState('object or string','Title','/book?id='+ escape(books[i][0].toString()));
			};
			elem2.appendChild(elem3);
			console.log(elem3.naturalWidth);
			elem3=document.createElement('div');
			elem3.appendChild(document.createTextNode(books[i][1]));
			elem3.classList.toggle('header1');
			elem2.appendChild(elem3);
			elem3=document.createElement('div');
			elem3.appendChild(document.createTextNode(books[i][3]));
			elem3.classList.toggle('header2');
			elem2.appendChild(elem3);
			elem1.appendChild(elem2);
			},50);
			
		}
		
		elem.appendChild(elem1);
		setTimeout(()=>{elem.style.minHeight='400px';},60);	
  	}
  	xml.send();
}
function clearBody(){
	window.scrollTo(0,0);
	let elem = document.getElementById('box_contain');
	elem.style.minHeight=elem.clientHeight+'px';
	let deleteElement = elem.querySelectorAll('div');
  	for (let i = 0; i < deleteElement.length; i++) {
    	deleteElement[i].remove();
  	}

}
 let prevUrl = undefined;
 setInterval(() => {
   const currUrl = window.location.href;
   if (currUrl != prevUrl) {
     // URL changed
     prevUrl = currUrl;
     historyLoader();
   }
 }, 60);
