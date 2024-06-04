import { Department } from "../department/Department";
import { Payroll } from "../payroll/Payroll";
import { Salary } from "../salary/Salary";

export type Employee = {
  createdAt: Date;
  dateOfJoining: Date | null;
  department?: Department | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payrolls?: Array<Payroll>;
  salaries?: Array<Salary>;
  updatedAt: Date;
};
