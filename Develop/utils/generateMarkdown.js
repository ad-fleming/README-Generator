// function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = "";
  let licenseBadge = "";
  if(data.License === "MIT"){
    licenseText = "This application is licensed under the MIT License . . . "
    licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }else if (data.License === "GNU GPL v3"){
    licenseText = "This application is licensed under the GNU GPL v3 License . . ."
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }

  return `
  # ${data.Title} 
  
  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## License
  ${data.License}
  ${licenseText}
  ${licenseBadge}

  ## Questions
  If you have any questions, feel free to reach out to me at the following:
  Email: ${data.Email}
  GitHub: ${data.GitHub}
`;
}

module.exports = generateMarkdown;
