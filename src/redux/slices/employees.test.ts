import { store } from "../store";
import { Employee } from "../types/employees";
import { addNewEmployee, updateAllEmployees, updateEmployeeStatus } from "./employees";

describe("Workmotion employees slice", () => {
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

  describe("employees slice", () => {
    it("should add new employee while typing in text fields", () => {
      const newEmployeeData = {name: 'newName', title: 'newTitle', status: 'added', id: '3'};
      selectorTest.dispatch(addNewEmployee({ newEmployee: newEmployeeData }));
      expect(
        selectorTest.getState().employees.newEmployee
      ).toEqual({...newEmployeeData});
    });

    it("should updateAllEmployees", () => {
      selectorTest.dispatch(updateAllEmployees({ allEmployees: dummyEmployees }));
      expect(
        selectorTest.getState().employees.allEmployees
      ).toEqual(dummyEmployees);
    });

    it("should updateEmployeeStatus", () => {
      selectorTest.dispatch(updateAllEmployees({ allEmployees: dummyEmployees }));
      selectorTest.dispatch(updateEmployeeStatus({ id: '1', status: 'inactive' }));
      expect(
        selectorTest.getState().employees.allEmployees[0].status
      ).toEqual('inactive');
    });

  });

});
