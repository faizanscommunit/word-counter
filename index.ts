#! /usr/bin/env node
import inquirer from 'inquirer'
let quitApp: boolean = false
async function startWordCount(){
    const charCounter = (text:string) => text.replace(/\s/g, "").length
    const wordCounter = (text:string) => text.replace(/\s/g, ",").split(',').length
    while (quitApp == false){
        let text = await inquirer.prompt({
            type: 'input',
            name: 'paragraph',
            message: '(TYPE "QUIT" TO EXIT) OR Please enter your paragraph here: '
        })
        if (text.paragraph === "QUIT"){
            quitApp = true
        }else{
            console.log(`You paragraph consists of  ${charCounter(text.paragraph)} Characters`);
            console.log(`You paragraph consists of  ${wordCounter(text.paragraph)} Words`);
        }
        return charCounter(text.paragraph)

    }

}
startWordCount()
