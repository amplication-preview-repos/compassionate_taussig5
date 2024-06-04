import { SortOrder } from "../../util/SortOrder";

export type PayslipOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  payrollId?: SortOrder;
  salaryId?: SortOrder;
  updatedAt?: SortOrder;
};
