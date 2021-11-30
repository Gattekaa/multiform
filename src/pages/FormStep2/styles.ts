import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
        color: #25CD89;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #103356;
        margin: 30px 0;
    }
    label {
        font-size: 13px;
        
        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #003356;
        }
    }

    button {
        background-color: transparent;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 2px solid #25CD89;
        border-radius: 30px;
        cursor: pointer;
        
        margin-top: 30px;
        transition: all ease-in 0.2s;

        &:hover {
            background-color: #25CD89;
            transition: all ease-in 0.2s;
            box-shadow: 0px 0px 10px 2px #25CD89;
        }

        &:active {
            transition: all ease-out 0.2s;
            box-shadow: 0px 0px 20px 2px #25CD89;
        }
    }

    .backButton {
        font-size: 14px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
        

    }
`;