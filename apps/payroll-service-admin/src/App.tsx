import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { PayrollList } from "./payroll/PayrollList";
import { PayrollCreate } from "./payroll/PayrollCreate";
import { PayrollEdit } from "./payroll/PayrollEdit";
import { PayrollShow } from "./payroll/PayrollShow";
import { SalaryList } from "./salary/SalaryList";
import { SalaryCreate } from "./salary/SalaryCreate";
import { SalaryEdit } from "./salary/SalaryEdit";
import { SalaryShow } from "./salary/SalaryShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { PayslipList } from "./payslip/PayslipList";
import { PayslipCreate } from "./payslip/PayslipCreate";
import { PayslipEdit } from "./payslip/PayslipEdit";
import { PayslipShow } from "./payslip/PayslipShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PayrollService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Payroll"
          list={PayrollList}
          edit={PayrollEdit}
          create={PayrollCreate}
          show={PayrollShow}
        />
        <Resource
          name="Salary"
          list={SalaryList}
          edit={SalaryEdit}
          create={SalaryCreate}
          show={SalaryShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Payslip"
          list={PayslipList}
          edit={PayslipEdit}
          create={PayslipCreate}
          show={PayslipShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
