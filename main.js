#!/usr/bin/env node 
// Importing Inquirer module after installing it for asking questions from user
import inquirer from 'inquirer';
// Declare a constant 'answers' to store the sentence given by User
const answers = await inquirer.prompt({
    name: 'Sentence',
    type: "input",
    message: 'Enter your Sentence: '
});
// Now trim and split the sentence 
// trim will remove whitespaces and split will split the sentence into words
const words = answers.Sentence.trim().split(' ');
// Now Printing the answer
console.log(`Total Words: ${words.length}`);
