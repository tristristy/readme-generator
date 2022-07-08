// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generateMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questionArr = [
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
                if (installInput) {
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
        },
        {
            type: 'input',
            name: 'information',
            message: 'How is this project supposed to be used? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to provide information on how to use project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How should people contribute to this project? (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to provide information on how to contribute to the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How do you test this project? (Required)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('You need to describe how to test this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        //email
        {
            type: 'input',
            name: 'email',
            message: 'Would you like to include your email? enter here:',
        },
        {
            type: 'checkbox',
            name: 'licensing',
            message: 'Choose a license for your project (Required)',
            choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
            validate: licensingInput => {
                if (licensingInput) {
                    return true;
                } else {
                    console.log('You must pick a license for the project!');
                    return false;
                }
            }
        }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err)
            throw err;
        console.log('Success! Information entered has been added to the readme!')
    });
    generateMarkdown(data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questionArr)
    .then(function(userInput){
        console.log(userInput);
        writeToFile('sampleReadme.md', generateMarkdown(userInput))
    });
}

// Function call to initialize app
init();

