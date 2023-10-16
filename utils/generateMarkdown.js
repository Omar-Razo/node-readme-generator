// TODO: Create a function that returns a license badge, section, and link

// If there is no license, return an empty string
function renderLicenseAssets(answers) {

  if (answers.license === "none") {
    const badge = ""
    const section = ""
    return badge, section
  } else {
    
    const badge = `[![Generic badge](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://choosealicense.com/licenses/${answers.license}/)`

    const section = `
    ## License
    This project uses the ${answers.license} license. A link to the full license can be found [Here](https://choosealicense.com/licenses/${answers.license}/)`

    return { badge: badge, section: section }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license, answers) {

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


  ## Install
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Test
  ${answers.tests}

  ## Questions
  For inquries, reach me at my [GitHub](https://github.com/${answers.username}
  or at my [email](${answers.email})

  ${license.section}
`
  return readmeDoc
}

module.exports = { renderLicenseAssets, generateMarkdown }
