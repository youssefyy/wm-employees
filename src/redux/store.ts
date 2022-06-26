import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./slices/employees";

export const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer
    }
});