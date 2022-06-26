import './employee-box.css';
import { ReactElement } from "react";
import styled from 'styled-components';
import { StatusBarComponent } from '../status-bar/status-bar';
import { EMPLOYEES_STATUS } from '../../../constants/employees';
import { Employee } from '../../../redux/types/employees';
import { putData } from '../../../services/http-service';
import { API_ENDPOINTS } from '../../../constants/api-endpoints';
import { useDispatch } from 'react-redux';
import { updateEmployeeStatus } from '../../../redux/slices/employees';

const EmployeeBoxContainer = styled.div`
    padding: 10px 20px;
    height: fit-content;
    border: 1px grey solid;
    border-radius: 8px;
    margin-bottom: 20px;
    @media only screen and (min-width: 1025px) {
        display: felx;
        justify-content: space-between;
    }
`;


export function EmployeeBoxComponent(
    props: Employee
): ReactElement {

    const dispatch = useDispatch();

    const handleOnChangeStatus = async (employee: Employee) => {
        const { data, error } = await putData(`${API_ENDPOINTS.EMPLOYEES}/${employee.id}`, { status: employee.status });
        if(!error) {
            dispatch(updateEmployeeStatus({id: employee.id||'', status: employee.status||''}))
        }
        else {
            alert('Sorry, error occured while chaning status');
        }
        return;
    }

    return (
        <EmployeeBoxContainer className='EmployeeBoxContainer'>
            <div className='employee-name-title'>
                <div className='employee-name'>
                    {props.name}
                </div>
                <div className='employee-title'>
                    {props.title}
                </div>
            </div>

            <div>
                <StatusBarComponent
                status={EMPLOYEES_STATUS}
                currentStatus={props.status||''}
                onChangeStatusClicked={(status: string)=>handleOnChangeStatus({...props, status})}/>
            </div>

        </EmployeeBoxContainer>
    );

}


