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
        background-color: #003356;
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
            border: 2px dashed #243475;
            border-radius: 10px;
            color: #25CD89;
            outline: 0;
            font-size: 15px;
            background-color: transparent;
            transition: all ease-in 0.2s;

            &:focus {
                border: 2px solid #25CD89;
                box-shadow: 0px 0px 10px 2px #25CD89;
            }

            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill:active {
              -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
              -webkit-transition-delay: 9999s;
            }
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
        outline: none;
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
`;