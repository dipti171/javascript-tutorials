/*---------------------------------object-----------------------------------------------
there are two methods to declare the object
1.LITERAL       =>not singleton
2.constructor   => singleton


singleton-when we create constructor then its create singleton object.(like a self object )

*/
//Object.create      //constructor method => create singleton

//--------------------------object literals -> here are pairs of keys and values-------------


//declare  symbol datatype
const mySym=Symbol("key1")

const jsuser={
    name:"deepu",
    "full name":"deepu deep",
    [mySym]:"mykey1",                    //adding key of symbol
    age:54,
    location:"jaipur",
    email:"deepu43@gmail.com",
    isLogged:false,
    lastLoginDays:["Monday","Saturday"]
}           
//method 1 --for access [using dot]
console.log(jsuser.name);
console.log(jsuser.age)
console.log(jsuser.lastLoginDays[0]);

//method2 --for access  [using square notation]
console.log(jsuser["age"]);
console.log(jsuser["full name"]);

console.log(jsuser.mySym);                      //mykey1
console.log(typeof jsuser.mySym);               //string

//when we adding symbol as a key in object then syntax used as-- [mysym]:"mykey1",
// for accessing ->  jsuser[mysym]

console.log(jsuser[mySym]);

jsuser.email="deep@yahoo.com";

Object.freeze(jsuser);

jsuser.email="deppt@yahoo.com";
console.log(jsuser);


//-----------------adding function in object------------------------------------------------
const symbl=Symbol("key1")
const jsuser={
    name:"guys",
    age:52,
    [symbl]:"mysymbol"
}
jsuser.greeting=function(){
    console.log("hello Js user");
}

console.log(jsuser.greeting());

jsuser.greetingTwo=function(){
    console.log(`hello Js user ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


//---------------------------------constructor object -> singleton-------------------------

const tinderUser=new Object()
//console.log(tinderUser);             //{} =>empty object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);          //{ id: '123abc', name: 'sammy', isLoggedIn: false }


const regularUser={
    email:"some@gmail.com",
    fullname:{
        firstname:"deepu",
        lastname:"deep"
    }
}
//console.log(regularUser["email"]);
//console.log(regularUser.fullname);         //{ firstname: 'deepu', lastname: 'deep' }

const obj1={1:"a",2:"b"}
const obj2={3:"p",4:"q"}

//const obj3={obj1,obj2};     problem-->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'p', '4': 'q' } }
//console.log(obj3);

//const obj3=Object.assign(obj1,obj2)
//console.log(obj3);                     //{ '1': 'a', '2': 'b', '3': 'p', '4': 'q' }


obj3=Object.assign({},obj1,obj2)
//console.log(obj3); 

obj3={...obj1,...obj2}        //spread operator
//console.log(obj3);

//array object
const user=[
    {
        id:1,
        email:"hfgdgf@gmail.com"
    },
    {

    },
    {

    }
]

user[1].email
//console.log(tinderUser);

console.log(Object.keys(tinderUser));           //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));         //[ '123abc', 'sammy', false ]
//console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//---------------------------------object restructuring----------------------------------

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"deepu"
}

//course.courseInstructor ->method1

//method 2 to access 
//const {courseInstructor} =course
//means here course is object {courseInstructor} is key that we want to access

//-------------------object destructuring---------------------
//console.log{courseInstructor:instructor}=course;
//now courseInstructor name is change in instructor 



//----------------------------API-----------------------------------------------
//when the values comes from backend then how we can write that values 
//in previous year,values comes in a xml form and now used /comes in json.
//json is a javascript object notation

{
    "name":"deepu",
    "age":43,
    "course":"javascript"
}
//it is a json like structure


//*****************use -random userme and json formatter*************************************


//------------------------functions------------------------------------------------------

function addTwoNum(num1,num2){      //num1,num2 are parameters
    console.log(num1+num2);
}

//const result=addTwoNum(5,7);                     //5,7 are arguments
//console.log("result is:",result);          //result is: undefined=>problem in functions


function addNum(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2           //easy way
}
//console.log(addNum(4,6));                 //10


function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter username:");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("deepu"));             //username just logged in
//console.log(loginUserMessage())                   //print please enter username

//mostly prefer
function loginUser(username){
    if(!username){
        console.log("Enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUser("deepu"));

//for default value also

function loginUsers(username="sam"){
    if(!username){
        console.log("entter username:");
        return
    }
    return `${username} just logged in`;
}
//console.log(loginUsers())            //sam just logged in
//console.log(loginUsers("deepu"));      //deepu just logged in

//------------------------  Shopping cart-----------------------------------------------

//users added items in the cart continuously then function should be ready for this parameter
//we have to add the price only

//for 1 item 
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200))                      //200

//for multiples items

function calculateCartPric(...num1){                //used rest operator
    return num1;
}
console.log(calculateCartPric(200,4000,7572));               //rest operator gives array- [200,4000,7572]

//store values and arreay
function calculateCartPric(val1,val2, ...num1){                //used rest operator
    return num1;
}
console.log(calculateCartPric(200,4000,2000,7572));       //val1=200, val2=4000 and rest values are stored in array
                                                          //num1=[2000,7572]


//function with objects

const user={
    username:"deepu",
    price:544,
}

function handledObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handledObject(user);

//array with funcrtions

const myNewArray=[100,400,600,200];

function returnSecondValue(getValue){
    return getValue[1];
}
console.log(returnSecondValue(myNewArray));         //400


//----------------------------------Scope-----------------------------------------------
//         1.let
//         2.var
//         3.const


let a=10;
const b=75;
var c=54;

console.log(a);
console.log(b);
console.log(c);


//    {}-scope           functiom ,if/else scope,loop

if(true){
    let a=10;
    const b=75;
    var c=54;
}
//console.log(a);               //a is not defined
//console.log(b);               //b is not defined
//console.log(c);               //54

//---------------------nested scope----------------------------------------

function one(){
    const username="depu"

    function two(){
        const website="youTube"
        console.log(username);
    }
    //console.log(website);
    two();
}

//one();


//*********************************************************************************** *
 
function addOne(num){                       //normal functions
    return num+1;        
}
addOne(5);

const addTwo=function addtwo(num){            //function like expression
    return num+2;    
}

console.log(addTwo(5));                //7



// ------------------------------------------------------------------------------

//when we print this function it doesnt show any error

console.log(addOne(5));   

function addOne(num){                       //normal functions
    return num+1;        
}

//but when we print this function it show error => hoisting of execution context
// we can't use before declaration 
console.log(addTwo(5)); 

const addTwo=function addtwo(num){            //function like expression
    return num+2;    
}

//console.log(addTwo(5));                


//---------------------------------------------                    THIS KEYWORD             -----------------------------------------------------------------------

//this keyword refers the current context

const user={
    username:"dipti",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage();

//console.log(this);                      //print {} => empty bcoz this refers to a empty object
                                        // console of browser print=>   window


function one(){
    let username="deepu";
    console.log(this.username);
}
//one()                                            //undefined

const two=function(){
    let username="deepu";
    console.log(this.username);                   //undefined
}


//arrow function
const three=()=>{
    let username="deepus"
    console.log(this.username)                     //undefined
}


//--------------------------------------                      ARROW FUNCTION                     ------------------------------------

//   method 1--  basic artrow function-    ()=>{}

const addTwo=(num1,num2)=>{
    return num1+num2
}
//console.log(addTwo(3,7));                      //10

//  method 2---implicit return

const add2=(num1,num2) => num1+num2
//console.log(add2(5,7))                        //12
                      // or
const addd2=(num1,num2) => (num1+num2)
console.log(addd2(5,7))  

const add21=(num1,num2) => {
    return num1+num2
}
console.log(add21(5,7)) 

//that means when we use paranthesis ,there are no any need to use return keyword
//when er use {} then we have to use return keyword

//retuen onject

const add32=(num1,num2)=> ({username:"deepu"})


//----------------------------------(IIFE)immedialtely invoked functuin expression-------------------

//When we write any function then we want to execute immediately
//1.sometimes we write file that have only database connection and we want when start the application 
//   then start the connection of database of this file
//2.global variable accessed in the function ,problem in global scope pollution

//used iife for remove the global scope declaration,variables

function one(){
    console.log(`DB connected`);
}
one();

//using iife
(function two(){
    console.log(`DB connected`)
})()

//when we use paranthesis it will create block

// ()(); => first()->used to write function definition , second()-> for execution


//-------------------------------------------Javascript Execution context---------------------------------
 two exection phase
1 phase-Memory creation phase/creation phase
2.phase- execution phase

 
when we gives any file to JS then it always creates global exectution and then inside of 
global execution context it refers to this variable 
 browser -this valuer => window object
  {}->global execution context(EC) =>then it refers to this

// JS is a single threaded

global execution context
function/functional execution context
eval execution context


//--------------------------------------true/false values----------------------------------

const userEmail1="deepu543@gmail.com";
if(userEmail1){
    console.log("got user email");
}else{
    console.log("dont have user email");              //got user email
}

const userEmail2=""
if(userEmail2){
    console.log("got user email");
}else{
    console.log("dont have user email");              //don't have user email
}

const userEmail3=[]
if(userEmail3){
    console.log("got user email");
}else{
    console.log("dont have user email");              //got user email
}


//ermpty array-true
//empty string- false

//-----------------------------------------true /falsy value----------------------------

//falsy value
//       false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy value

// "0", 'false'," ",[],{},function(){}


if(userEmail1.length===0)
{
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty")
}



//---------------------------------------loops------------------------------------------
//for of loop

// ["","","",""]  string are stored in array
// [{},{},{},{}]  objects in array 


const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const str="hello"
for (const num of str) {
    console.log(num);
}

//maps=> store the uniques value and also maintain order

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"france")

console.log(map);

// for each loop

const coding=["js","ruby","java","python","cpp"]

coding.forEach(function (item){
    console.log(item)
})

coding.forEach((item)=>{
    console.log(item);
})
