// let title=document.querySelector('.title');
// let ul=document.querySelector('ul');
// let reload=document.querySelector('.reload');

// window.onload= function(){
// 	if(window.navigator.onLine){
// 		online()
// 	}else{
// 		offline()
// 	}
// }
	
// reload.onclick=function(){

// 	window.location.reload();
// }

// window.addEventListener('online',function(){
// 	online();
// });
// window.addEventListener('offline',function(){
// 	offline();
// });

// function online(){
// 	title.innerHTML='Online now';
// 	title.style.color='green';
// 	ul.classList.add('hide');
// 		reload.classList.add('hide');
// }
// function offline(){
// 	title.innerHTML='Offline now';
// 	title.style.color='#666';
// 		ul.classList.remove('hide');
// 		reload.classList.remove('hide');
// }

	

// let newPromise = new Promise((resolvefunction,rejectfunction)=>{
// 	let employees= [];
// 		if (employees.length===4){
// 		resolvefunction(employees);
// 	}else{
// 		rejectfunction(Error('number of employees is not 4'));
// 	}
// });
// newPromise.then(
// 	(resolveValue)=>{
// 		resolveValue.length=2;
// 		return resolveValue;
// 	}
	
// ).then(
// 	(resolveValue)=>{
// 		resolveValue.length=1;
// 		return resolveValue;
// 	}
// ).then(
// 	(resolveValue)=>{
		
// 		 console.log(`the choosen employee is ${resolveValue}`);
// 	}
// ).catch((rejectedreason)=>{console.log(rejectedreason);}).finally(console.log('operation done ')

// );
// const getData=function(apiLink){
// 	return new Promise((resolve,reject)=>{

// let myReqest = new XMLHttpRequest();



// myReqest.onload=function(){

// 	if(this.readyState===4 && this.status===200){
// 		resolve(JSON.parse(this.responseText));	
// }else{
// 	reject(Error('no Data found'));
// }

// };
// myReqest.open("GET",apiLink);
// myReqest.send();


// 	})
// }

// getData("https://api.github.com/users").then(
// 	(result)=>{
// 		result.length=10;
// 		return result;
// 	}
// 	).then(
// 	(result)=>console.log(result[0].id)
// 	).catch(
// 	(reject)=>console.log(reject)
// 	)





//https://api.github.com/users//
		// let jsData=JSON.parse(this.responseText);
	// 	for(let i=0;i<jsData.length;i++){
		
	// 	let div= document.createElement('div');
	// 	let repoName= document.createTextNode(jsData[i].id);
	// 	div.appendChild(repoName);
	// 	document.body.appendChild(div);
	// 	let br=document.createElement('br');

	// }
////////////////////////////////////////////////////////

// fetch("https://api.github.com/users").then((result)=>{
// console.log(result);
// let myData =result.json();
// console.log(myData);
// return myData;
// }).then((myData)=>{
// 	myData.length=10;
// 	return	myData;
// }).then((myData)=>console.log(myData[0].login));





//  async function getData(){
// 	let data=["ali"];
// 	if(data.length>0){
// 		return "users found";
// 	}else{
// 		return new Error("No Users Found");
// 	}

// }
// console.log(getData());
// getData().then(
// 	(resolveValue)=>console.log(resolveValue),
// 	(rejectValue)=>console.log(resolveValue)
// 	);




// async function fetchData(){
// 	console.log("before fetch ");
// 	try{
// 		let myData= await fetch("https://api.github.com/users");
// 		let data = await  myData.json();
// 		console.log(data);
// 	}catch(err){
// 		console.log(`Reason:${err}`);
// 	}finally{
// 		console.log("after fetch");
// 	}

// }
// fetchData();




// let friends =["Ahamd","Lena", "Mohamed", "Belal", "Ahamd", "Ali",  ];
 

//  let friendsFiltered=friends.filter((el)=>{
//  	return el.startsWith("A");
//  })
// console.log(friendsFiltered);
// let friendsmaped=friends.map((el,i)=>{
//  	return el+i;
//  })
// console.log(friendsmaped);

// let sentence ="I Love Foood Code Too Playing Much";

// let smallWords=sentence.split(" ").filter((word)=>{
// 	return word.length <=4;
// }).join(" ");
// console.log(smallWords);


// let ingnorenumbers= "baDeree123d12";
//  let ignore =ingnorenumbers.split("").
// filter((el)=>{
// 	return isNaN(parseInt(el)) ? el :"";
// }).join("");
// console.log(ignore);
//  let ignore =ingnorenumbers.split("").
// filter((el)=>{
// 	return ! isNaN(parseInt(el)) ? el :"";
// }).map((el)=>{
// 	return el*el;
// }).join("");
// console.log(ignore);
// let chars=["B","a","@","d","e","@","r","E","E","@"];

// let charsClean=chars.filter((el)=>{
// 	return !el.startsWith("@");
// }).reduce((acc,current)=>{
// 	return `${acc}${current}`;
// });

//  console.log(charsClean);


// let date=new Date();

// let day = date.getDate();
// let month=date.getMonth()+1;
// let year=date.getFullYear();
// let fullDate=date.toLocaleDateString();
// console.log(fullDate);
// let time =date.getTime();
// let hour=date.getHours();
// let minute=date.getMinutes();
// let second=date.getSeconds();
// console.log(hour,minute,second);



let stars=document.querySelector('#stars');
let moon=document.querySelector('#moon');
let mountains3=document.querySelector('#mountains3');
let mountains4=document.querySelector('#mountains4');
let river=document.querySelector('#river');
let boat=document.querySelector('#boat');
let nouvil=document.querySelector('.nouvil');


window.onscroll= function(){

	let value=scrollY;
	stars.style.left=value+'px';
	moon.style.top=value *4+'px';
	mountains3.style.top=value *2+'px';
	mountains4.style.top=value *1.2+'px';
	river.style.top=value +'px';
	boat.style.left=value*3+'px';
	nouvil.style.fontSize=value+'px';
	if(scrollY>=67){
		nouvil.style.fontSize=67+'px';
		nouvil.style.position='fixed';
		if(scrollY>=460){
			nouvil.style.display='none';
		}
		else{
			nouvil.style.display='block';
		}
	}
	if(scrollY>=139){
		document.querySelector('.main').style.background='linear-gradient( #376281,#10001f)';
	}else{
		document.querySelector('.main').style.background=' linear-gradient(#200016,#10001f)';
	
	}


}