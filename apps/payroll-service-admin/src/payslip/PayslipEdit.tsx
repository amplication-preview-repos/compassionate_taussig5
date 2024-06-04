import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PayrollTitle } from "../payroll/PayrollTitle";
import { SalaryTitle } from "../salary/SalaryTitle";

export const PayslipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="issueDate" source="issueDate" />
        <ReferenceInput source="payroll.id" reference="Payroll" label="Payroll">
          <SelectInput optionText={PayrollTitle} />
        </ReferenceInput>
        <ReferenceInput source="salary.id" reference="Salary" label="Salary">
          <SelectInput optionText={SalaryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
