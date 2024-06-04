import { SortOrder } from "../../util/SortOrder";

export type SalaryOrderByInput = {
  allowances?: SortOrder;
  basic?: SortOrder;
  createdAt?: SortOrder;
  deductions?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  netPay?: SortOrder;
  updatedAt?: SortOrder;
};
