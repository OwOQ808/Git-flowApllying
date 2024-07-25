function sendData(){
	let xml=new XMLHttpRequest();
	xml.open('POST','auth/startSession/');
	xml.setRequestHeader('Content-Type', 'application/json');
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		if(xml.responseText==1){
  			location.reload();
  		}
  		else{
  			alert("Неверные логин или пароль!");
  		}
	}
	var userdata=[document.getElementById("inp1").value,document.getElementById("inp2").value];

	xml.send(JSON.stringify(userdata));
}
function createUser(){
	let xml=new XMLHttpRequest();
	xml.open('POST','auth/createUser/');
	xml.setRequestHeader('Content-Type', 'application/json');
	xml.onreadystatechange = function(){
		if (xml.readyState !== 4 || xml.status !== 200) {
   			return;
  		}
  		if(xml.responseText==1){
  			location.reload();
  		}
  		else{
  			alert("Ошибка регистрации, попробуйте создать аккаунт с другими данными!");
  		}
	}
	var userdata=[document.getElementById("inp3").value,document.getElementById("inp4").value,
	document.getElementById("inp5").value,document.getElementById("inp6").value];

	xml.send(JSON.stringify(userdata));
}
let prevUrl = undefined;
setInterval(() => {
  const currUrl = window.location.href;
  if (currUrl != prevUrl) {
    // URL changed
    prevUrl = currUrl;
    //location.reload();
  }
}, 60);
window.onpopstate = function(event) {
  location.reload();
};
btn1.onclick=sendData;
reg.onclick=createUser;