import { Employee } from "../employee/Employee";
import { Payslip } from "../payslip/Payslip";

export type Payroll = {
  createdAt: Date;
  date: Date | null;
  employee?: Employee | null;
  id: string;
  payslips?: Array<Payslip>;
  totalAmount: number | null;
  updatedAt: Date;
};
