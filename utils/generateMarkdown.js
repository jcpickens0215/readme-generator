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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '\n';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, year, yourName) {
  return `## License
Licensed under the ${buildLink(false, license, getLicenseHREF(license))},
${license == 'Public Domain (Unlicense)' ? '' : 'copyright ' + year + ' by ' + yourName}
`;
}

// Creates all types of links! TOC, Images, regular hyperlinks.
// @params 
//    isLI - Is this link a list item?
//    isImage - Is this link an image?
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

// TODO: Create a function that creates a table of contents, and
// TODO: The bulk of the README
function renderTOCandSections(data) {

  // Holds section text
  let sectionsContainer = '';

  // Holds TOC text
  let tocContainer = '## Table of Contents\n';

  // Holds Description text separate
  let descriptionContainer;

    if (data.description) {
      descriptionContainer = `## Description\n${data.description}\n`
    } else {
      descriptionContainer = '';
    }

  // Main sections
  if (data.installation) {
    tocContainer += buildLink(true, 'Installation', '#installation') + '\n';
    sectionsContainer += `## Installation\n${data.installation}\n`;
  }

  if (data.usage) {
    tocContainer += buildLink(true, 'Usage', '#usage') + '\n';
    sectionsContainer += `## Usage\n${data.usage}\n`;
  }
 
  if (data.testing) {
    tocContainer += buildLink(true, 'Testing', '#testing') + '\n';
    sectionsContainer += `## Testing\n${data.testing}\n`;
  }
  
  if (data.contribution) {
    tocContainer += buildLink(true, 'Contribution', '#contribution') + '\n';
    sectionsContainer += `## Contribution\n${data.contribution}\n`;
  }
  
  if (data.credits) {
    tocContainer += buildLink(true, 'Credits', '#credits') + '\n';
    sectionsContainer += `## Credits\n${data.credits}`;
  }

  // Return the main portion of the README
  return descriptionContainer + tocContainer + sectionsContainer;
}

function generateMarkdown(data, year) {
  return `# ${data.projName}
${renderLicenseBadge(data) /* Add the badge */}
${renderTOCandSections(data) /* Add the README sections */}
${renderLicenseSection(data.license, year, data.yourName) /* Add the license section */}`;
}

module.exports = {
  generateMarkdown: generateMarkdown
};
