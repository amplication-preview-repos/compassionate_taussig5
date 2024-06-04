import { Payroll } from "../payroll/Payroll";
import { Salary } from "../salary/Salary";

export type Payslip = {
  createdAt: Date;
  id: string;
  issueDate: Date | null;
  payroll?: Payroll | null;
  salary?: Salary | null;
  updatedAt: Date;
};
