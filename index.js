const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./src/index");
const employeeTemplate = require("./src/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeList = [];

// Menu
const employeeMenu = [
    {
        type: "list",
        message: "Add a new employee",
        name: "newEmployee",
        choices: [
            "Engineer",
            "Intern",
            "Done",
        ],
    },
];

// Team manager prompts
const teamManager = [
    {
        type: "input",
        message: "Enter Team Manager name",
        name: "name",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter employee ID",
        name: "id",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Team Manager email",
        name: "email",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Team Manager office number",
        name: "officenumber",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
];

// Engineer prompts
const empEngineer = [
    {
        type: "input",
        message: "Enter Engineer name",
        name: "name",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Engineer id",
        name: "id",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Engineer email",
        name: "email",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Engineer Github Profile",
        name: "github",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    }
];

const empIntern = [
    {
        type: "input",
        message: "Enter Inter name",
        name: "name",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Intern id",
        name: "id",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Intern email",
        name: "email",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "Enter Intern School",
        name: "school",
        validate: (data) => {
            if (data) {
                return true;
            } else {
                console.log("invalid input");
                return false;
            }
        },
    }
];

//Function to add new Manager
function addManager(teamManager) {
    inquirer.prompt(teamManager).then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officenumber
        )
        employeeList.push(manager)
        menu()

    })
}

// Function to add new intern
function addIntern(empIntern) {
    inquirer.prompt(empIntern).then((data) => {
        const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        )
        employeeList.push(intern)
        menu()
    })
}

// Function to add new engineer
function addEngineer(empEngineer) {
    inquirer.prompt(empEngineer).then((data) => {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github,

        )
        employeeList.push(engineer)
        menu()
    })
}

// Function to add route back to menu
function menu() {
    inquirer.prompt(employeeMenu).then((data) => {
        switch (data.newEmployee) {
            case "Engineer":
                addEngineer(empEngineer);
                break;
            case "Intern":
                addIntern(empIntern);
                break;
            case "Done":
                renderPage(employeeList);
                break;
        }

    })
}

// Function to build out HTML page
function renderPage(employeeList) {
    let employeeCards = "";
    employeeList.forEach((employee) => {
        var card = employeeTemplate(employee)
        // console.log(card);
        return employeeCards = employeeCards + card;
    });

    console.log(employeeCards)

    employeeCards = template(employeeCards);

    fs.writeFile("teamPage.html", employeeCards, (err) => {
        if (err)

            //If file was not created, show error
            console.log(err);
        else {

            // If the file was created, show message
            console.log("File written successfully\n");

        }
    });
}

function init() {
    addManager(teamManager);
}

init();

module.exports = employeeList;