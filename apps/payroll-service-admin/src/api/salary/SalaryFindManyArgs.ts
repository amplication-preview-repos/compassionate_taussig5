import { SalaryWhereInput } from "./SalaryWhereInput";
import { SalaryOrderByInput } from "./SalaryOrderByInput";

export type SalaryFindManyArgs = {
  where?: SalaryWhereInput;
  orderBy?: Array<SalaryOrderByInput>;
  skip?: number;
  take?: number;
};
