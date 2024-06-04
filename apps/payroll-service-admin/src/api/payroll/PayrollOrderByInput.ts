import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
