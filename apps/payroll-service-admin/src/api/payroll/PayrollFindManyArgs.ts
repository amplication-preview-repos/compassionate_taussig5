import { PayrollWhereInput } from "./PayrollWhereInput";
import { PayrollOrderByInput } from "./PayrollOrderByInput";

export type PayrollFindManyArgs = {
  where?: PayrollWhereInput;
  orderBy?: Array<PayrollOrderByInput>;
  skip?: number;
  take?: number;
};
