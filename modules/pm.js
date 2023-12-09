import { Employee } from "./employee.js";

class PM extends Employee {
  #jobType = "I am a PM";

  constructor(id, salary, jobType) {
    super(id, salary);
    this.jobType = jobType;
  }

  getJobType() {
    return this.#jobType;
  }
}

export { PM };
