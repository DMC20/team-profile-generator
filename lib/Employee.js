class Employee {
    constructor(name = '' , id = '', email = '') {
        this.name = name,
        this.iD = id,
        this.email = email
    };

    getName () {
        return `${this.name}`;
    }

    getId () {
        return `ID: ${this.id}`;
    }

    getEmail () {
        return `Email: ${this.email}`;
    }

    getRole () {
        return 'Employee';
    }
}

module.exports = Employee