// Holds HREFs to all the available licenses
const license_hrefs = {
  unlicense: 'https://unlicense.org/',
  boost: 'https://www.boost.org/users/license.html',
  mit: 'https://mit-license.org/',
  apache_2: 'https://www.apache.org/licenses/LICENSE-2.0.html',
  mpl2: 'https://www.mozilla.org/en-US/MPL/2.0/',
  gpl3: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
};

// Returns the HREF to a license based off it's string return name
function getLicenseHREF(license) {

  switch(license) {

    case 'Public Domain (Unlicense)':
      return license_hrefs.unlicense;

    case 'Boost Software License 1.0':
      return license_hrefs.boost;

    case 'MIT License':
      return license_hrefs.mit;

    case 'Apache License 2.0':
      return license_hrefs.apache_2;

    case 'Mozilla Public License 2.0':
      return license_hrefs.mpl2;

    case 'GNU General Public License v3':
      return license_hrefs.gpl3;

    default:
      return '#';
  }
}

// This function returns an image link determined by the selected license
function renderLicenseBadge(license) {

  switch(license) {

    case 'Public Domain (Unlicense)':
      return '!' + buildLink(false, 'Unlicense', 'https://img.shields.io/badge/License-Unlicense-brightgreen');

    case 'Boost Software License 1.0':
      return '!' + buildLink(false, 'Boost Software License 1.0', 'https://img.shields.io/badge/License-Boost%201.0-brightgreen');

    case 'MIT License':
      return '!' + buildLink(false, 'MIT License', 'https://img.shields.io/badge/License-MIT-brightgreen');

    case 'Apache License 2.0':
      return '!' + buildLink(false, 'Apache License 2.0', 'https://img.shields.io/badge/License-Apache%202.0-brightgreen');

    case 'Mozilla Public License 2.0':
      return '!' + buildLink(false, 'Mozilla Public License 2.0', 'https://img.shields.io/badge/License-MPL%202.0-brightgreen');

    case 'GNU General Public License v3':
      return '!' + buildLink(false, 'GNU General Public License v3', 'https://img.shields.io/badge/License-gpl%20v3-brightgreen');

    // If there is no license, return an empty string
    default:
      return '';
  }
}

// Prints out the full license section, complete with copyright notice if not
// in the Public Domain
function renderLicenseSection(license, year, yourName) {

  // If there is no license, return an empty string
  if (!license) return '';

  return `## License\n
Licensed under the ${buildLink(false, license, getLicenseHREF(license))}
${license == 'Public Domain (Unlicense)' ? '' : ', copyright ' + year + ' by ' + yourName}\n____\n
Badges provided by ${buildLink(false, 'Shields.io', 'https://shields.io/')}`;
}

// Creates links! TOC and regular hyperlinks.
// @params 
//    isLI - Is this link a list item?
//    alt_display - What is the alt text or display text?
//    href - Where does this link pointg to?
function buildLink(isLI, alt_display, href) {

  // Create a blank string
  let returnString = '';

  // If the link is a list item, make it one
  if (isLI) returnString += '- ';

  // Set the internal information
  returnString += `[${alt_display}](${href})`;
  
  // Return a shiny new link
  return returnString;
}

// Renders out the main sections of the README
function renderTOCandSections(data) {

  // Holds section text
  let sectionsContainer = '';

  // Holds TOC text
  let tocContainer = '## Table of Contents\n';

  // Holds Description text separate
  let descriptionContainer = '';

  if (data.description) { // If the user supplied a description
    descriptionContainer = `## Description\n${data.description}\n`;
  }

  // Main sections
  if (data.installation) { // If the user supplied installation instructions
    tocContainer += buildLink(true, 'Installation', '#installation') + '\n';
    sectionsContainer += `## Installation\n${data.installation}\n`;
  }

  if (data.usage) { // If the user supplied a usage instructions
    tocContainer += buildLink(true, 'Usage', '#usage') + '\n';
    sectionsContainer += `## Usage\n${data.usage}\n`;
  }
 
  if (data.testing) { // If the user supplied test commands
    tocContainer += buildLink(true, 'Testing', '#testing') + '\n';
    sectionsContainer += `## Testing\n${data.testing}\n`;
  }
  
  if (data.contribution) { // If the user supplied contribution guidelines
    tocContainer += buildLink(true, 'Contribution', '#contribution') + '\n';
    sectionsContainer += `## Contribution\n${data.contribution}\n`;
  }
  
  if (data.githubUsername) { // If the user supplied a GitHub username
    tocContainer += buildLink(true, 'Questions', '#questions') + '\n';
    sectionsContainer += `## Questions
If you have any questions about this project, you can find me on GitHub as ${buildLink(false, data.githubUsername, 'https://github.com/' + data.githubUsername)}.\n\n`;
    if (data.email) { // If the user supplied an e-mail address
      sectionsContainer += `You can also send me an e-mail at ${data.email}`;
    }
  }

  // Return the main portion of the README
  return descriptionContainer + tocContainer + sectionsContainer;
}

function generateMarkdown(data, year) {
  return `# ${data.projName}
${renderLicenseBadge(data.license) /* Add the badge */}
${renderTOCandSections(data) /* Add the README sections */}
${renderLicenseSection(data.license, year, data.yourName) /* Add the license section */}`;
}

module.exports = {
  generateMarkdown: generateMarkdown
};
