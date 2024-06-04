import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";
import { SalaryCreateNestedManyWithoutEmployeesInput } from "./SalaryCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  dateOfJoining?: Date | null;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;
  salaries?: SalaryCreateNestedManyWithoutEmployeesInput;
};
