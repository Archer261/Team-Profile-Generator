const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getSchool() {

    }
    getRole() {
        return 'Intern';
    }

}
module.exports = Intern