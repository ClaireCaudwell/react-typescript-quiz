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
    /* background-image: url(${BGImage}); */
    /* background-size: cover; */
    background-color: #e6f0ff;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255, 0.7);
    border-radius: 10px;
    padding: 20px;
    max-width: 700px;
    margin: 20px 0;
    text-align: center;
    @media(min-width: 750px) {
        margin-top: 50px;
    }

    > p {
        color: #000;
    }

    .score {
        color: #000;
        font-size: 27px;
        margin: 20px 0;
        background-color: #cce0ff;
        padding: 10px;
        border-radius: 10px;
    }

    h1 {
        font-size: 30px;
        font-weight: 600;
    }

    .start, .next {
        cursor: pointer;
        background-color: #80b3ff;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        padding: 10px;
        transition: 0.2s;
        &:hover {
            background-color: #66a3ff;
            transition: 0.2s ease;
        }
    }
`;