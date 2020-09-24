// function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = "";
  let licenseBadge = "";
  let licenseLink = ""
  if(data.License === "MIT"){
    licenseText = 'This project is covered under the MIT license.'
    licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/ISC)";
    licenseLink = "https://choosealicense.com/licenses/mit/"
    // licenseText = ;
  }else if (data.License === "GNU GPL v3"){
    licenseText = 'This project is covered under the GNU GPL v3 license.'
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
  }else{
    licenseText = 'This project does not include a license and therefore cannot be shared, distributed, or modified.'
    licenseBadge = "![Unlicensed](https://img.shields.io/badge/License-None-grey-black)"
  };

  return `
  ${licenseBadge}

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
  ${licenseText}

  _You can learn more about this project's license <a href="${licenseLink}">here</a>_
  

  ## Questions
  If you have any questions, feel free to reach out to me at the following:
  * Email: ${data.Email}
  * GitHub: ${data.GitHub}
`;
}

module.exports = generateMarkdown;
