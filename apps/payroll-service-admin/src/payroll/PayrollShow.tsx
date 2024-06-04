import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAYROLL_TITLE_FIELD } from "./PayrollTitle";
import { SALARY_TITLE_FIELD } from "../salary/SalaryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const PayrollShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="totalAmount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payslip"
          target="payrollId"
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
