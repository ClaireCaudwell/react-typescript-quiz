import styled from "styled-components/macro";

export const Wrapper = styled.div`
    max-width: 1100px;
    background-color: rgba(255,255,255, 0.7);
    border-radius: 10px;
    padding: 20px;
    /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); */
    text-align: center;
    margin-bottom: 10px;

    p {
        font-size: 18px;
    }
`;

type ButtonWrapperProps = {
    correct: boolean,
    userClicked: boolean
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.2s ease;

    :hover {
        background-color: #3385ff;
        transition: 0.2s ease;
    }

    button {
        cursor: pointer;
        user-select: none;
        background-color: #4d94ff;
        border: none;
        border-radius: 7px;
        margin: 5px 0;
    }
`;
