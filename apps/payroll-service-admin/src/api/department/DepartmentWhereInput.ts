import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepartmentWhereInput = {
  employees?: EmployeeListRelationFilter;
  head?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
