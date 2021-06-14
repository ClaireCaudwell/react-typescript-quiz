import styled from "styled-components/macro";

export const Wrapper = styled.div`
    max-width: 1100px;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    margin-bottom: 10px;

    p {
        font-size: 20px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .main-div {
        border: 1px solid #000;
        border-radius: 10px;
    }
    
`;

type ButtonWrapperProps = {
    correct: boolean,
    userClicked: boolean,
};

// button wrapper takes in props from the above type object
// must connect it after the element type defined inline with styled
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    width: 70%;
    margin: 10px;

    @media(min-width: 750px) {
        width: 45%;
    }

    button {
        width: 100%;
        cursor: pointer;
        user-select: none;
        border: none;
        border-radius: 7px;
        margin: 5px 0;
        padding: 7px;
        font-size: 20px;
        border: none;
        transition: all 0.2s ease;
        background-color: ${({ correct, userClicked }) => 
            correct 
                ? "#ccffcc" 
                : !correct && userClicked
                ? "#ff9999"
                : "#80b3ff"
        };
        border: ${({ correct, userClicked }) => 
            correct 
                ? "2px solid #66ff66"
                : !correct && userClicked
                ? "2px solid #ff4d4d"
                : "none"
        };
        &:hover {
            transition: 0.2s ease;
            background-color: ${({ correct, userClicked }) => 
            correct 
                ? "none"
                : !correct && userClicked
                ? "none"
                : "#66a3ff"
        };
        }
    }
`;
