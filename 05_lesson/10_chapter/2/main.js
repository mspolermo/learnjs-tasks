function topSalary(salaries) {
  let maxSalary = 0;
  let person;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      person = name;
    }
  }
  return person;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

topSalary(salaries);
