// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '\n';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '\n';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '\n';
}

// Creates all types of links! TOC, Images, regular hyperlinks.
// @params 
//    isLI - Is this link a list item?
//    isImage - Is this link an image?
//    alt_display - What is the alt text or display text?
//    href - Where does this link pointg to?
function buildLink(isLI, isImage, alt_display, href) {

  // Create a blank string
  let returnString = '';

  // If the link is a list item, make it one
  if (isLI) returnString += '- ';

  // If the link is an image, make it one
  if (isImage) returnString += '!';

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
    tocContainer += buildLink(true, false, 'Installation', '#installation') + '\n';
    sectionsContainer += `## Installation\n${data.installation}\n`;
  }

  if (data.usage) {
    tocContainer += buildLink(true, false, 'Usage', '#usage') + '\n';
    sectionsContainer += `## Usage\n${data.usage}\n`;
  }
 
  if (data.testing) {
    tocContainer += buildLink(true, false, 'Testing', '#testing') + '\n';
    sectionsContainer += `## Testing\n${data.testing}\n`;
  }
  
  if (data.contribution) {
    tocContainer += buildLink(true, false, 'Contribution', '#contribution') + '\n';
    sectionsContainer += `## Contribution\n${data.contribution}\n`;
  }
  
  if (data.credits) {
    tocContainer += buildLink(true, false, 'Credits', '#credits') + '\n';
    sectionsContainer += `## Credits\n${data.credits}\n`;
  }

  // Return the main portion of the README
  return descriptionContainer + tocContainer + sectionsContainer;
}

function generateMarkdown(data) {
  return `# ${data.projName}
${renderLicenseBadge(data) /* Add the badge */}
${renderLicenseLink(data) /* Make it a link */}
${renderTOCandSections(data) /* Add the README sections */}
${renderLicenseSection(data.license) /* Add the license section */}
`;
}

module.exports = {
  generateMarkdown: generateMarkdown
};
