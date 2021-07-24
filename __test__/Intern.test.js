const Intern = require('../lib/Intern');

test('create a new intern object', () => {
    const intern = new Intern ('Daniel');

    expect(intern.name).toBe("Daniel");

    expect(intern.email).toEqual(expect.any(String));
})

test('check school info', () => {
    const intern = new Intern ('Daniel');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('check intern role to be intern', () => {
    const intern = new Intern("Daniel");

    expect(intern.getRole()).toBe('Intern')
})