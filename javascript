// javascript is a high level just-in-time compiled programming language that conforms to the ECMAScript specification

// JavaScript alongside HTML and CSS is one of the core technogies of the world wide web.

// Javascript can be used to build server side applications.

// JavaScript run time environment it can be run out side the browser.

// this is a way to build servers that can handle network requests interact with databases, compute logic and return the result.

// We can full stach application with javascript.

// JavaScript is also used in mobile app development to create apps that can run on both iOS and android

// and it is also used to create desktop applications

// Javascript is the most popular programming language now.

// Data types in JavaScript

// Primitive : string, number, boolean, undefined, null, BigInt, symbol

// non - Primitive : Objects

// Functions

// A JavaScript function is a block of code designed to perform a particular task

// Functions are reusable as they can be defined once and can be called with different values resulting in different results.

// Functions help divide a complex problem into smaller chunks and makes program easy to understand and maintain

// Scope:

// Scope basically determines the accessibility or visibility of variables.

// Block scope 
// Function scope
// Global scope


//////////////////////////////////////////////////////////





<script src="array.js"></script>

      ..................................

  
console.log(window);

console.log(this);

console.log(window.document);

console.log(document.getElementById("m-head"));

console.log(document.querySelector("section"));

console.log(window.location);

console.log(document.getElementsByClassName("item"));

console.log(document.getElementsByTagName("li"));

....

  console.log(document.querySelectorAll("li"));

 const nodelist = document.querySelectorAll("li");

	nodelist.forEach((item)=>{

	console.log(item);
});

........

  
const h3 = document.querySelector(".contact_list > h3");

 h3.innerText = "CONTACT LIST";

.......................

  const h3 = document.querySelector(".contact_list > h3");

 h3.textContent = "CONTACT LIST - II";

const ul = document.querySelector(".contact_list > ul");

	ul.firstElementChild.innerText = "HTML";

	ul.lastElementChild.textContent = "JAVASCRIPT";

	ul.children[1].innerHTML = "<h4>CSS<h4/>";

	ul.firstElementChild.style.background = "tomato";

.................................


	const btn = document.getElementById("toggle");

	btn.addEventListener("click", (e) => {


	console.log(e);

	const ul = document.querySelector(".contact_list > ul");

	if(ul.style.display === "block"){

	ul.style.display = "none";
}else {
	ul.style.display = "block";
}


});

......................................

  

	const myform = document.querySelector("form");

	const name = document.getElementById("exampleInputEmail1");

	const email = document.getElementById("exampleInputPassword1");

	
	myform.addEventListener("submit", onSubmit);

	function onSubmit(e){

	e.preventDefault();

	if(name.value === "" && email.value === ""){

	alert("All fields are manadatory")
}else {

	alert("success");
}
	
}

.............................................



      
      
//////////////////////////////////////////////////////////////////

      Array Methods:

    ...................................

let frameworks = ["Angular", "React", "Vue"];

let database = new Array("DB2", "SQL", "MONGODB");

console.log(frameworks[0]);
console.log(frameworks[2]);
console.log(frameworks[5]);


database[0] = "Oracle";

console.log(database);


console.log(frameworks.length);
console.log(frameworks.sort());


console.log(database.pop());
console.log(database);


frameworks.shift();
console.log(frameworks);

database.shift();
console.log(database);


frameworks.push("JAVA");
database.push("BOOTSTRAP");


console.log(frameworks);
console.log(database);

frameworks.unshift("bootstrap");
console.log(frameworks);

database.unshift("JAVA");
console.log(database);


console.log(typeof frameworks);

console.log(Array.isArray(frameworks));

console.log(frameworks instanceof Array);


      






    .............................................................

      const grocerylist = [
    
    {name:"apples1", price:25, category:"fruits1"},
    {name:"apples2", price:25, category:"fruits1"},
    {name:"apples3", price:25, category:"fruits3"},
    {name:"apples4", price:25, category:"fruits3"},
    {name:"apples5", price:25, category:"fruits5"},
    {name:"apples6", price:25, category:"fruits5"}
];

console.log(grocerylist);

grocerylist.forEach((item)=>{

    console.log(`The price for ${item.name} is ${item.price}`);
})

const newPrice = grocerylist.map((item)=>{
    return {name:item.name , price:item.price}
});

console.log(newPrice);


const newList = grocerylist.filter((item)=>{
    return item.category === "fruits3";
});

console.log(newList);


const newFreshList = grocerylist.find((item)=>{

    return (item.category).toLowerCase() === "fruits3";
});

console.log(newFreshList);

const newfindIndex = grocerylist.findIndex((item)=>{
    return (item.category).toLowerCase() === "fruits3";
});

console.log(newfindIndex);

const sortedArray = grocerylist.sort((a,b)=>{
    return a.name.localeCompare(b.name)
});

console.log(sortedArray);

const sortedArrayNum = grocerylist.sort((a,b)=>{
    return a.price - b.price
});

console.log(sortedArrayNum);

const checkPrice = grocerylist.some((item)=>{
    return item.price > 3
});

console.log(checkPrice);

const checkEvery = grocerylist.every((item)=>{
    return item.price < 3
});

console.log(checkEvery);

let initialvalue = 0;

const total = grocerylist.reduce((currentTotal, item, index)=>{
    console.log("-------" + (index+1) + "-----------");
    console.log("currentTotal", currentTotal);
    console.log("InitialVlue", initialvalue);
    console.log("CurrentItemPrice", item.price);
    console.log("PriceAfterEveryIteration", item.price + currentTotal);
    return item.price + currentTotal;
}, initialvalue);

console.log(total);

const numbers = [1,2,3,4,5];

console.log(numbers.includes(5));


const num = [1,2,3,4,5];

const letters = ["a", "b", "c"];

console.log(num.concat(letters));


const numb = [1,2,3,4,[5,6]];

console.log(numb.flat());


const numb5 = [1,2,3,4,[5,6,[7,8]]];

console.log(numb5.flat(2));


const numb6 = [1,2,3,4,[5]];

console.log(numb6.flat().map((item)=>{
    return item * 10;
}));


const numb7 = [1,2,3,4,[5]];

console.log(numb7.flatMap((item)=>{
    return item * 20;
}));

..................................

  
	for(let i = 0; i < employee.length; i++ ){
	
	console.log(employee[i]);
		
}

....................................

for(let i = 0; i < employee.length; i++ ){
	
	
	console.log(employee[i].firstName);	
}

..............................


for(let employee of employees){
	console.log(employee);
}

for(let employee of employees){
	console.log(employee.firstName);
}

...............................

  
	employees.forEach(function(emp){
	console.log(emp.lastName);
});

..................................


	const names = employees.map(function(emp){
	return emp.firstName;
});
	console.log(names);

...............................

  
 const employee = employees.filter(function(emp){
	return emp.id == "1001";	
});

console.log(employee);

......................................

  
 const employee = employees.filter(function(emp){
	return emp.id == "1001";	
}).map(function(emp){
	return emp.firstName;
});

console.log(employee);

.............................

  



































////////////////////////////////////////////


Object Methods:

  ............................

  
let employee = {

	id : 1002,
	firstName : "Krishna",
	lastName : "DBD",
	age : 29,
	doj : "10/09/2019",
	address : {
	
	city:"Hyderabad",
	country : "India"
},
	skills : ["HTML", "CSS", "JAVASCRIPT"],
    
  fullname: function(){

	return `${this.firstName} ${this.lastName}`
},
};

	console.log(employee);

	console.log(employee.id);

	console.log(employee.address);

	console.log(employee.address.city);

	console.log(employee.skills);

	console.log(employee.skills[1]);


	console.log(employee.fullname);

	console.log(employee.fullname());

...............


let employee = {

	id :1002,
	
	firstName : "Krishna",

	lastName : "DBS",
	
},

	 {id, firstName, lastName} = employee;

	console.log(firstName, lastName, id);


	console.log(employee);

	console.log(employee[1]);

	console.log(employee[1].firstName);


	console.log(employee[2].address.country);

	console.log(employee[2].skills[0]);

..................


	const employeesJson = JSON.stringify(employee);

	console.log(employeesJson);

	const empArray = JSON.parse(employeesJson);

	console.log(empArray);


..................................

event listeners:

........................

const first = document.querySelector(".first");

first.addEventListener("click", (e)=>{
    console.log(e);
});

....................


first.addEventListener("click", (e)=>{
    console.log(e.target);
});

.....................

document.addEventListener("click", (e)=>{
    console.log("document box");
});

................................


first.addEventListener("click", (e)=>{
    console.log("first box");
}, { capture: true });

.......................


third.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("third box");
});

............................


first.addEventListener("click", (e)=>{
    console.log("First box");
}, { once: true });

.....................


first.addEventListener("click", displayName);

setTimeout(()=>{
        first.removeEventListener("click", displayName);
}, 3000)

.........................

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
randomItem = 'milk';

if(groceries.includes(randomItem)){
    console.log('Yes it is in list');
}

.........................

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
randomItem = 'milk';
const isIncluded = groceries.includes(randomItem, 1);
console.log(isIncluded);

..............................

const nameA = "krishna";

console.log(Array.from(nameA));

........................

const nameA = "krishna";

console.log(Array.from(nameA));

........................


























