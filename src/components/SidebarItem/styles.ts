import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;

    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;

export const IconArea = styled.div<{ active: boolean; }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.3s;
    &:hover {
        background-color: ${props => props.active ? '#25CD69' : '#494A6C'};
        transition: all ease-out 0.2s;
        box-shadow: 0px 0px 15px 2px ${props => props.active ? '#25CD69' : '#494A6C'};
        transition: all ease-in 0.3s;
    }
`;

export const Point = styled.div<{ active: boolean; }>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25CD89' : '#003356'};
    box-shadow: 0px 0px 10px 1px ${props => props.active ? '#25CD89' : 0};
    transition: all ease-in 0.3s;

    &:hover {
        background-color: ${props => props.active ? '#25CD89' : '#007991'};
    }


`;