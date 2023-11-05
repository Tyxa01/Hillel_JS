import { Employee } from "./employee.js";

class PM extends Employee {
constructor(id, salary, jobType) {
super(id, salary);
this.jobType = jobType;}
    
      getJobType() {
        return `I am a PM`;
      }
    }
    
    export { PM };
