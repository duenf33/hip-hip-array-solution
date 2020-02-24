// Introduction

// This assignment will give you some practice with creating arrays and using their methods. It is NOT a function-based challenge; just global scope loops and array methods for you!


// Challenge 0
//
// Write a Challenge Banner printing function THAT'S A LITTLE DIFFERENT THAN BEFORE. This one will print out not only "Challenge n", where n is the number passed into it, but will also print n "#" characters to the left and n "#" to the right of the "Challenge n" text. You should also include a space between the "#" characters and the text.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
function challengeBanner(n) {
  let count = 1;
  let poundSymbols = '';

  while (count <= n) {
    poundSymbols += '#';

    count++;
  }
  
  console.log(`${poundSymbols} Challenge ${n} ${poundSymbols}`);

  // Alternative .repeat solution--no loop necessary!
  // console.log(`${'#'.repeat(n)} Challenge ${n} ${'#'.repeat(n)}`);
}

challengeBanner(1);
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];


for (let i = grades.length - 1; i >= 0; i--) {
  console.log(grades[i]);
}
// Challenge 3
// Console.log out only the even numbers in the following array.
// You should see 2, 4, 102, and 3000 printed out on individual lines.
//
challengeBanner(3);
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++) {
  const current = positiveNumbers[i];
  if (current % 2 === 0) {
    console.log(current);
  }
}

// Challenge 4
// Remove two values from the beginning and one value from the end of the following array, and then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

challengeBanner(4);

symmetricalCapitals.shift();
symmetricalCapitals.shift();
symmetricalCapitals.pop();

for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals[i]);
}


// Challenge 5
// Using array methods, add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
challengeBanner(5)
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers.unshift('These are the fibonacci numbers:');
fibonacciNumbers.push(21);
fibonacciNumbers.push(34);


for (let i = 0; i < fibonacciNumbers.length; i++) {
  console.log(fibonacciNumbers[i]);
}

// Challenge 6
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
challengeBanner(6);

const mammals = [
  'dolphin',
  'dog',
  'cat',
  'human',
  'chinchilla',
];


for (let i = 0; i < mammals.length; i++) {
  console.log(mammals[i]);
}

// Challenge 7
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

challengeBanner(7);

for (let i = 3; i <= 10; i++) {
  console.log(students[i]);
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using .push and/or .unshift, and then console.log out each value individually.
challengeBanner(8);

const reptiles = [];
reptiles.push('iguana');
reptiles.push('lizard');
reptiles.unshift('komodo dragon');
reptiles.push('gecko');
reptiles.unshift('python');


for (let i = 0; i < reptiles.length; i++) {
  console.log(reptiles[i]);
}
// Challenge 9
// Loop through the `students` array from Challenge 1, making a COPY of the array that only includes indices 3-10 (INCLUSIVE).  Then log out each value of that copy individually.
challengeBanner(9);
const someStudents = [];

for (let i = 3; i <= 10; i++) {
  someStudents.push(students[i]);
}

for (let i = 0; i < someStudents.length; i++) {
  console.log(someStudents[i]);
}
// Challenge 10
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of that copy individually. THEN log out each value of the original array. You will notice that they are the same; .slice does NOT modify the original array.
challengeBanner(10);

const slicedStudents = students.slice(3, 11);


for (let i = 0; i < slicedStudents.length; i++) {
  console.log(slicedStudents[i]);
}


for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
// Challenge 11
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. You will notice that .splice HAS changed the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
challengeBanner(11);

dinosaurs.splice(4, 3);


for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}
// Challenge 12
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
challengeBanner(12);
const dinoStr = dinosaurs.join('*');
console.log(dinoStr);

// or, as one line:
// console.log(dinosaurs.join('*'));



// Challenge 13
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
challengeBanner(13);

dinosaurs.reverse();
console.log(dinosaurs);
for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}

// Challenge 14
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. .concat does NOT mutate the original arrays.
challengeBanner(14);
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const colors = primaries.concat(secondaries);

console.log(primaries);
console.log(secondaries);
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
