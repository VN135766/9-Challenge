// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// console.log("hello world")

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
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description to continue');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: InstallInput => {
            if (InstallInput) {
                return true;
            } else {
                console.log('Please enter installations steps to continue');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        validate: useageInput => {
            if (useageInput) {
                return true;
            } else {
                console.log('Please enter how to use your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please provide how users can contribute');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can the user test this project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please explain how to test your project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email so a user can ask questions about your project',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter a GitHub username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub user name');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please enter license used for project',
        choices: ['MIT', 'CDDL', 'Apache', 'None']
    }]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('hello world');
    })
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        })
};

// Function call to initialize app
init();
