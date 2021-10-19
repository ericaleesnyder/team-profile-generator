// prompted for manager
// employee name, id, email, office number
// THEN prompted to select add engineer, add intern, finish building team
// WHEN select engineer
// name, id, email, github
// IMMEDIATELY THEN prompted to select add engineer, add intern, finish building team
// WHEN select intern
// name, id, email, github
// IMMEDIATELY THEN prompted to select add engineer, add intern, finish building team
// WHEN select finish
// display message saying "success! team profile created in: (location)"

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderHtml = require("./lib/HTML");
// write my generate html and generate card in a different file and link here
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

let compiledTeam =[];

function addManager() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      compiledTeam.push(answers);
      askNext();
    })
    //push to compiled team??
}

function addEngineer() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      compiledTeam.push(answers);
      askNext();
    })
    //push to compiled team??
};

function addIntern() {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      compiledTeam.push(answers);
      askNext();
    })
    // push to compiled team??
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
          console.log("Congratulations! You have compiled your team.");
          console.log(compiledTeam);
          renderHtml(); 
      }
    })
}

addManager();
