import { PayrollWhereUniqueInput } from "../payroll/PayrollWhereUniqueInput";
import { SalaryWhereUniqueInput } from "../salary/SalaryWhereUniqueInput";

export type PayslipUpdateInput = {
  issueDate?: Date | null;
  payroll?: PayrollWhereUniqueInput | null;
  salary?: SalaryWhereUniqueInput | null;
};
