// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const mark = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Name of Project/Repository: ",
        name: "title",
    },
    {
        type: "input",
        message: "Brief description of project: ",
        name: "description",
    }, 
    {
        type: "input",
        message: "Installation instructions: ",
        name: "installation",
    }, 
    {
        type: "input",
        message: "Usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests",
    },
    {
        type: "input",
        message: "GitHub username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Email address: ",
        name: "email"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => console.log("Successful Input!"))
        .catch((error) => {
            if (error.isTtyError) {
                return "Prompt could not be rendered in the current environment."
            } else {
                console.log("Something else went wrong: ", error)
            }
        })
}

// Function call to initialize app
init();

// name (required)

// sections (checkbox then individual input)

// license (checkbox then functions)

// 