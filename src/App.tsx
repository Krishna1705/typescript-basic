import React from 'react';
import logo from './logo.svg';
import './App.css';

let name:string;

//if we want to give any type to the variable then we can use any or unknown as follow,buit unknown is a recommanded way than making use of any
//let address:any;
//let address:unknown;

//if we want variable to contain number and string both of the types then we can do it with union as follows:
let age:number | string;
age=5;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string]; //is called a tuple

//object declaration 
//NOTE:HERE TYPE IS SOMETHING CALLED ALIAS:WHICH ARE OF TWO TYPES:
//1)type 2)interface
//>>>>>>>>>>>>>>>1)type is as follows
type Person={
    name:string,
    age?:number //? ----is used to make property optional
}
let person : Person={
      name:"krishna",
      //age:30
  }
//other example of object ---which is basically one object extends another object's properties
type X = {
  a?:string,
  b:number
}
//Extending a type via intersections
type Y = X & {
  c:string,
  d:number
}
let y: Y={
 // a:"ppp",
  b:6,
  c:"kkk",
  d:5
}
//A type cannot be changed after being created
/* type Window = {
  title: string
}

type Window = {
  ts: number
}
NOTE: above cod ewill throw an error as follows
Error: Duplicate identifier 'Window'.
 */
 

//>>>>>>>>>>>>>>2)interface is as follows:
interface Person1{
  name:string,
  age?:number //? ----is used to make property optional
}
let person1: Person1={
  name:"kajal",
  age:3 //? ----is used to make property optional
}

//Extending an interface
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

let bear: Bear={
  name:"white bear",
  honey:true
}

//Adding new fields to an existing interface
interface Window {
  title: string
}

interface Window {
  ts: number
}
//array of an object declaration
let lotsOfPeople: Person[]

//******************************declaration of function in Typescript
//1st way
function printName1(name1:string){
  console.log("************************",name1)
}
printName1("kaju");

//2nd way
let printName2:(name2:string)=>void;//if function returns nothing then write void
//here void returns undefined
//instead of void we can use never also----which means that function never returns anything



function App() {
  return (
    <div className="App">
   Hello world, {person.name}
    </div>
  );
}

export default App;
