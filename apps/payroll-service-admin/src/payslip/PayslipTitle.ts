import { Payslip as TPayslip } from "../api/payslip/Payslip";

export const PAYSLIP_TITLE_FIELD = "id";

export const PayslipTitle = (record: TPayslip): string => {
  return record.id?.toString() || String(record.id);
};
