import { isValidObjectId } from "mongoose";
import { EmployeeModel, IEmployee } from "../models/employee.model";
import {
  EmployeeData,
  IEmployeeRepository,
} from "./interfaces/employee.interface";

export class EmployeeRepository implements IEmployeeRepository {
  async createEmployee(data: EmployeeData): Promise<IEmployee> {
    return await EmployeeModel.create(data);
  }

  async getEmployees(): Promise<IEmployee[]> {
    return await EmployeeModel.find().sort({ createdAt: -1 });
  }

  async getEmployeeById(id: string): Promise<IEmployee | null> {
    if (!isValidObjectId(id)) {
      return null;
    }
    return await EmployeeModel.findById(id);
  }
}
