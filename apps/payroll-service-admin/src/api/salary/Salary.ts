import { Employee } from "../employee/Employee";
import { Payslip } from "../payslip/Payslip";

export type Salary = {
  allowances: number | null;
  basic: number | null;
  createdAt: Date;
  deductions: number | null;
  employee?: Employee | null;
  id: string;
  netPay: number | null;
  payslips?: Array<Payslip>;
  updatedAt: Date;
};
