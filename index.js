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

    let licenseURL = getLicenseURL(response.License);

    let readMeString = 
    `# ${response.projectTitle}
${licenseURL}

## Description
${response.description} \n


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${response.installInstructs} \n

## Usage
${response.usageInformation} \n

## License
This application is using the ${response.License} License.\n

## Contributing
${response.contributed} \n

## Tests
${response.testInstructions} \n

## Questions
* The link to the github repository can be found here: [${response.gitHubUsername}](https://github.com/${response.gitHubUsername}/)
* For any further questions you can reach out to: ${response.emailAddress}
`;
    
    writeToFile("README.md", readMeString) ;
}

function getLicenseURL(license){
    switch (license){
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "GNU":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "IBM":
            return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        case "Apache License 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "Perl":
            return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        case "Eclipse":
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    }
}
