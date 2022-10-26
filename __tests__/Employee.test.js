
const { expect } = require('@jest/globals');
const Employee = require('../lib/employee')

test('Create employee class obj', () => {
    const employee = new Employee('Joseph', 4, 'joe@joe.com');
    expect(typeof employee).toBe('object');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Employee name", () => {
    const employee = new Employee('Joseph', 4, 'joe@joe.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("Employee id", () => {
    const employee = new Employee('Joseph', 4, 'joe@joe.com')
    expect(employee.getId()) === (expect.any(String));
})

test("Employee email", () => {
    const email = "joe@joe.com";
    const employee = new Employee("Joseph", 4, email);

    expect(employee.getEmail()).toEqual(email);
});

test("Employee role", () => {
    const employee = new Employee('Joseph', 4, 'joe@joe.com')
    expect(employee.getRole()).toEqual(expect.any(String))
})