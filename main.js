class Employee {
    constructor(first_name, last_name, monthlySalary) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.monthlySalary = monthlySalary;
    }
  
    calculateYearlySalary() {
      return this.monthlySalary * 12;
    }
  
    giveBonus(bonus) {
      this.monthlySalary += bonus;
    }
  
    incrementSalary(percentageIncrease) {
      this.monthlySalary *= (1 + percentageIncrease / 100);
    }
  }
  
  // Creating an object of the Employee class
  const employee1 = new Employee("Saiful", "Islam", 40000);
  
  // Awarding a bonus
  employee1.giveBonus(1000);
  
  // Increasing the salary
  employee1.incrementSalary(5);
  
  // Displaying employee details
  console.log("Employee Name:" + " " + employee1.first_name + " " + employee1.last_name);
  console.log("Monthly Salary:" + " " + employee1.monthlySalary);
  console.log("Yearly Salary:" + " " + employee1.calculateYearlySalary());