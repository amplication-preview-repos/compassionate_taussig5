import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PayslipUpdateManyWithoutPayrollsInput } from "./PayslipUpdateManyWithoutPayrollsInput";

export type PayrollUpdateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  payslips?: PayslipUpdateManyWithoutPayrollsInput;
  totalAmount?: number | null;
};
