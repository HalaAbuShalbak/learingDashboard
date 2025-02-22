---

### TS Documentation Link

[TypeScript Documentation](https://www.typescriptlang.org/docs/)

---
---

### What is TS

TypeScript is a superset of JavaScript. Any feature in JavaScript is available in TypeScript.

It doesn't directly execute in the browser. Like JSX, it needs to be converted to JavaScript first. TypeScript has a compiler that can do this after type checking the code. The Babel compiler can convert TypeScript code to JavaScript as well.

TypeScript is not limited to browser-based apps. It can be used on the backend as well to write nodejs based apps.

---

## OVERVIEW

### Types In TS

#### Number

### Declaring type number with giving the specific type to the assigned value

```ts
let age: number = 24;
age = 25;
```

---

### Declaring type number without giving the specific type to the assigned value, here the variable will take the type of the assigned value

```ts
let num = 25;
```

<span style="background-color: red; color: white; padding: 5px; display: block;">num='25'</span>
<span style="background-color: red; color: white; padding: 5px; display: block;">Type 'string' is not assignable to type 'number'</span>

> This is called type inferring in TS, where TS checks the value of the variable and assigns the best matching type to it

---

> When to use Type inferring and when to assign a type?

### Declaring type number without giving the specific type and without assigning a value, here the variable will infer to type any

```ts
let any;
any = 5;
any = "this is another type without having any problems";
```

### When Declaring a variable without assigning a value or a type to it, TS will not infer a type, but it will take it as type: any. This will allow us to change the type whenever we reassign the variable

* type: any => means that the variable can take and use any type of data without utilizing TypeScript.
  We usually let TS infer the types of variables unless we want a specific type, such as:
  - functions
  - complex types of arrays, objects, arrays of objects
  - a particular value to have multiple types: type1 | type2

---

### Boolean, Undefined, Null

```ts
let T = true;
let F: boolean = false;
let U: undefined = undefined;
let N: null = null;
```

---

### String

```ts
let myName = "Hala";
let yourName: string = "Hala";
```

<span style="background-color: red; color: white; padding: 5px; display: block;">myName="hi".length</span>
<span style="background-color: red; color: white; padding: 5px; display: block;">Type 'number' is not assignable to type 'string'</span>

---

### Objects

The type is an object `{ keyName: type of value }`. If we want the key to be optional, we just add `?` after the property. As a result, there will not be a problem if we didn't add this property and its value to the object, but also, it will cause a problem if we added the property with a different value type than the specified one.

```ts
const obj: { name?: string; age: number | null } = { name: "Hala", age: 27 };
```

---

### Arrays

#### Specify the type of elements

```ts
const arr1: string[] = ["string1"];
```

---

#### For multi-type elements, use OR `|`, this is called union types

```ts
const arr2: (string | boolean)[] = ["string1", false];
```

---

#### If we assign the array into an empty array, the type will be inferred to any, and we can push any type of element to this array

---

#### Array of objects => is a complicated type which is better to be type specified

```ts
const arrayOfObject: { name: string; age: number }[] = [
  { name: "Hala", age: 27 },
];
```

---

#### Array of arrays of string

> Start by the types from the deepest level, for example: `string[][]` is `[ [" ", " "], [" ", " "] ]`

---

### Literal Types

Accept specific value types and specific values that prevent reassigning the variable to a new value with an accepted type but rejected value.

```ts
let customValue: "hi" | "hello" | 27 = "hi";
```

#### Use enums for a cleaner way, and use UpperCase for custom types in enums

```ts
enum customVals {
  HI,
  HELLO,
}
let customValues: customVals = customVals.HI;
```

This will equal `"RED"`

<span style="background-color: red; color: white; padding: 5px; display: block;">customValue="bye"</span>
<span style="background-color: red; color: white; padding: 5px; display: block;">Type '"bye"' is not assignable to type '27 | "hi" | "hello"'</span>

---

### Functions

```ts
const add1 = (n1: any, n2: any) => {
  return n1 + n2;
};
add1("hi", 1);
```

This function will infer the types of parameters and returned value to any.

```ts
const add2 = (n1: number, n2: string) => {
  return n1 + n2;
};
```

In this function, the returned value type will be inferred based on the types of the parameters.

```ts
const add3 = (n1: number, n2: number): string => {
  let container = "";
  let result = container + n1 + n2;
  return result;
};
```

If we don't return any value from the function, the returned value type will be `void`, which means (simply nothing), and we can specify the type of return to be void.

---

### Running a TS Program in Development

A TS program cannot be run or understood on the browser, so it needs to be transpiled to JavaScript.

### When we want to run a TS program in development using Node:

1. Initialize `package.json`:
   ```sh
   npm init -y
   ```
2. Install TypeScript module:
   ```sh
   npm install -g typescript
   ```
3. Install `ts-node`:
   ```sh
   npm install -g ts-node
   ```
4. Initialize TypeScript config file:
   ```sh
   npx tsc --init
   ```
5. Add a script in `package.json` to run the TS file using `ts-node`.

---

