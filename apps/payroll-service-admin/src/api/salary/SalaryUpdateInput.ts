import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PayslipUpdateManyWithoutSalariesInput } from "./PayslipUpdateManyWithoutSalariesInput";

export type SalaryUpdateInput = {
  allowances?: number | null;
  basic?: number | null;
  deductions?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  netPay?: number | null;
  payslips?: PayslipUpdateManyWithoutSalariesInput;
};
