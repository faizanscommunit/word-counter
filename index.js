#! /usr/bin/env node
import inquirer from 'inquirer';
let quitApp = false;
async function startWordCount() {
    const charCounter = (text) => text.replace(/\s/g, "").length;
    const wordCounter = (text) => text.replace(/\s/g, ",").split(',').length;
    while (quitApp == false) {
        let text = await inquirer.prompt({
            type: 'input',
            name: 'paragraph',
            message: '(TYPE "QUIT" TO EXIT) OR Please enter your paragraph here: '
        });
        if (text.paragraph === "QUIT") {
            quitApp = true;
        }
        else {
            console.log(`You paragraph consists of  ${charCounter(text.paragraph)} Characters`);
            console.log(`You paragraph consists of  ${wordCounter(text.paragraph)} Words`);
        }
        return charCounter(text.paragraph);
    }
}
startWordCount();
// // Importing Inquirer module after installing it for asking questions from user
// import inquirer from 'inquirer'
// // Declare a constant 'answers' to store the sentence given by User
// const answers: {
//     Sentence: string
// } = await inquirer.prompt({
//     name: 'Sentence',
//     type: "input",
//     message: 'Enter your Sentence: '
// })
// // Now trim and split the sentence 
// // trim will remove whitespaces and split will split the sentence into words
// const words = answers.Sentence.trim().split(' ')
// // Now Printing the answer
// console.log(`Total Words: ${words.length}`)
