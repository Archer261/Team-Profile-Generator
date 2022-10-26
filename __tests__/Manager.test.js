const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager')

test('Create manager class objs', () => {
    const manager = new Manager('Bob Barker', 1, 'barker@yahoo.com');
    expect(typeof manager).toBe('object');
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("manager's name", () => {
    const manager = new Manager('Bob Barker', 1, 'barker@yahoo.com');
    expect(manager.getName()).toEqual(expect.any(String));
});

test("manager's id", () => {
    const manager = new Manager('Bob Barker', 1, 'barker@yahoo.com')
    expect(manager.getId()) === (expect.any(String));
})

test("managers's email", () => {
    const email = 'barker@yahoo.com';
    const manager = new Manager('Bob Barker', 1, email);
    expect(manager.getEmail()).toEqual(email);
});

test("manager's office number", () => {
    const manager = new Manager('Bob Barker', 1, 'barker@yahoo.com');
    expect(manager.getOfficeNumber()) === (expect.any(Number));
});

test("manager's role", () => {
    const empRole = "Manager";
    const manager = new Manager('Bob Barker', 1, 'barker@yahoo.com');
    expect(manager.getRole()).toEqual(empRole);
})