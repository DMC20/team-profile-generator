const Engineer = require('../lib/Engineer');

test('create a new engineer object', () => {
    const engineer = new Engineer("Daniel");

    expect(engineer.name).toBe('Daniel');
    expect(engineer.email).toEqual(expect.any(String));
})

test('check for github username', () => {
    const engineer = new Engineer('Daniel');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
})

test('check engineer role to be engineer', () => {
    const engineer = new Engineer('Daniel');

    expect(engineer.getRole()).toBe('Engineer');
})