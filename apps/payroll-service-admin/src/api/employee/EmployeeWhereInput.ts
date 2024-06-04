import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";
import { SalaryListRelationFilter } from "../salary/SalaryListRelationFilter";

export type EmployeeWhereInput = {
  dateOfJoining?: DateTimeNullableFilter;
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payrolls?: PayrollListRelationFilter;
  salaries?: SalaryListRelationFilter;
};
