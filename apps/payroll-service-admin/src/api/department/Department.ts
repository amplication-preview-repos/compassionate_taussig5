import { Employee } from "../employee/Employee";

export type Department = {
  createdAt: Date;
  employees?: Array<Employee>;
  head: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
