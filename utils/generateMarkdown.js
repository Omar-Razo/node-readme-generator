// TODO: Create a function that returns a license badge, section, and link

function renderLicenseAssets(answers) {

  let badge = ""
  let section = ""

  if (answers.license === "none") {
  // If there is no license, return an empty string for badge and section
    return { badge: badge , section: section }
  } else {
    if (answers.license.includes('-')) {
  // modify license input to work with badge spacing format
      const urlLicense = answers.license.replace('-', '--')

      badge = `[![Generic badge](https://img.shields.io/badge/License-${urlLicense}-blue)](https://choosealicense.com/licenses/${answers.license}/)`

    } else {
      badge = `[![Generic badge](https://img.shields.io/badge/License-${answers.license}-blue)](https://choosealicense.com/licenses/${answers.license}/)`
    }

    section = `## License
  This project uses the ${answers.license} license. A link to the full license can be found [Here](https://choosealicense.com/licenses/${answers.license}/)`

    return { badge: badge, section: section }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license, answers) {

  let userNameFormatted;

  if (answers.username.includes(' ')) {
  // modify username input to work with url format
    userNameFormatted = answers.username.replace(/ /g, '-')
  }

  const readmeDoc = `
  ${license.badge}

  # ${answers.title}

  ## ${answers.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questsions](#questions)
  6. [License](#license)


  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  For inquries, reach me at my [GitHub](https://github.com/${ userNameFormatted ? userNameFormatted : answers.username})
  or at my [email](${answers.email})
  
  ${license.section}`
  return readmeDoc
}

module.exports = { renderLicenseAssets, generateMarkdown }
