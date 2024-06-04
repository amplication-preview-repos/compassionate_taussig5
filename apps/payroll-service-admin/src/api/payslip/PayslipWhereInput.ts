import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PayrollWhereUniqueInput } from "../payroll/PayrollWhereUniqueInput";
import { SalaryWhereUniqueInput } from "../salary/SalaryWhereUniqueInput";

export type PayslipWhereInput = {
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
  payroll?: PayrollWhereUniqueInput;
  salary?: SalaryWhereUniqueInput;
};
