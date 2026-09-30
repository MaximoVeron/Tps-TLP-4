import { model, Schema, Types } from "mongoose";

export interface IEmployee {
  _id?: Types.ObjectId | string;
  id?: string;
  name: string;
  position: string;
  baseSalary: number;
  yearsOfService: number;
  finalSalary: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const employeeSchema = new Schema<IEmployee>(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    baseSalary: { type: Number, required: true },
    yearsOfService: { type: Number, required: true },
    finalSalary: { type: Number, required: true },
  },
  { timestamps: true },
);

export const EmployeeModel = model<IEmployee>("Employee", employeeSchema);
