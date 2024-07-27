// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

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
        choices: ["MIT", "GPL", "LGPL", "Apache License 2.0", "MPL 2.0", "BSD License"],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    askUserQuestion();
}

// Function call to initialize app
init();


function askUserQuestion(){
    inquirer
  .prompt(questions)
  .then((response) =>
    generateReadMe(response)
    // console.log(response)
 
  );
}


function generateReadMe(response){
    
    let readMeString = 
    `# ${response.projectTitle}
${response.description} \n
        
Installation
${response.installInstructs} \n

Usage
${response.usageInformation} \n

Credits
${response.contributed} \n

Tests
${response.testInstructions} \n

License
${response.License} \n
        
Git Hub Username
${response.gitHubUsername} \n
        
Email Address
${response.emailAddress} \n


`;
    
    fs.writeFile('temp_readme.txt', readMeString, (err) =>
        err ? console.error(err) : console.log('Success!')
        )
}
