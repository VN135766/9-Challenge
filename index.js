// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
console.log("hello world")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter title to continue');
                return false;
            }
        }
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log (userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();
