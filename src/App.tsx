import { Provider } from 'react-redux';
import './App.css';
import { WMHeader } from './components/core/wm-header';
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from './containers/home/home';
import { store } from './redux/store';
import { ROUTES_CONSTANTS } from './constants/routes';
import { AddEmployeeComponent } from './containers/add-employee/add-employee';
import { AllEmployeesComponent } from './containers/all-employees/all-employees';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
          <WMHeader/>
      </header> 
      <Routes>
          <Route path={ROUTES_CONSTANTS.HOME} element={<HomeComponent/>}/>
          <Route path={ROUTES_CONSTANTS.ADD_EMPLOYEE} element={ <AddEmployeeComponent/>}/>
          <Route path={ROUTES_CONSTANTS.ALL_EMPLOYEES} element={ <AllEmployeesComponent/>}/>
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
