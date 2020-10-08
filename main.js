// Introduction

// This assignment will give you some practice with creating arrays and using their methods. It is NOT a function-based challenge; just global scope loops and array methods for you!

// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Nick',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Nick',
];


for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
}
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];


for (let i = grades.length - 1; i >= 0; i--) {
  // console.log(grades[i]);
}
// Challenge 3
// Console.log out only the even numbers in the following array.
// You should see 2, 4, 102, and 3000 printed out on individual lines.
//
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++) {
  const current = positiveNumbers[i];
  if (current % 2 === 0) {
    // console.log(current);
  }
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];


for (let i = 0; i < mixedSignNumbers.length; i++) {
  if (mixedSignNumbers[i] % 2 === 0 ) {
    // console.log(mixedSignNumbers[i]);
  }
}


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['O', 'T', 'U', 'V', 'W'];


for (let i = 0; i < symmetricalCapitals.length; i++) {
  // console.log(symmetricalCapitals[i]);
}


// Challenge 6
// Using array methods, add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

// fibonacciNumbers.push(21)
// fibonacciNumbers.push(34)
// or, one one line:
fibonacciNumbers.push(21, 34)
fibonacciNumbers.unshift('These are fibonacci numbers: ')


for (let i = 0; i < fibonacciNumbers.length; i++) {
  // console.log(fibonacciNumbers[i]);
}

// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const mammals = [
  'dog',
  'chinchilla',
  'dolphin',
  'human',
  'cat',
];



for (let i = 0; i < mammals.length; i++) {
  // console.log(mammals[i]);
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.


const reptiles = [];
reptiles.push('iguana');
reptiles.push('lizard');
reptiles.unshift('komodo dragon');
reptiles.push('gecko');
reptiles.unshift('python');


for (let i = 0; i < reptiles.length; i++) {
  // console.log(reptiles[i]);
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

for (let i = 3; i <= 10; i++) {
  // console.log(students[i]);
}

// Challenge 10
// WITHOUT using slice, loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually.

const someStudents = [];

for (let i = 3; i < 11; i++) {
  someStudents.push(students[i]);
}

for (let i = 0; i < someStudents.length; i++) {
  // console.log(someStudents[i]);
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of that copy individually. THEN log out each value of the original array.

const slicedStudents = students.slice(3, 11);


for (let i = 0; i < slicedStudents.length; i++) {
  // console.log(slicedStudents[i]);
}


for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
}

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. You will notice that .splice HAS changed the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']


dinosaurs.splice(4, 3);

for (let i = 0; i < dinosaurs.length; i++) {
  // console.log(dinosaurs[i]);
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
const dinoStr = dinosaurs.join('*');
// console.log(dinoStr);
// or, as one line:
// console.log(dinosaurs.join('*'));



// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

dinosaurs.reverse();
// console.log(dinosaurs);


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.

const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const colors = primaries.concat(secondaries);
for (let i = 0; i < colors.length; i++) {
  // console.log(colors[i]);
}

for (let i = 0; i < primaries.length; i++) {
  // console.log(primaries[i]);
}

for (let i = 0; i < secondaries.length; i++) {
  // console.log(secondaries[i]);
}
