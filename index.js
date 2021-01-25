const fs = require('fs')
const inquirer = require('inquirer')
const util = require('util')

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your title for your Project?",
        name:'title'
    },
    {
      type: 'input',
      message: "What are your instructions for installation?",
      name:'install'  
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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        else{
            console.log("README.md has been generated")
        }
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
