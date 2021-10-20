const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// INQUIRER QUESTION ARRAYS
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
    choices: ["Add an Engineer", "Add an Intern", "Finish Team"]
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

// ARRAY FOR COMPILED TEAM
let compiledTeam =[];

// INQUIRER FUNCTIONS
function addManager() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      compiledTeam.push(newManager);
      askNext();
    })
};
  
function addEngineer() {
  inquirer
  .prompt(engineerQuestions)
  .then((answers) => {
    let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    compiledTeam.push(newEngineer);
    askNext();
  })
};
  
function addIntern() {
  inquirer
  .prompt(internQuestions)
  .then((answers) => {
    let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    compiledTeam.push(newIntern);
    askNext();
  })
}

function askNext () {
  inquirer
    .prompt(next)
    .then((answers) => {
      switch(answers.next) {
        case "Add an Engineer":
          addEngineer();
          break;
        case "Add an Intern":
          addIntern();
          break;
        case "Finish Team":
          console.log("Congratulations! You have compiled your team.");
          fs.writeFile("./dist/index.html", generateHtml(compiledTeam),(err) => {
            if (err) {
              console.log(err);
            }
            console.log("Success!! Team profile generated in index.html.");
          }); 
      }
    })
}

// HTML CREATION FUNCTIONS
function generateManager (employee) { 
  return `<div class="card" style="width: 18rem; margin: 10px;">
  <div class="card-header">
    <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
    <p class="card-text" style="text-align: center;">Manager</p>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">${employee.officeNumber}</li>
    </ul>
  </div>
</div>`;
}

function generateEngineer (employee) {
  return `<div class="card" style="width: 18rem; margin: 10px;">
  <div class="card-header">
    <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
    <p class="card-text" style="text-align: center;">Engineer</p>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item"><a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
    </ul>
  </div>
</div>`;
}

function generateIntern (employee) {
  return `<div class="card" style="width: 18rem; margin: 10px;">
  <div class="card-header">
    <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
    <p class="card-text" style="text-align: center;">Intern</p>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">${employee.school}</li>
    </ul>
  </div>
</div>`
}

function renderEmployee (employee) {
  switch (employee.getRole()) {
    case "Manager":
      return generateManager(employee);
    case "Engineer":
      return generateEngineer(employee);
    case "Intern":
      return generateIntern(employee);
  }
}

function generateHtml (compiledTeam) {
  const employees = compiledTeam.map((employee) => renderEmployee(employee));

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
  </head>
  <body>
    <header class="header">
      <h1>My Team</h1>
    </header>
    <main>
      <div class="row card-rows">
        ${employees.join("")}
      </div>
    </main>
    <footer>
  
    </footer>
  </body>
  </html>`
}

// FIRST FUNCTION CALLED UPON INITIALIZATION (node index.js)
addManager();
