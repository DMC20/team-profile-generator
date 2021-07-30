// required node packages
const inquirer = require ('inquirer');
const fs = require('fs')

// render html file path
const renderHTML = require('./src/generateHTML');

// module exports
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');
const Engineer = require ('./lib/Engineer');

// employee roster array
let employeeRoster = [];

// Manager questions
const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter an email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true 
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the manager's office number",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter a phone number");
                    return false;
                }
            }
        }
    ])
    .then(managerInfo => {
        const {name, id, email, office} = managerInfo;
        let manager = new Manager (name, id , email, office);

        employeeRoster.push(manager);
    });
};

// engineer / intern questions 
const employeeQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please select the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Pease enter the emmployee's name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an employee ID.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'git',
            message: "Please enter the employee's Github username",
            when: (input) => input.role === 'Engineer',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter Github usernmae');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter employee's school",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter school name");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Would you like to add more employee's to the roster?",
            default: false
        }
    ])
    .then (employeeTeam => {
        const {role, name, id, email, git, school, addEmployee } = employeeTeam;
        let roster;

        if (role === 'Engineer') {
            roster = new Engineer (name, id, email, git);
            console.log(roster);
        } else if (role === "Intern") {
            roster = new Intern (name, id, email, school);
            console.log(roster);
        }

        employeeRoster.push(roster);

        if (addEmployee) {
            return employeeQuestions(employeeRoster);
        } else {
            return employeeRoster;
        }
    })
};

function writeFile (data) {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your employee roster has been created!")
        }
    })
};

managerQuestions ()
.then(employeeQuestions)
.then(employeeRoster => {
    return renderHTML(employeeRoster);
})
.then (rosterHTML => {
    return writeFile(rosterHTML);
})
.catch(err => {
    console.log(err);
});