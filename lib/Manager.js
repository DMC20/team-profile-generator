const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return `Office Number: ${this.officeNumber}`;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;