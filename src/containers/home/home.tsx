import './home.css';
import { ReactElement } from "react";
import styled from 'styled-components';
import { IMAGES } from '../../constants/images';
import { ButtonComponent } from '../../components/shared/button/button';
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from '../../constants/routes';

const HomeContainer = styled.div`
    color:white;
`;

const BackgroundImage = styled.img`
    max-width: 100%;
    height: 75vh;
    position: absolute;
    z-index: -1;
    height: 100vh;
    @media only screen and (min-width: 1025px) {
        width: 100%;
    }
`;

const Banner = styled.div`
    padding-top: 100px;
    display: flex;
    align-content: center;
    align-items: flex-start;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1025px) {
        padding-top: 120px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const BannerImage = styled.img`
    max-width: 90%;
`;

export function HomeComponent(
    props: any
): ReactElement {
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <BackgroundImage src={IMAGES.home_bg}/>
            <Banner className='Banner'>
                <div className='banner-text-container'>
                    <div className='banner-text-title'>
                        Global HR solutions at your fingertips
                    </div>
                    <div className='banner-text-subtitle'>
                        We’ve streamlined international hiring, onboarding and human resource management across 160+ countries. No local presence needed. No surprises.
                    </div>
                </div>
                <div className='BannerImage-container'>
                    <BannerImage src={IMAGES.banner_image}/>
                </div>
            </Banner>
            <div className='buttons-container'>
                <ButtonComponent type='primary' text='Add Employee' onClick={async() => {
                    await window?.scrollTo(0, 0);
                    navigate(ROUTES_CONSTANTS.ADD_EMPLOYEE);
                }} />
                <ButtonComponent type='secondary' text='All Employees' onClick={async() => {
                    await window?.scrollTo(0, 0);
                    navigate(ROUTES_CONSTANTS.ALL_EMPLOYEES);
                }} />
            </div>
            
        </HomeContainer>
    );

}


