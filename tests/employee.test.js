const Employee = require("../lib/Employee");

const employee = new Employee("Gustavo", "25", "toomuchcaffeine@gmail.com");

test("Is the Employee constructor giving the proper info?", () => {
    expect(employee.name).toBe("Gustavo");
    expect(employee.id).toBe("25");
    expect(employee.email).toBe("toomuchcaffeine@gmail.com")
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