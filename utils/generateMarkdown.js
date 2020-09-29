// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

${BadgeCreate(data.license)}

## Table of Contents:

  * [Descriptions](#Description)

  * [Github](#Github)

  * [Installation](#Installation) 

  * [Usage](#Usage)

  * [Contributors](#Contributors)

  * [Tests](#Tests)

  * [License](#License)

  
# Description
${data.description}


# Github
[https://www.github.com/${data.github}](https://www.github.com/${data.github})

# Installation
${data.installation}

# Usage
${data.usage}

# Contributors
${data.contributors}

# Tests
${data.tests}

# License
${BadgeCreate(data.license)}


# Questions
Please email ${data.email} for any questions you may have.
`;
}

function BadgeCreate(license){
if (license!=="None"){
  return (
    `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  )
} else {
  return (
    `There is no license at this moment`
  )
}

};



module.exports = generateMarkdown;
