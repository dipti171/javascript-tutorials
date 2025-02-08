//------------------------------datatypes-------------------------
/* how the data are stored in memory and we can access ,there are basis of there there are two types
 1.primitive datatype
         these all are call by value =>when we copy  any data then thsee the copy of data(not original data) ,
         and also not a address of memory. then when we changes anything its happened in copy.
         7 types--
            1.String
            2.Number
            3.Boolean
            4.Null
            5.Undefined
            6.Symbol   =>used for unique in react
            7.Bigint

        -------------------------------questions-------------------
1.Javascript is a static type language or dynamic type
     dynamic type => In dynamically typed language, the type of a variable is checked during run-time whereas...
In statically typed language, the type of a variable is checked during compile-time.

 

const num=53;   //number
const numValue=65.4;     //number

const isLoggedIn=false;            //false
const outsidetemp=null;            //declaring the value is completely empty

let userEmail;          //value will be undefined

//symobl defining

const id=symbol('1233')      //we are using symbol with same value ,here both value will be different bcoz it gives unique value
const anotherId=symbol('123')  

console.log(id===anotherId);   //false

//bigint

*/

//const bigNumber=56634789236456664n

/*
2.Non-primitive datatype(reference datatype)
          here we directly allocate the address of memory
          1.Array
          2.Objects
          3.Functions
             
const arr=["ram","shyam","hanuman"]        =>array

let myObj={                                =>objects
    name:"deepu",
    age:45
}
    */


const myFunction=function(){
    console.log("hello guys");
}


const outsideTemp=null;

console.log(typeof bigNumber);       //undefined
console.log(typeof outsideTemp);     //object

const scoreValue=100.3;
console.log(typeof scoreValue);      //number

/*
typeof operator----------------------

undefined-"undefined"
Null-"object"
Boolean-"boolean"
String="string"
*/


//*** nonprimitive type-  (datatype -=> functions)
//                          ( functions=>object fiunctions)





//-----------------------------------Memory-----------------------------------------
/*
two type ----
          1.stack
          2.Heap

1.Stack-
     used in primitive type -> we finds the copy of the variable that we declared
2.Heap-
     used in non-primitive type -> finds the reference (original) value 
 */

let myVal="dinesh";
let newVal=myVal;

console.log(newVal);
newVal="newGuy";
console.log(newVal);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="deepu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//---------------------------------------String-------------------------------------------
//string declaration type 1->
const name="deepu";
const repoCount=35;

//console.log(name+repoCount+"value");

//use backticks(``)  --known as string interpolation- it's create placeholder here we can directly 
// inject the existing variables

console.log(`hello my name is ${name} and my repo count is ${repoCount} this is all.`);

// string declaration type 2
 //string type -object
//that means data are stored in key values pairs

/*
const gameName=new String ('dipeshh-pt');
console.log(gameName[1]);                      //i
console.log(gameName.__proto__);               //{}->object
console.log(gameName.length);                  //7
console.log(gameName.toUpperCase());           //DIPESHH
console.log(gameName.charAt(2));               //p
console.log(gameName.indexOf('h'));            //5

const newStr=gameName.substring(0,4);
console.log(newStr);                            //dipe

const newStr2=gameName.slice(0,1)
console.log(newStr);

*/
const newStr3="   dipeshht  ";
console.log(newStr3);
console.log(newStr3.trim());             //remove the starting and end exrtra spaces from string

const url="https://deepu.com/deepu%20dish";
console.log(url.replace('%20','-'))                    //https://deepu.com/deepu-dish
console.log(url.includes('sundar'));                   //false


const gameName="deepu-deip"
console.log(gameName.split('-'));                     //[ 'deepu', 'deip' ]



//------------------------------Nums amd Math--------------------------------------------
const score=7643;
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));           //100.00 -precision value
console.log(balance.toFixed(1));           //100.0

const numb2=43.6433;
console.log(numb2.toPrecision(3));          //43.6

//---------------------------------Maths-------------------------------------------
console.log(Math)                 //object [Math] {}
console.log(Math.abs(-23));        //23
console.log(Math.round(543.4));     //543
console.log(Math.ceil(43.67));       //44
console.log(Math.floor(54.6));                    //54
console.log(Math.min(4,6,23,56,8,14));            //4     
console.log(Math.max(4,65,3,7,246,4,56));         //246
console.log(Math.round());                  //math.round -> gives the value from 0 to 1      //NaN

//----------------------------------Date-------------------------------------------------
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());

//--------------------------------------ARRAY-----------------------------------------------

const arr1=[0,1,2,3,4,5];
//collection of multiple items under a single variables
//javascript array are resizable and can contains a mix of different datatypes.

const arr2=new  Array(1,2,3,4)
console.log(arr2[0]);


//array method
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);

console.log(arr1.includes(7));
console.log(arr1.indexOf(4));