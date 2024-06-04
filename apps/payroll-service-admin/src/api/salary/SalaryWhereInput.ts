import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PayslipListRelationFilter } from "../payslip/PayslipListRelationFilter";

export type SalaryWhereInput = {
  allowances?: FloatNullableFilter;
  basic?: FloatNullableFilter;
  deductions?: FloatNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  netPay?: FloatNullableFilter;
  payslips?: PayslipListRelationFilter;
};
