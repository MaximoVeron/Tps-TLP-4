import { Router } from "express";
import { EmployeeRepository } from "../repositories/employee.repository";
import { EmployeeController } from "../controllers/employess.controller";

export const employeeRouter = Router();

const employeeRepository = new EmployeeRepository();
const employeeController = new EmployeeController(employeeRepository);

employeeRouter.post("/employee", employeeController.registerEmployee);
employeeRouter.get("/employee", employeeController.getEmployees);
employeeRouter.get("/employee/:id", employeeController.getEmployeeById);
