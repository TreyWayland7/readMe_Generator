// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Enter the project description.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the Installation Instructions.",
        name: "installInstructs"
    },
    {
        type: "input",
        message: "Enter the Usage Information.",
        name: "usageInformation"
    },
    {
        type: "input",
        message: "Enter who Contributed to this project.",
        name: "contributed"
    },
    {
        type: "input",
        message: "Enter the Test Instructions.",
        name: "testInstructions"
    },
    {
        type: "list",
        message: "Which License?",
        name: "License",
        choices: ["MIT", "GNU", "IBM", "Apache License 2.0", "Perl", "Eclipse"],
    },
    {
        type: "input",
        message: "Enter your github Username.",
        name: "gitHubUsername"
    },
    {
        type: "input",
        message: "Enter your Email Address.",
        name: "emailAddress"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
        )

}

// TODO: Create a function to initialize app
function init() {
    askUserQuestions();
}

// Function call to initialize app
init();

function askUserQuestions(){
    inquirer
  .prompt(questions)
  .then((response) =>
    generateReadMe(response)
  );
}


function generateReadMe(response){
    let genMarkdownText = generateMarkdown(response);

    writeToFile("README.md", genMarkdownText) ;
}
