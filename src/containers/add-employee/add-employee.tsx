import './add-employee.css';
import { ReactElement, useState } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addNewEmployee } from '../../redux/slices/employees';
import { Employee } from '../../redux/types/employees';
import { GlobalState } from '../../redux/types/global';
import { newEmployeeSelector } from '../../redux/selectors/employees';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../constants/api-endpoints';
import { ROUTES_CONSTANTS } from '../../constants/routes';
import { postData } from '../../services/http-service';
import { EMPLOYEES_STATUS } from '../../constants/employees';

const AddEmployeeContainer = styled.div`
    background-color: rgba(0,54,46,.3);
    display: flex;
    padding-top: 100px;
    height: 100vh;
`;

export function AddEmployeeComponent(
    props: any
): ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newEmployee: Employee = useSelector((state: GlobalState) => newEmployeeSelector(state));
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleAddEmployee = async (employee: Employee) => {
        setIsError(false);
        setIsLoading(true);
        const { data, error } = await postData(API_ENDPOINTS.EMPLOYEES, employee);
        if (!error) {
            setIsLoading(false);
            setIsError(false);
            dispatch(addNewEmployee({newEmployee: {name: '', title: '', status: ''}}));
            navigate(ROUTES_CONSTANTS.ALL_EMPLOYEES);
        }
        else {
            setIsError(true);
            setIsLoading(false);
        }
        return;
    }

    return (

        <AddEmployeeContainer>
            <div className="add-employee">
                <h2>Add a new employee</h2>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        required
                        value={newEmployee?.name || ''}
                        onChange={(e) => dispatch(addNewEmployee({ newEmployee: { name: e.target.value } }))}
                    />
                    <label>Title:</label>
                    <input
                        required
                        value={newEmployee?.title || ''}
                        onChange={(e) => dispatch(addNewEmployee({ newEmployee: { title: e.target.value } }))}
                    ></input>
                    <label>Status:</label>
                    <select className='status-select'
                        value={newEmployee?.status || ''}
                        onChange={(e) => dispatch(addNewEmployee({ newEmployee: { status: e.target.value } }))}
                    >
                        <option value="">-Select Status-</option>
                        {EMPLOYEES_STATUS.map((status: string, index: number) => {
                            return (
                                <option value={status} key={index}>{status}</option>
                            )
                        })}
                    </select>
                    {isLoading && <div> Adding employee...</div>}
                    {isError && <div> Sorry, error occured.</div>}

                    {!isLoading && !isError && <button className={`${(!newEmployee?.name || !newEmployee?.title || !newEmployee?.status) && 'disabled'}`}
                        onClick={() => handleAddEmployee(newEmployee)}>Add Employee</button>
                    }

                </div>
            </div>
        </AddEmployeeContainer>
    );

}


