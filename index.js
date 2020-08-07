const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const { inherits } = require("util");
require("console.table");

init();

//Display logo text, load main prompts
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts() ;
}

function loadMainPrompts () {
    prompt([
        {
         type: "list",
         name: "choice",
         message: "What would you like to do?",
         choices: [
             {
                 name: "View All Employees",
                 value: "VIEW_EMPLOYEES"
             },
             {
                 name: "View All Employees by Department",
                 value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
            },
            {
                name: "View All Employees by Manager",
                value: "VIEW_EMPLOYEES_BY_MANAGER"

            },
            {   name: "Add Employee",
                value: "ADD_EMPLOYEE"
            },
            { 
                name: "Remove Employee",
                value: "REMOVE_EMPLOYEE"
            },
         ]

            }
        ])
    }


