import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { PayslipTitle } from "../payslip/PayslipTitle";

export const SalaryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="allowances" source="allowances" />
        <NumberInput label="basic" source="basic" />
        <NumberInput label="deductions" source="deductions" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <NumberInput label="netPay" source="netPay" />
        <ReferenceArrayInput
          source="payslips"
          reference="Payslip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayslipTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
