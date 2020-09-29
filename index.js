// array of questions for user
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const { join } = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js")


const questions = [
    { 
      type:"input",
      name:"title",
      message:"What is the name of this project?" 
    },
    {
      type:"input",
      name:"description",
      message:"Please enter your product description:"
    },
    {
      type:"input",
      name:"usage",
      message:"Please enter usage instructions:"
    },
    {
      type:"input",
      name:"installation",
      message:"Please enter installation instructions:"
    },
    {
      type:"input",
      name:"github",
      message:"What is your GitHub Username?"
  },
  {
      type:"input",
      name:"contributors",
      message:"Please list your contributors:"
  },
  {
      type:"input",
      name:"tests",
      message:"What tests are there?"
},
  {
      type:"input",
      name:"email",
      message:"Enter Your email so people can ask questions!"
},
{
  type: "list",
  name: "license",
  message: "What kind of license should your project have?",
  choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},


];

// function to write README file
function writeToFile(fileName, data) {
    // search this line 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// function to initialize program
function init() {

inquirer
  .prompt(questions)
  .then(answers => {
    writeToFile("README.md", generateMarkdown({...answers}))
    console.log(answers)

  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });




}

// function call to initialize program
init();

