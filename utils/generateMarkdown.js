// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "GNU":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "IBM":
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";
    case "Apache License 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "Perl":
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]";
    case "Eclipse":
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case "MIT":
        return "(https://opensource.org/licenses/MIT)";
    case "GNU":
        return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "IBM":
        return "(https://opensource.org/licenses/IPL-1.0)";
    case "Apache License 2.0":
        return "(https://opensource.org/licenses/Apache-2.0)";
    case "Perl":
        return "(https://opensource.org/licenses/Artistic-2.0)";
    case "Eclipse":
        return "(https://opensource.org/licenses/EPL-1.0)";
    }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseString = renderLicenseSection(data.License);
  let readMeString = 
  `# ${data.projectTitle}
${licenseString}

## Description
${data.description} \n


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installInstructs} \n

## Usage
${data.usageInformation} \n

## License
This application is using the ${data.License} License.\n

## Contributing
${data.contributed} \n

## Tests
${data.testInstructions} \n

## Questions
* The link to the github repository can be found here: [${data.gitHubUsername}](https://github.com/${data.gitHubUsername}/)
* For any further questions you can reach out to: ${data.emailAddress}
`;
 
  return readMeString;
}

module.exports = generateMarkdown;
