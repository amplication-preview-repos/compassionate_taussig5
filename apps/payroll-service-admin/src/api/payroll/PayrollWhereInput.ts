import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PayslipListRelationFilter } from "../payslip/PayslipListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PayrollWhereInput = {
  date?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  payslips?: PayslipListRelationFilter;
  totalAmount?: FloatNullableFilter;
};
