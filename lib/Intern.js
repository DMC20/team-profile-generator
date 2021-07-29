const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name = '', id = '', email = '', schoolInfo = '') {
        // call parent constructor 
        super (name, id, email);

        this.schoolInfo = schoolInfo;
    }

    getSchool () {
        return `School: ${this.schoolInfo}`;
    }

    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;