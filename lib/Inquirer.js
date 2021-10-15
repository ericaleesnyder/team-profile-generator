const inquirer = require("inquirer")

const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNumber",
  },
]

const next = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    name: "next",
    choices: ["add an engineer", "add an intern", "finish team"]
  }
]

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's github?",
    name: "github",
  },
]

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "school",
  },
]

function addManager() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      console.log(answers);
      askNext();
    })
}

function addEngineer() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      console.log(answers);
      askNext();
    })
};

function addIntern() {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      console.log(answers);
      askNext();
    })
}

function askNext () {
  inquirer
    .prompt(next)
    .then((answers) => {
      switch(answers.next) {
        case "add an engineer":
          addEngineer();
          break;
        case "add an intern":
          addIntern();
          break;
        case "finish team":
          console.log("Congratulations! You have compiled your team.")
      }
    })
}

addManager();

// next steps:
//
// document all employee data so that Manager gets manager inputs
// document all employee data so that Engineer gets engineer inputs
// document all employee data so that Intern gets intern inputs
//
// use these variables to populate HTML with relevant data 