// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { renderLicenseAssets, generateMarkdown } = require('./utils/generateMarkdown')
const fs = require('fs')

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
        choices: ["none", "mit", "gpl-3.0", "apache-2.0", "isc"]
    }
];

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const qAnswers = answers
            return { license: renderLicenseAssets(qAnswers), answers: qAnswers }
        })
        .then(({ license, answers }) => {
            return generateMarkdown(license, answers)
        })
        .then((readmeDoc) => {
            fs.writeFile('README.md', readmeDoc, (err) => 
                err ? console.error(err) : console.log('README successfully created!')
            )
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