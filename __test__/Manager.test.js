const Manager = require('../lib/Manager');

test('create a new manager object', () => {
    const manager = new Manager('Daniel');

    expect(manager.name).toBe('Daniel');
    expect(manager.email).toEqual(expect.any(String));
})

test('check office number', () => {
    const manager = new Manager('Daniel');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})

test('check manager role to be manager', () => {
    const manager = new Manager('Daniel');

    expect(manager.getRole()).toBe('Manager');
})