import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const SalaryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Salaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
