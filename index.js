// Lib imports
const file = require("fs");
const inquirer = require("inquirer");
const moment = require("moment");
const genMD = require("./utils/generateMarkdown.js");

// inquirer stuff here
//  Ask q's

// Description
// Installation
// Usage
// Testing
// Contribution
// Credits
// License

inquirer.prompt(

    [
        {
            type: 'input',
            message: `Please provide a short description of your project
            DESCRIPTION: `,
            name: 'description',
        },
        {
            type: 'input',
            message: `What steps need to be taken to install this project?
            INSTALLATION: `,
            name: 'installation',
        },
        {
            type: 'input',
            message: `How will the user actually use this project?
            USAGE: `,
            name: 'usage',
        },
        {
            type: 'input',
            message: `How can the user test this project?
            TESTING: `,
            name: 'testing',
        },
        {
            type: 'input',
            message: `How can the user make future contributions to this project?
            CONTRIBUTION: `,
            name: 'contribution',
        },
        {
            type: 'input',
            message: `Who is responsible for creation/development of this project?
            CREDITS: `,
            name: 'credits',
        },
        {
            type: 'input', // Make selector
            message: `How is this project licensed?
            CHOOSE A LICENSE: `,
            name: 'license',
        },
    ] ).then((response) => {

        //  convert responses into markdown
        const buildREADMEString = genMD.generateMarkdown(response);

        // Gen filename
        const todaysDate = moment().format("YYYY-MM-DD")
        const fileName = /* project name + "_" +*/ todaysDate + ".md";

        // Save that file!
        file.writeFile( fileName, buildREADMEString, (err) => {
            err ? console.error(err) : console.log('Success!') // Error function
        }); 
    }
);