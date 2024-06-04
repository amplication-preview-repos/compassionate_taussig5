import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAYROLL_TITLE_FIELD } from "../payroll/PayrollTitle";
import { SALARY_TITLE_FIELD } from "./SalaryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const SalaryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="allowances" source="allowances" />
        <TextField label="basic" source="basic" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deductions" source="deductions" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="netPay" source="netPay" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payslip"
          target="salaryId"
          label="Payslips"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="issueDate" source="issueDate" />
            <ReferenceField
              label="Payroll"
              source="payroll.id"
              reference="Payroll"
            >
              <TextField source={PAYROLL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Salary"
              source="salary.id"
              reference="Salary"
            >
              <TextField source={SALARY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
