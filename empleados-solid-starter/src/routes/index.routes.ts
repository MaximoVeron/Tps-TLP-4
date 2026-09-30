import { Router } from "express";
import { employeeRouter } from "./employees.routes";

export const router = Router();
router.use(employeeRouter);
