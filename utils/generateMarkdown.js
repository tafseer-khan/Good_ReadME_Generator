// function to generate markdown for README

const generateMarkdown = (data) =>`# ${data.title}

## ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contribution](#contribution)
- [Testing](#testing)
- [Liscense](#liscense)
- [Contact](#contact)

## Installation
${data.install}

## Usage 
${data.usage}

## Screenshot
<img src="${data.screenshot}>

## Contribution
${data.guidelines}

## Testing 
${data.test}

## Liscense
${data.liscense}

## Contact
Please contact me through GitHub or Email!
\n
Github: [${data.username}](https://github.com/${data.username})
\n
Email: [${data.email}](mailto:${data.email})
`

module.exports = generateMarkdown;

