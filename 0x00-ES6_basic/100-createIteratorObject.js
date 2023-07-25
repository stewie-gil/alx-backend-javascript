export default function* createIteratorObject(report) {
  for (const departmentEmployees of Object.values(report.allEmployees)) {
    for (const employee of departmentEmployees) {
      yield employee;
    }
  }
}
