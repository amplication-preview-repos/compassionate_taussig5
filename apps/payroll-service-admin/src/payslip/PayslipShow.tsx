import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PAYROLL_TITLE_FIELD } from "../payroll/PayrollTitle";
import { SALARY_TITLE_FIELD } from "../salary/SalaryTitle";

export const PayslipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="issueDate" source="issueDate" />
        <ReferenceField label="Payroll" source="payroll.id" reference="Payroll">
          <TextField source={PAYROLL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Salary" source="salary.id" reference="Salary">
          <TextField source={SALARY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
