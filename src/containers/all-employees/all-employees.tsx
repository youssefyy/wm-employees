import './all-employees.css';
import { ReactElement, useEffect, useState } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../redux/types/global';
import { Employee } from '../../redux/types/employees';
import { allEmployeesSelector } from '../../redux/selectors/employees';
import { API_ENDPOINTS } from '../../constants/api-endpoints';
import { getData } from '../../services/http-service';
import { updateAllEmployees } from '../../redux/slices/employees';
import { EmployeeBoxComponent } from '../../components/shared/employee-box/employee-box';
import { ROUTES_CONSTANTS } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

const AllEmployeesContainer = styled.div`
    background-color: rgba(0,54,46,.3);
    display: flex;
    padding: 100px 15px 100px 15px;
    min-height: 100vh;
    @media only screen and (min-width: 1025px) {
        padding: 100px 65px 200px 65px;
    }
`;

const EmployeesBox = styled.div`
    background-color: white;
    padding: 20px 20px;
    height: fit-content;
    width: 100%;
    border-radius: 8px;
`;


const handleGetAllEmployees = async () => {
    const { data, error } = await getData(API_ENDPOINTS.EMPLOYEES);
    return { data, error };
}

export function AllEmployeesComponent(
    props: any
): ReactElement {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allEmployees: Employee[] = useSelector((state: GlobalState) => allEmployeesSelector(state));
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const prepareData = async () => {
            setIsPending(true);
            const { data: employees, error } = await handleGetAllEmployees();
            dispatch(updateAllEmployees({ allEmployees: employees }));
            setError(error);
            setIsPending(false);
        };
        prepareData();

    }, []);

    return (
        <AllEmployeesContainer>

            <EmployeesBox className='EmployeesBox'>
                {isPending && <div>Loading...</div>}
                {error && <div>Error while fetching data</div>}
                {allEmployees?.length === 0 &&
                    <div>
                        You have no employees. Please add employees from <strong className='cursor-pointer' onClick={() => navigate(ROUTES_CONSTANTS.ADD_EMPLOYEE)}>here</strong>.
                    </div>
                }
                {allEmployees?.length > 0 ?
                    allEmployees.map((employee: Employee, index: number) => {
                        return (
                            <EmployeeBoxComponent
                                key={index}
                                {...employee}
                            ></EmployeeBoxComponent>)
                    })
                    : null}
            </EmployeesBox>
        </AllEmployeesContainer>
    );

}


