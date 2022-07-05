// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
const promptReadme = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your product? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions for your project.',
            validate: installInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter the use cases for your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter use cases for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please enter your license for your project.',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter your license for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'What badges would you like to add?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
