import { createSlice } from "@reduxjs/toolkit";
import { Employee, EmployeesState } from "../types/employees";

const initialState = {} as EmployeesState;

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addNewEmployee(state, action: {payload: {newEmployee: Employee}}) {
            state.newEmployee = {...state.newEmployee, ...action.payload.newEmployee};
        },
        updateAllEmployees(state, action: {payload: {allEmployees: Employee[]}}) {
            state.allEmployees = action.payload.allEmployees;
        },
        updateEmployeeStatus(state, action: {payload: {id: string, status: string}}) {
            state.allEmployees.forEach((employee: Employee)=>{
                if(employee.id===action.payload.id) {
                    employee.status=action.payload.status;
                }
            });
        }
    }
  });
  
  export const { addNewEmployee, updateAllEmployees, updateEmployeeStatus } = employeesSlice.actions;

  export default employeesSlice.reducer;