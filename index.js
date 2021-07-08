// Lib imports
const file = require("fs");
const inquirer = require("inquirer");
const moment = require("moment");
const genMD = require("./utils/generateMarkdown");

const link = 'https://drive.google.com/file/d/1Q2ER4YfVRvHcJAGRfT61IwxsfwKxgj2l/view?usp=sharing';

// Get section data from the user
inquirer.prompt(
    [
        {
            type: 'input',
            name: 'projName',
            message: `What is the name of this project?
PROJECT NAME: `,
        },
        {
            type: 'input',
            name: 'description',
            message: `Please provide a short description of your project
DESCRIPTION: `,
        },
        {
            type: 'input',
            name: 'installation',
            message: `What steps need to be taken to install this project?
INSTALLATION: `,
        },
        {
            type: 'input',
            name: 'usage',
            message: `How will the user actually use this project?
USAGE: `,
        },
        {
            type: 'input',
            name: 'testing',
            message: `How can the user test this project?
TESTING: `,
        },
        {
            type: 'input',
            name: 'contribution',
            message: `How can the user make future contributions to this project?
CONTRIBUTION: `,
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: `What is your GitHub username? This will be used in a 'contact me' section
USERNAME: `,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your developer e-mail address? This will also be used in a 'contact me' section
E-MAIL: `,
        },
        {
            type: 'list',
            name: 'license',
            message: `How is this project licensed?
CHOOSE A LICENSE: `,
            choices: [ 'Public Domain (Unlicense)',
                       'Boost Software License 1.0',
                       'MIT License',
                       'Apache License 2.0',
                       'Mozilla Public License 2.0',
                       'GNU General Public License v3' ],
            default: 2,
        },
        {
            type: 'input',
            name: 'yourName',
            message: `What is your first and last name? This will be used in the license copyright section if applicable
YOUR NAME: `,
        },
    ] ).then((response) => { // Operate on the data received

        // Get the current year (for copyright)
        const year = moment().format("YYYY");

        //  convert responses into markdown
        const buildREADMEString = genMD.generateMarkdown(response, year);

        // Gen filename
        const fileName = `${response.projName}_README.md`;

        // Save that file!
        file.writeFile( fileName, buildREADMEString, (err) => {
            err ? console.error(err) : console.log('Success!') // Error function
        }); 
    }
);