const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern')

test('Create intern class obj', () => {
    const intern = new Intern('Ashley', 2, 'asmith@gmail.com');
    expect(typeof intern).toBe('object');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test("Intern name", () => {
    const intern = new Intern('Ashley', 2, 'asmith@gmail.com');
    expect(intern.getName()).toEqual(expect.any(String));
});

test("Intern id", () => {
    const intern = new Intern('Ashley', 2, 'asmith@gmail.com')
    expect(intern.getId()) === (expect.any(String));
})

test("Intern email", () => {
    const email = 'asmith@gmail.com';
    const intern = new Intern('Ashley', 2, email);

    expect(intern.getEmail()).toEqual(email);
});

test("Intern school", () => {
    const school = "Intern";
    const intern = new Intern('Ashley', 2, 'asmith@gmail.com', school);
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("Intern role", () => {
    const empRole = "Intern";
    const intern = new Intern('Ashley', 2, 'asmith@gmail.com', empRole)
    expect(intern.getRole() === (empRole));
})