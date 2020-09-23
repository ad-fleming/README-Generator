// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
  # Description
  ${data.Description}

  # Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [License](#License)
  [Questions](#Questions)
  
  # Installation
  ${data.Installation}
  
  # Usage
  ${data.Usage}

  # Contributing
  ${data.Contributing}

  # Tests
  ${data.Tests}

  # License
  ${data.License}

  #Questions
  If you have any questions, feel free to reach out to me at the following:
  Email:${data.Email}
  GitHub:${data.GitHub}
`;
}

module.exports = generateMarkdown;
