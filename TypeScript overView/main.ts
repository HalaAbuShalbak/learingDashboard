// ! TS Documentation Link (https://www.typescriptlang.org/docs/)

// ========================================== OVERVIEW ==========================================
/* Types In TS */
//* ------------------------number
// * Declaring type number with giving the specific type to the assigned value
let age: number = 24;
age = 25;
//  -------------------------------------------------------------------

// * Declaring type number without giving the specific type to the assigned value , here the variable will take the type of the assigned value
let num = 25;
//! num='25'
// ! Type 'string' is not assignable to type 'number'
// This is called type infereing in TS , where TS checks the value of the variable and assings the best matching type to it
//  -------------------------------------------------------------------

// ? When to use Type inferring and when to assing a type?
// * Declaring type number without giving the specific type and without assigning a value , here the variable will infer to type any
let any;
any = 5;
any = "this is another type without having any problems";
/*  When Declaring a variable without assing a value or a type to it TS will not infer a type but it will take it as type: any , this will allow us to change the type whenever we reassign the variable
* type: any => means that the variable can take and use any type of data without utilizing type script
We usually let TS infer the types of variables unless we want a specific type ,
such as:
- functions 
- complex types of arrays, objects, arrays of objects
- a particular value to have multiple types: type1 | type2
- 

 */

//  ===================================================================
// * ----------------------boolean , undefined , null
let T = true;
let F: boolean = false;
let U: undefined = undefined;
let N: null = null;


//  ===================================================================
// * ----------------------string
let myName = "Hala";
let yourName: string = "Hala";
// ! myName="hi".length
// ! Type 'number' is not assignable to type 'string'

//  ===================================================================
// * ----------------------objects
//  the type is an object {keyName: type of value}
//  if we want the key to be optional we just add ? after the property, as a result , there will not be a problem if we didn't add this property and it's value to the object , but also it will cause a problem if we added the property with a different value type that the specified one
const obj: { name?: string; age: number | null } = { name: "Hala", age: 27 };

//  ===================================================================
// * ----------------------arrays
//* specify the type of elements
const arr1: string[] = ["string1"];
//  -------------------------------------------------------------------
//* for multi type of elements use OR | this is called union types
const arr2: (string | boolean)[] = ["string1", false];
//  -------------------------------------------------------------------
//* if we assign the array into empty arrray the type will be infered to any and we can push any type of element to this array
//  -------------------------------------------------------------------
//* array fof objects => is a complicated type which is better to be type specified
// {} <= type of element [] <= type of container to be array of object
const arrayOfObject: { name: string; age: number }[] = [
  { name: "Hala", age: 27 },
];
//  -------------------------------------------------------------------
//* array of arrays of string
//  ? start by the types from the deepest level for ex : string [] [] is [ [" "," "],[" "," "] ]

//  ===================================================================
// * ----------------------leteral types
// accept specific value types and specific values that prevent reassigning the variable to new value with accepted type and rejected value
let customValue: "hi" | "hello" | 27 = "hi";
//* use enums for cleaner way , and use UpperCase for custom types in enums
enum customVals {
  HI,
  HELLO,
}
let customValues: customVals = customVals.HI;
//  this will equal "RED"
/* 
customValue="bye"
! Type '"bye"' is not assignable to type '27 | "hi" | "hello"'
*/

//  ===================================================================
// * ----------------------functions
const add1 = (n1: any, n2:any ) => {
  return n1 + n2 ;
};
add1("hi", 1);
// this function will infer the the types of parameters and returned value to any

//  in this function the returned value type will be infer the type of the returned value based on the types of the parameters
const add2 = (n1: number, n2: string) => {
  return n1 + n2;
};

//  in this function the returned value is specified specially if the logic was heavy with multi steps
const add3 = (n1: number, n2: number): string => {
  let container = "";
  let result = container + n1 + n2;
  return result;
};

// if we don't return any value from the function the returned value type will be => void ; which means ( simply nothing ) and we can specify the type of return to be void

//  ===================================================================
// * ----------------------types & interfaces
// interface is a blue print for a type model that can be used as type for variables
// interfaces are usually used for object types
interface Person {
  name: string;
  age: number;
}
const obj2: Person = { name: "", age: 1 };
//  -------------------------------------------------------------------
//  types are used for different types other that objects usually ex: array of object
type PersonType = {
  name: string;
  age: number;
};
const obj3: PersonType = { name: "", age: 1 };
const arrOfObj: Person[] = [{ name: "", age: 1 }];

//  ===================================================================
// * ----------------------classes
/* 
Classes usually are blueprints that can be used an instances or inherited 
they consist of:
- constructors ( the building system of the class )
- properties ( the variables that hold the values used in class functionality )
? In TS we defing the types of the properties before the constructor
- methods ( the core logic of the class , that has access to the properties , accepts parameters and returns a value )
* Classes are usually defined by class then Uppercase for the fisrt letter of the name then curly brackets hold the internal data ex: class Person { }
* We can take an instace - that uses the exact functionality - by  declaring a variable that holds a "new" instance of the class ex : const person1 = new Person()
* We can inheret a class using "extends"
* We can access the methods and properties internally using this keyword
* We can access a method in the instance using the object dot notation ex : person1.methodName 
*/
// Here we declare a class
class MyClass {
  //  Here we define the names and types of the properties 
  // propertyThree: string[] = [];
 private  propertyThree: string[] = [];
  /* We give propertyThree its value because we always want it to have it when building the class and there is no need to pass dynamically through the constructor this will allow to acces  the property directly from the class an do functionality directly without the need of a method
  Since propertyThree is explicitly initialized with [] (which is an empty array of strings), TypeScript infers its type as string[] automatically.
  ! But this causes in consistency in code 
  * to solve this problem in TS we specify the property as "private"
  * OR Initialize via the constructor for more flexibilit if the initial default value may change
  */
//  -------------------------------------------------------------------
  // *Read only : To view the property without allowing mutation and can be viewed externally unless combined with "private"
readonly data= "this is a readonly data that doesn't have to be changed"
  // Here we initiate the constructor and optionally we can initiate the properties 
  // First way is to call the property only as defined before , and will infer to type any even if we specified a type here because its not explicitly declared, and by default it sets public even if we don't write it
 propertyOne: string
  // Second way is to define the property in the instructor with its type , this will remove the need of define before or in the insntructor , while using this way it is essential to use public of private keywords
  constructor( propertyOne: string, public propertyTwo: number) {
    this.propertyOne = propertyOne;

  }

  // Here we start writing methods
  method1() {
    console.log(
      "This is a method to return propertyOne and propertyTwo conctenated"
    );
    // propertyOne is called from the outer scope of the constructor
    // propertyTwo is called from the constructor itself without the need to define it in the inner scope of the constrcutor
    return `${this.propertyOne} ${this.propertyTwo}`;
  }
}


//  -------------------------------------------------------------------
// Creating instances
const instance1 = new MyClass('count',2)
/* 
constructor MyClass(propertyOne: any, propertyTwo: number): MyClass
Here we can see the differnce between the definition of propertyOne and propertyTwo
one is infered to type "any" while two is explicited to type "number"
*/
//  -------------------------------------------------------------------
// acccesing methods
instance1.method1()
//  -------------------------------------------------------------------
// acccesing readonly public property
console.log(instance1.data)

//  ===================================================================
// * ----------------------running a TS program in development 
/* 
 A TS program cannot be run on understood on browser , so it needs to be transpiled to Javascript*/
 /* When we eant to run a TS program in TS in develpment using node
- initialize package.json : npm init-y 
- Install typescript module
- Install ts-node
- initialize TA config json file npx tsc --init
- a script in package.lock to run the ts file usinf ts-node
 */