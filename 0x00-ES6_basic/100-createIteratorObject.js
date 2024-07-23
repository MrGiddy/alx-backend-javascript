export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department of Object.keys(report.allEmployees)) {
    const employees = report.allEmployees[department];
    employees.forEach((value) => allEmployees.push(value));
  }

  return allEmployees;
}
