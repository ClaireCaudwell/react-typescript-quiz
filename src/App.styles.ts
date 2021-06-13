import styled, { createGlobalStyle } from "styled-components/macro";

// import BGImage from "./images/beach.jpg";
import BGImage from "./images/books.jpg";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
html {
    height: 100%;
}
body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255,255,255, 0.7);
    border-radius: 10px;
    padding: 20px;
    margin-top: 50px;
    width: 700px;

    > p {
        color: #000;
    }

    .score {
        color: #000;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-size: 30px;
        font-weight: 600;
    }

    .start, .next {
        cursor: pointer;
        background-color: #4d94ff;
        border: none;
        border-radius: 7px;
        font-size: 20px;
        padding: 7px;
        transition: 0.2s;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        &:hover {
            background-color: #3385ff;
            transition: 0.2s ease;
        }
    }
`;