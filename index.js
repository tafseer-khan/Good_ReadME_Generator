const fs = require('fs')
const inquirer = require('inquirer')
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(writeToFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your title for your Project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "What are your instructions for installation?",
        name: 'install'
    },
    {
        type: 'input',
        messsage: 'What is your usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are your contribution guidlines?',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'What are your instructions for testing?',
        name: 'test'
    },
    {
        type: 'list',
        message: "Which liscense would you like to use?",
        choices: ['BSD','MIT','GPL'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log("README.md has been generated")
        }
    });
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const all = generateMarkdown(answers);
    console.log(answers);

    // Write markdown to file
    await writeToFile('README.md', all);

}

// function call to initialize program
init();
