const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', githubUser = '') {
        // call parent constructor
        super(name, id, email);

        this.githubUser = githubUser;
    }

    getGitHub () {
        return `Github: ${this.githubUser}`;
    }

    getRole () {
        return `Engineer`;
    }
}

module.exports = Engineer