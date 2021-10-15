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
const Inquirer = require("./lib/Inquirer");