const Manager = require("../lib/manager");

const employee = new Manager("Gustavo", "25", "toomuchcaffeine@gmail.com", "6");

test("Is the Manager constructor giving the proper info?", () => {
    expect(employee.name).toBe("Gustavo");
    expect(employee.id).toBe("25");
    expect(employee.email).toBe("toomuchcaffeine@gmail.com")
    expect(employee.officeNumber).toBe("6")
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

test("Is getOfficeNumber getting the office number?", () => {
    expect(employee.officeNumber).toBe("6")
});