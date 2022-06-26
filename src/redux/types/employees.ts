export interface Employee {
    name?: string;
    title?: string;
    status?: string;
    id?: string;
};

export interface EmployeesState {
    allEmployees: Employee[];
    newEmployee: Employee
};