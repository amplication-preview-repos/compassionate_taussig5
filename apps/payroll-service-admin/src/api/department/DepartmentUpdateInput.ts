import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  head?: string | null;
  name?: string | null;
};
