import { EmployeesState } from "./employees";

export type GlobalState = Readonly<{
  employees: EmployeesState;
}>;