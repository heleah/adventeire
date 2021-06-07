import { createGlobalStyle } from 'styled-components';
import backgroundImg from './images/mainbg.jpg';

export default createGlobalStyle`
    :root {
        --primary: hsl(79, 96%, 40%);
        --primary-lightest: hsl(79,96%,94%);
        --primary-light: hsl(79,96%,70%);
        --primary-dark: hsl(79,96%,25%);
        --primary-darkest: hsl(79,96%,15%);

        --secondary: hsl(259,96%,40%);
        --secondary-lightest: hsl(259,96%,94%);
        --secondary-light: hsl(259,96%,70%);
        --secondary-dark: hsl(259,96%,25%);
        --secondary-darkest: hsl(259,96%,15%);

        --grey: hsl(197, 10%, 40%);
        --grey-lightest: hsl(197, 10%, 96%);
        --grey-light: hsl(197, 10%, 85%);
        --grey-dark: hsl(197, 10%, 25%);
        --grey-darkest: hsl(197, 10%, 10%);

        --grey-lightest-opa: hsla(197, 10%, 96%, 0.5);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    h1, h2, h3 {
        line-height: 1.2;
    }

    body, h1, h2, h3, p {
        margin: 0;
    }

    body {
        line-height: 1.5;
        font-size: 1.1rem;
        font-family: 'Montserrat', sans-serif;
        background: url(${backgroundImg});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    body * {
        font-family: 'Montserrat', sans-serif;
    }

    h2 {
        font-family: 'Uncial Antiqua', serif;
        font-size: 1.4rem;
        margin: 1rem;
        padding-top: 1rem;
        color: var(--grey-dark);
    }

    p {
        margin: 0 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;
