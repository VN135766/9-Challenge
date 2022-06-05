// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return `(www.licenselink)[badge]`
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license)
}

function checkIfNone(licenses) {
  if (licenses.includes("None")) {
    return "No license"
  } else {
    return licenses.map(indlicense => renderLicenseSection(indlicense)).toString().replaceAll(',',' ')
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## License
  ${checkIfNone(data.license)}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Contact info:
  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;
