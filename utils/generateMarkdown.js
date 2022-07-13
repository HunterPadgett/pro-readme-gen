// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
     
    case 'GPL':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      
    case 'BSD':
      return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';

    default: 
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
     
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';

    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `## License
      
      This project is licensed under MIT.`;
      
    case 'Apache':
      return `## License
      
      This project is licensed under Apache.`;
    case 'GPL':
      return `## License
      
      This project is licensed under GPL.`;
    case 'BSD':
      return `## License
      
      This project is licensed under BSD.`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
    ${renderLicenseBadge}

  ## Description
  
  ##Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how to contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ## Usage

  ## License

  ## How to Contribute

  ## Tests

  ## Questions
`;
}



module.exports = generateMarkdown;

console.log