// Lib imports
const file = require("fs");
const inquirer = require("inquirer");
const moment = require("moment");
const genMD = require("./utils/generateMarkdown");

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
            name: 'credits',
            message: `Who is responsible for creation/development of this project?
CREDITS: `,
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
    ] ).then((response) => {

        const date = moment();
        const year = date.format("YYYY");
        const todaysDate = date.format("YYYY-MM-DD");

        console.log(response.license);
        //  convert responses into markdown
        const buildREADMEString = genMD.generateMarkdown(response, year);

        // Gen filename
        const fileName = `${response.projName}_${todaysDate}.md`;

        // Save that file!
        file.writeFile( fileName, buildREADMEString, (err) => {
            err ? console.error(err) : console.log('Success!') // Error function
        }); 
    }
);