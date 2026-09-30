import { IEmployee } from "../../models/employee.model";

export interface EmployeeData {
  name: string;
  position: string;
  baseSalary: number;
  yearsOfService: number;
  finalSalary: number;
}

export interface IEmployeeRepository {
  createEmployee(data: EmployeeData): Promise<IEmployee>;
  getEmployees(): Promise<IEmployee[]>;
  getEmployeeById(id: string): Promise<IEmployee | null>;
}
