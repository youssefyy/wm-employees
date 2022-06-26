import { addNewEmployee, updateAllEmployees } from "../slices/employees";
import { store } from "../store";
import { Employee } from "../types/employees";
import { GlobalState } from "../types/global";
import { allEmployeesSelector, newEmployeeSelector } from "./employees";

describe("Workmotion employees selectors", () => {
    const selectorTest = store;

    const dummyEmployees: Employee[] = [{
        name: 'name1',
        id: '1',
        title: 'title1',
        status: 'added'
      },
      {
        name: 'name2',
        id: '2',
        title: 'title2',
        status: 'incheck'
      }];

    describe("employees selector", () => {
        it("should return new employee data while typing in text fields", () => {
            const newEmployeeData = {name: 'newName', title: 'newTitle', status: 'added', id: '3'};
            selectorTest.dispatch(addNewEmployee({ newEmployee: newEmployeeData }));
            expect(newEmployeeSelector(selectorTest.getState() as GlobalState))
                .toEqual(newEmployeeData);
        });

        it("should return all employees data", () => {
            const newEmployeeData = {name: 'newName', title: 'newTitle', status: 'added', id: '3'};
            selectorTest.dispatch(updateAllEmployees({ allEmployees: dummyEmployees }));
            expect(allEmployeesSelector(selectorTest.getState() as GlobalState))
                .toEqual(dummyEmployees);
        });

    });

});
