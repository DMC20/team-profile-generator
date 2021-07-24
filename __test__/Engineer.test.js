const Engineer = require('../lib/Employee');

test('create a new engineer object', () => {
    const engineer = new Employee("Daniel");

    expect(employee.name).toBe('Daniel');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});