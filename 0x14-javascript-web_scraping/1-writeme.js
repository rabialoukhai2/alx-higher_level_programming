#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: ./script.js <file-path> <content-to-write>');
  process.exit(1); // Exit with a non-zero status code to indicate an error
}

const filePath = process.argv[2];
const contentToWrite = process.argv[3];

fs.writeFile(filePath, contentToWrite, 'utf-8', (error) => {
  if (error) {
    console.error(`Error writing to ${filePath}:`, error.message);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  } else {
    console.log(`Content has been written to ${filePath} successfully!`);
  }
});
