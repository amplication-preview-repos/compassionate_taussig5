import { Salary as TSalary } from "../api/salary/Salary";

export const SALARY_TITLE_FIELD = "id";

export const SalaryTitle = (record: TSalary): string => {
  return record.id?.toString() || String(record.id);
};
