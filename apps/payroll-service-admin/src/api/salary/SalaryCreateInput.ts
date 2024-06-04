import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PayslipCreateNestedManyWithoutSalariesInput } from "./PayslipCreateNestedManyWithoutSalariesInput";

export type SalaryCreateInput = {
  allowances?: number | null;
  basic?: number | null;
  deductions?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  netPay?: number | null;
  payslips?: PayslipCreateNestedManyWithoutSalariesInput;
};
