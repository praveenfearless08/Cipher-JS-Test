// Question: Write a JavaScript program that uses a for loop to print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Question: Write a JavaScript program that uses a while loop to calculate the sum of numbers from 1 to 10.

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

//Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const inputString = "Hello, World!";
const result = countVowels(inputString);

console.log("The number of vowels in the string is:", result);

//Question: Write a JavaScript program that uses a while loop to reverse a given number.

function reverseNumber(number) {
  let reversedNumber = 0;

  while (number !== 0) {
    const digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversedNumber;
}

const inputNumber = 12345;
const result = reverseNumber(inputNumber);

console.log("The reversed number is:", result);

//Question: Write a JavaScript program that checks if a given string is a palindrome.

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const inputString = "racecar";
const result = isPalindrome(inputString);

console.log("Is the string a palindrome?", result);

//Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

//Question: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Hello World!</h1></body></html>");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

//Question: Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.

const http = require("http");
const myDateTime = require("./myDateTime");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Current date and time: ${myDateTime.getCurrentDateTime()}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

//Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error reading file");
    } else {
      res.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

//Question: Create a JavaScript function getUserData that simulates fetching user data from a server asynchronously. The function takes a callback function callback as an argument. Inside the getUserData function, after a delay of 2 seconds, invoke the callback function with a mock user object containing name, email, and age properties.

function getUserData(callback) {
  setTimeout(() => {
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 25,
    };
    callback(userData);
  }, 2000);
}

// Example usage:
getUserData((userData) => {
  console.log("User Data:");
  console.log(userData);
});

//Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber >= 5) {
      resolve(randomNumber);
    } else {
      reject(new Error("Generated number is less than 5"));
    }
  });
}

// Example usage:
getRandomNumber()
  .then((randomNumber) => {
    console.log("Generated random number:", randomNumber);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.

function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fileExists = true;

      if (fileExists) {
        resolve();
      } else {
        reject(new Error("File does not exist"));
      }
    }, 1000);
  });
}

checkFileExists("/path/to/file.txt")
  .then(() => {
    console.log("File exists");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
