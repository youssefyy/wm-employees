import { Selector } from "@reduxjs/toolkit";
import { Employee } from "../types/employees";
import { GlobalState } from "../types/global";

export const allEmployeesSelector: Selector<GlobalState, Employee[]> = (state: GlobalState) => state.employees.allEmployees;
export const newEmployeeSelector: Selector<GlobalState, Employee> = (state: GlobalState) => state.employees.newEmployee;
