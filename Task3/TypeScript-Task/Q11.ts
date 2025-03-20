// Q11: Create statements to extract the following points from the following code
// const company = {name: "TechCorp",location: {city: "San Francisco",country: "USA"},
// employees: [{ id: 1, name: "Alice", role: "Developer" },{ id: 2, name: "Bob", role: "Manager" }]};
// City and country name from company location.
// The name of all employees from company employees as array.
// The roles of all employees from company employees as strings87 (separated by comma).

const company = {
  name: "TechCorp",
  location: { city: "San Francisco", country: "USA" },
  employees: [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Manager" }
  ]
};

// city and country name from company location
const { city, country } = company.location;

// names of all employees as an array
const employeeNames : string [] = company.employees.map(employee => employee.name);

// roles of all employees as a comma-separated string
const employeeRoles : string= company.employees.map(employee => employee.role).join(", ");

console.log(`City: ${city}, Country: ${country}`);  
console.log(`Employee Names: ${employeeNames}`);    
console.log(`Employee Roles: ${employeeRoles}`);    
