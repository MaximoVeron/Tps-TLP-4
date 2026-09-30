import { type Response, type Request } from "express";
import { isValidObjectId } from "mongoose";
import { IEmployeeRepository } from "../repositories/interfaces/employee.interface";

export class EmployeeController {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public registerEmployee = async (req: Request, res: Response) => {
    const { name, position, baseSalary, yearsOfService } = req.body;
    try {
      if (!name || !position) {
        return res
          .status(400)
          .json({ message: "Nombre y puesto son obligatorios" });
      }

      if (typeof baseSalary !== "number" || baseSalary <= 0) {
        return res
          .status(400)
          .json({ message: "El salario base debe ser mayor a 0" });
      }

      if (
        typeof yearsOfService !== "number" ||
        yearsOfService < 0 ||
        !Number.isInteger(yearsOfService)
      ) {
        return res.status(400).json({
          message: "La antigüedad debe ser un entero mayor o igual a 0",
        });
      }

      const bonus = baseSalary * 0.02 * yearsOfService;
      const finalSalary = baseSalary + bonus;

      const employee = await this.employeeRepository.createEmployee({
        name,
        position,
        baseSalary,
        yearsOfService,
        finalSalary,
      });

      return res.status(201).json(employee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };

  getEmployees = async (_req: Request, res: Response) => {
    try {
      const employees = await this.employeeRepository.getEmployees();
      return res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };

  getEmployeeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id || typeof id !== "string" || !isValidObjectId(id)) {
        return res.status(400).json({ message: "ID de empleado no válido" });
      }

      const employee = await this.employeeRepository.getEmployeeById(id);

      if (!employee) {
        return res.status(404).json({ message: "Empleado no encontrado" });
      }

      return res.status(200).json(employee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };
}
