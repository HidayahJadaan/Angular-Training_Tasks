// Q11: Create statements to extract the following points from the following code
// const company = {name: "TechCorp",location: {city: "San Francisco",country: "USA"},
// employees: [{ id: 1, name: "Alice", role: "Developer" },{ id: 2, name: "Bob", role: "Manager" }]};
// City and country name from company location.
// The name of all employees from company employees as array.
// The roles of all employees from company employees as strings87 (separated by comma).
var company = {
    name: "TechCorp",
    location: { city: "San Francisco", country: "USA" },
    employees: [
        { id: 1, name: "Alice", role: "Developer" },
        { id: 2, name: "Bob", role: "Manager" }
    ]
};
// city and country name from company location
var _a = company.location, city = _a.city, country = _a.country;
// names of all employees as an array
var employeeNames = company.employees.map(function (employee) { return employee.name; });
// roles of all employees as a comma-separated string
var employeeRoles = company.employees.map(function (employee) { return employee.role; }).join(", ");
console.log("City: ".concat(city, ", Country: ").concat(country));
console.log("Employee Names: ".concat(employeeNames));
console.log("Employee Roles: ".concat(employeeRoles));
