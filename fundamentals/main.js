//  Core Programming Concepts
/* 
🎯 Exercises:
1- Write a function to check if a number is even or odd.
2- Create a loop that prints numbers 1-10.
3- Write a function to return the largest number in an array.
*/

const checkEvenOrOdd = (num) => {
  return !(num % 2) ? "even" : "odd";
};

// console.log(checkEvenOrOdd(4))

for (let index = 1; index <= 10; index++) {
  //   console.log(index)
}

const largestNumber = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element >= largest) {
      largest = element;
    }
  }
  return largest;
};

// other approach
// const largestNumber = (arr) => Math.max(...arr);

console.log(largestNumber([1, 5, 7, -8]));

// Problem Solving & Data Structures
/* 
🎯 Exercises:
1️⃣ Reverse a String (Without using .reverse())
2️⃣ Find the Maximum & Minimum in an Array
3️⃣ Count How Many Times a Letter Appears in a Word
*/

const reverseWord = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    reversed += element;
  }
  return reversed;
};
console.log(reverseWord("Hello"));

const maxAndMin = (arr) => {
  const arrayMax = Math.max(...arr);
  const arrayMin = Math.min(...arr);
  return [arrayMax, arrayMin];
};

console.log(maxAndMin([-1, 0, 5, 55, -10]));

const letterCount = (word) => {
  const counterMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    counterMap[letter] = (counterMap[letter] || 0) + 1;
}
return counterMap;
};
console.log(letterCount("hellooo"));


/* 

 Remove Duplicates from an Array

Example: [1, 2, 3, 3, 4, 5, 5] → [1, 2, 3, 4, 5]
2️⃣ Find the Most Frequent Element in an Array

Example: [1, 2, 3, 3, 3, 2, 2, 2, 2] → 2
3️⃣ Merge Two Objects (Without Overwriting)

Example:
javascript
Copy
Edit
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
Expected Output: { a: 1, b: [2, 3], c: 4 }
*/

const removeDuplicate =(arr)=> new Set(arr)
console.log(removeDuplicate([1, 2, 3, 3, 4, 5, 5]))

const mostFrequent = (arr)=>{
    const counterMap = {};
let highest =0
    for (let i = 0; i < arr.length; i++) {
      const letter = arr[i];
      counterMap[letter] = (counterMap[letter] || 0) + 1;
  }
  for (const [key, value] of Object.entries(counterMap)) {
    if (highest<value){
        highest=value
    }
    console.log(`${key}: ${value}`);
  }

}