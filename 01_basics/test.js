/*

//documentation-
 //         1.  mdn
 //         2. tc39.ec / ecmascript - standard javascript



//----------------------------------variables---------------------------------------------
const accountId=2342
let accountEmail="dipti171@gmail.com"
var accountPassword="543324"
accountCity="jaipur"

//accountId=2            not allowed


console.log(accountId);

accountEmail="deepu34322@gmail.com";
accountPassword="455673";
accountCity="noida";

console.log(accountEmail);


//var-prefer not to use 
//because of issue in block scope and finctional scope


//table to print the all variables in a table format
//console.table([accountId,accountEmail,accountCity,accountPassword]);



//----------------------------------datatypes-----------------------------------------------

"use strict";
//treat all javascript code as newer version

// alert(3+3);      -we are using nodejs here so its its not running

let name="deepu";
let age=56;
let islogged=false;


// ----------------------------primitive datatypes------------------------------------

//number -2to power 53
//bigint
//string=>""
//boolean=> true/false
//null=> satandlone value    //it is a representation of empty value
let store=null;
//undefined=> when we declare variable but dont assigns any value
//symbol=> unique



//------------------------------------object--------------------------------------

console.log(typeof "dipti");            //string
console.log(typeof null);               //object
console.log(typeof age);                //number
console.log(typeof undefined);          //undefined


//--------------------------conversion and operations---------------------------------

let score=63;
console.log(typeof(score));           //number

let score1=6534;
console.log(typeof(score1));         //string


//---------------------------------number conversion------------------------------

let scoreInNum=Number(score1);
console.log(typeof scoreInNum);             //number
console.log(scoreInNum);            //NaN --it is a special type



// "33"=> 33
// "33asb"=>NaN
//  true=>1 false=>0

//-------------------------------boolean conversion------------------------
let isLoggedIn="student";

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//   1=>"true" 0=>false
//   ""=> false   empty string
//   "student"=> true


//----------------------------------string conversion--------------------------------

let number=5643;
console.log(typeof number);               //number
let stringNumber=String(number);
console.log(typeof stringNumber);             //string      






//-------------------------------operations---------------------------------------

let value=3
let negValue=-value;
console.log(negValue);
console.log(5**2);                 //print s power 2

let str1="hello";
let str2="guys";
let str3=str1+str2;
console.log(str3);

console.log("1"+3);           //13
console.log(3+"56");          //356
console.log("1"+3+6);         //136
console.log(1+5+"54");        //654

let count=23;
console.log(count++);          //23 =>postincrement- first print the value then increment
console.log(++count);          //25=>preincrement- first increment then print the value

*/


//-----------------------------------COMPARISON----------------------------------------

console.log(2>5);         //false

console.log(null<=0)     //true
console.log(null==0)      //false
console.log(null>0)       //false

console.log(undefined==0)     //false
console.log(undefined<=0)     //false
console.log(undefined>=0)     //false


//--------------------------------strict check-----------------------------------------
//it strictly check the value  that means it check the value and also its datatype

//    === ->strict check

console.log("2"==2);          //true ->here only check the value--conversion happened
console.log("2"===2);        //false ->here check the value and its datatype also.



