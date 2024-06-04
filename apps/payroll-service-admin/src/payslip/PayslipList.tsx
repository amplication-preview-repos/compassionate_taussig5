import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYROLL_TITLE_FIELD } from "../payroll/PayrollTitle";
import { SALARY_TITLE_FIELD } from "../salary/SalaryTitle";

export const PayslipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payslips"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
