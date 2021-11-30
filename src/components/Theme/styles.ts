import styled from "styled-components"

export const Container = styled.div`
    background-image: radial-gradient(#001356, #34073d, #ef745c);
    background-size: 400% 400%;
    animation: colors 15s ease infinite; 
    color: #FFFFFF;
    min-height: 100vh;

    @keyframes colors {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 100%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #203356;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;