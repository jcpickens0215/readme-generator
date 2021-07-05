// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function that creates a table of contents, and
// TODO: The bulk of the README
function renderTOCandSections(data) {}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}
${renderLicenseLink(data)}
${renderTOCandSections(data)}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
