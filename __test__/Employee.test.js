const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const employee = new Employee('Daniel');

    expect(employee.name).toBe('Daniel');
    expect(employee.email).toEqual(expect.any(String));
});