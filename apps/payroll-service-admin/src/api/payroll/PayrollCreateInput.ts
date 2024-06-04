import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PayslipCreateNestedManyWithoutPayrollsInput } from "./PayslipCreateNestedManyWithoutPayrollsInput";

export type PayrollCreateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  payslips?: PayslipCreateNestedManyWithoutPayrollsInput;
  totalAmount?: number | null;
};
