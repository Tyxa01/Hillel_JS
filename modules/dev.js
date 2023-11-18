import { Employee } from "./employee.js";


class Dev extends Employee{
  #jobType = "I am a Dev";
    
  constructor(id, salary,) {
        super(id, salary);
        Object.defineProperty(this, "id", {
            value: id,
            writable: false, 
            configurable: false 
          })
    }
    
    static returnArrayOfDevs(...objects) {
        const devArray = objects.filter(obj => obj instanceof Dev);
        return devArray;
      }
    
    
  

getJobType() {
    return this.#jobType
  }
}

export { Dev };
