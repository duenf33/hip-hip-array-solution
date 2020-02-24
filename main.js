// Introduction

// This assignment will give you some practice with creating arrays and using their methods. It is NOT a function-based challenge; just global scope loops and array methods for you!



// Challenge 0
//
// Write a Challenge Banner printing function THAT'S A LITTLE DIFFERENT THAN BEFORE. This one will print out not only "Challenge n", where n is the number passed into it, but will also print n "#" characters to the left and n "#" to the right of the "Challenge n" text. You should also include a space between the "#" characters and the text.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
function displayBanner(n) {
  let poundSymbols = '';
  let count = 1;

  while (count <= n) {
    poundSymbols += '#';
    count++;
  }

  console.log(poundSymbols + ' Challenge ' + n + ' ' + poundSymbols);
  
  // Or, with interpolation:
  // console.log(`${poundSymbols} Challenge ${n} ${poundSymbols}`);
}


displayBanner(1);

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

displayBanner(2);

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

for (let i = grades.length - 1; i >= 0; i--) {
  console.log(grades[i]);
}

// Challenge 3
// Console.log out only the even numbers in the following array.
// You should see 2, 4, 102, and 3000 printed out on individual lines.
displayBanner(3);

const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}

// Challenge 4
// Remove two values from the beginning and one value from the end of the following array, and then console.log out each value individually.
displayBanner(4);
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

symmetricalCapitals.shift();
symmetricalCapitals.shift();
symmetricalCapitals.pop();

for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals[i]);
}

// Challenge 5
// Using array methods, add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
displayBanner(5);
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift('the fibonacci numbers are:');
fibonacciNumbers.push(21);
fibonacciNumbers.push(34);

for (let i = 0; i < fibonacciNumbers.length; i++) {
  console.log(fibonacciNumbers[i]);
}


// Challenge 6
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
displayBanner(6);
const flowers = [
  'rose',
  'lily',
  'poinsetta',
  'marigold',
  'daffodil'
];

for (let i = 0; i < flowers.length; i++) {
  console.log(flowers[i]);
}

// Challenge 7
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
displayBanner(7);
for (let i = 3; i <= 10; i++) {
  console.log(students[i]);
}

// Challenge 8
// Loop through the `students` array from Challenge 1, making a COPY of the array that only includes indices 3-10 (INCLUSIVE).  Then log out each value of that copy individually.
displayBanner(8);
const studentsSliceManually = [];

for (let i = 3; i <= 10; i++) {
  studentsSliceManually.push(students[i]);
}

for (let i = 0; i < studentsSliceManually.length; i++) {
  console.log(studentsSliceManually[i]);
}


// Challenge 9
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of that copy individually. THEN log out each value of the original array. You will notice that they are the same; .slice does NOT modify the original array.
displayBanner(9);
const studentsSlice = students.slice(3, 11);

for (let i = 0; i < studentsSlice.length; i++) {
  console.log(studentsSlice[i]);
}

// Challenge 10
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. You will notice that .splice HAS changed the original array.
displayBanner(10);
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs.splice(4, 3);

for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}

// Challenge 11
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
displayBanner(11);
const dinosaursStr = dinosaurs.join('*');
console.log(dinosaursStr);

// Challenge 12
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
displayBanner(12);
dinosaurs.reverse();

for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}

// Challenge 13
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. .concat does NOT mutate the original arrays.
displayBanner(13);
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const colors = primaries.concat(secondaries);

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
