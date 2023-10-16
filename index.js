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
        message: "Full name (for license): ",
        name: "fullName"
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
    },
    {
        type: "list",
        message: "License that you will be using: ",
        name: "license",
        choices: ["none", "MIT License", "GNU GPLv3", "Apache License 2.0", "ISC License"]
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            switch(answers.license) {
                case "none" :
                    return ""
                case "MIT License":
                    return ""
            }
        })
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
