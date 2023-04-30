const Intern = require("../lib/intern");

const employee = new Intern("Gustavo", "25", "toomuchcaffeine@gmail.com", "IvaTheKing");

test("Is the Intern constructor giving the proper info?", () => {
    expect(employee.name).toBe("Gustavo");
    expect(employee.id).toBe("25");
    expect(employee.email).toBe("toomuchcaffeine@gmail.com")
    expect(employee.github).toBe("IvaTheKing")
});

test("Is getName getting the name?", () => {
    expect(employee.name).toBe("Gustavo");
});

test("Is getId getting the id?", () => {
    expect(employee.id).toBe("25");
});

test("Is getEmail getting the email?", () => {
    expect(employee.email).toBe("toomuchcaffeine@gmail.com");
});

test("Is getGithub getting the github?", () => {
    expect(employee.github).toBe("IvaTheKing")
});