import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    border: 2px ${props => props.selected ? 'solid' : 'dashed'} ${props => props.selected ? '#25CD89' : '#243475'};
    box-shadow: 0px 0px 10px 2px ${props => props.selected ? '#25CD89' : 'transparent'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
        border: 2px ${props => props.selected ? 'solid' : 'dashed'} ${props => props.selected ? '#25CD89' : '#496475'};
    }
    
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #494A7C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Description = styled.div`
    font-size: 17px;
    color: #B8B8D4;
`;