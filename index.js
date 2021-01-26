const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

const writeToFile = util.promisify(fs.writeFile);


// array of questions for user
const promptUser = () =>
    inquirer.prompt([{
        type: 'input',
        message: "What is your title for your Project?",
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description'
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
        
    },
    {
        type: 'input',
        message: "Please paste path to your project's screenshot.",
        name: 'screenshot'
    }])

// function to initialize program
promptUser()
    .then((answers) => writeToFile('exampleREADME.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
