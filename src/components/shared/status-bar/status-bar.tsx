import './status-bar.css';
import { ReactElement } from "react";
import styled from 'styled-components';
import { StatusBarProps } from './status-bar.types';

const StatusBarContainer = styled.div`
    border: 1px solid lightgray;
    display: felx;
    `;

const StatusBox = styled.div`
    position: relative;
    height: 75px;
    width: 180px;
    &:hover {
        color: #eb3b81;
        cursor: pointer;
    }
`;

const StatusTriangle = styled.div`
    width: 0;
    height: 0;
    border-width: 37.5px 0 37.5px 37.5px;
`;


export function StatusBarComponent(
    props: StatusBarProps
): ReactElement {

    return (
        <StatusBarContainer className='StatusBarContainer'>
            {props.status.map((status: string, index: number) => {

                return (
                    <div key={index} onClick={()=>props.onChangeStatusClicked(status)}>
                        <StatusBox
                        className={`StatusBox ${props.currentStatus === status && 'active-StatusBox'}`}>
                            <div className='status-text'>{status}</div>
                        </StatusBox>

                        {index + 1 !== props.status.length ?
                            <div style={{ position: "relative" }}>
                                <StatusTriangle
                                className={`StatusTriangle ${props.currentStatus === status && 'active-StatusTriangle'}`}/>
                            </div>
                            : null}
                    </div>
                )
            })}


        </StatusBarContainer>
    );

}


