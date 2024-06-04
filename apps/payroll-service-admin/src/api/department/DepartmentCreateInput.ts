import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  head?: string | null;
  name?: string | null;
};
