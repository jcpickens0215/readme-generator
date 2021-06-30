// Lib imports
const file = require("fs");
const inquirer = require("inquirer");
const moment = require("moment");

// inquirer stuff here
//  Ask q's
//  convert responses into markdown
//  save aaaat

// Gen filename
const todaysDate = moment().format("YYYY-MM-DD")

const fileName = /* project name + */ todaysDate + ".md";

// Save that file!