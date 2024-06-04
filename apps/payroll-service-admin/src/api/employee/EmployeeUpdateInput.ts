import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { PayrollUpdateManyWithoutEmployeesInput } from "./PayrollUpdateManyWithoutEmployeesInput";
import { SalaryUpdateManyWithoutEmployeesInput } from "./SalaryUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  dateOfJoining?: Date | null;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  payrolls?: PayrollUpdateManyWithoutEmployeesInput;
  salaries?: SalaryUpdateManyWithoutEmployeesInput;
};
