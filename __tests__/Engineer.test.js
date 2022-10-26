const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer')

test('Create engineer class obj', () => {
    const engineer = new Engineer('Bob', 3, 'bobSmith@smithington.com');
    expect(typeof engineer).toBe('object');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test("Engineer name", () => {
    const engineer = new Engineer('Bob', 3, 'bobSmith@smithington.com');
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("Engineer email", () => {
    const engineer = new Engineer('Bob', 3, 'bobSmith@smithington.com')
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("Engineer github", () => {
    const engineer = new Engineer('Bob', 3, 'bobSmith@smithington.com', 'bsmith223')
    expect(engineer.getGithub()) === (expect.any(String))
});

test("Engineer id", () => {
    const engineer = new Engineer('Bob', 3, 'bobSmith@smithington.com')
    expect(engineer.getId()) === (expect.any(String));
})

test("Engineer role", () => {
    const empRole = "Engineer";
    const engineer = new Engineer("Bob", 3, "bobSmith@smithington.com", empRole);
    expect(engineer.getRole()).toEqual(empRole);
})