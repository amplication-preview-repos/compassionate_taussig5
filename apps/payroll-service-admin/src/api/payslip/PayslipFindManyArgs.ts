import { PayslipWhereInput } from "./PayslipWhereInput";
import { PayslipOrderByInput } from "./PayslipOrderByInput";

export type PayslipFindManyArgs = {
  where?: PayslipWhereInput;
  orderBy?: Array<PayslipOrderByInput>;
  skip?: number;
  take?: number;
};
