import { Payroll as TPayroll } from "../api/payroll/Payroll";

export const PAYROLL_TITLE_FIELD = "id";

export const PayrollTitle = (record: TPayroll): string => {
  return record.id?.toString() || String(record.id);
};
