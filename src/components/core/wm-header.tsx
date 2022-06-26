import '../../styles/styles.css';
import './wm-header.css';
import { ReactElement, useEffect, useState } from "react";
import styled from 'styled-components';
import { IMAGES } from "../../constants/images";
import { useNavigate } from 'react-router-dom';
import { ROUTES_CONSTANTS } from '../../constants/routes';

const WHHeaderContainer = styled.div`
    background: rgba(0,54,46,.7);
    backdrop-filter: blur(5px);
    padding: 15px;
    height: 50px;
    position: fixed;
    z-index: 9;
    top: 0px;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media only screen and (min-width: 1025px) {
        width: -webkit-fill-available;
        padding-right: 65px;
        padding-left: 65px;
    }
`;

const LogoImage = styled.img`
    width: 150px;
    margin-right: 10px;
    @media only screen and (min-width: 1025px) {
        margin-right: 12px;
    }
`;

const NavbarRoutes = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media only screen and (min-width: 1025px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const WMRoutes = styled.div`
    margin-bottom: 10px;
    padding-right: 30px;
    &:hover {
        color: #eb3b81;
        cursor: pointer;
    }
    @media only screen and (min-width: 1025px) {
        margin-right: 10px;
    }
`;

export function WMHeader(
    props: any
): ReactElement | null {
    const navigate = useNavigate();
    const [onTop, setOnTop] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => setOnTop(window.pageYOffset < 5)
            );
        }
    }, [window.pageYOffset]);


    return (
        <WHHeaderContainer className={`${onTop && 'wh-header-container__on-top'}`}>
            <div>
                <LogoImage src={IMAGES.wm_logo} className="cursor-pointer" onClick={async () => {
                    await window?.scrollTo(0, 0);
                    navigate(ROUTES_CONSTANTS.HOME)
                }} />
            </div>
            <NavbarRoutes>
                <WMRoutes onClick={()=>navigate(ROUTES_CONSTANTS.ADD_EMPLOYEE)}>Add Emloyee</WMRoutes>
                <WMRoutes onClick={()=>navigate(ROUTES_CONSTANTS.ALL_EMPLOYEES)}>All Emloyees</WMRoutes>
            </NavbarRoutes>
        </WHHeaderContainer>);

}
