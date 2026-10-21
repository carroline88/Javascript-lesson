// EXERCISE 1: Guess the random number
function guessNumberGame() {
  // Generate a random integer between 1 and 10
  let targetNumber = Math.floor(Math.random() * 10) + 1;
  let guess = null;

  // while loop that keeps prompting until the guess is correct
  while (guess !== targetNumber) {
    let input = prompt("Guess a number between 1 and 10:");

    // If the user clicks Cancel
    if (input === null) {
      console.log("The game was canceled.");
      break;
    }

    guess = parseInt(input);

    if (guess < targetNumber) {
      alert("Too low! Try again.");
    } else if (guess > targetNumber) {
      alert("Too high! Try again.");
    } else if (guess === targetNumber) {
      alert("Correct guess! The number was: " + targetNumber);
      console.log("Correct guess in Exercise 1! The number was:", targetNumber);
    }
  }
}

// Run the game for Exercise 1
guessNumberGame();


// EXERCISE 2: Create an array of random numbers
function generateRandomArray(length) {
  let randomNumbers = [];

  // for loop to generate random numbers between 1 and 100
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNum);
  }

  return randomNumbers;
}

// Test for Exercise 2: Generate an array with 5 random numbers
let testArray = generateRandomArray(5);
console.log("Exercise 2 (Random array):", testArray);


// EXERCISE 3: Calculate the sum of even numbers in the array
function sumEvenNumbers(arr) {
  let sum = 0;

  // for loop to iterate through the array and sum even numbers only
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// Test for Exercise 3: Sum even numbers from a specific array
let numbersToSum = [2, 5, 8, 11, 14]; // Even numbers are 2 + 8 + 14 = 24
console.log("Exercise 3 (Sum of even numbers in [2, 5, 8, 11, 14]):", sumEvenNumbers(numbersToSum));