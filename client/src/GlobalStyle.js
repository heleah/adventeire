import { createGlobalStyle } from 'styled-components';
import backgroundImg from './images/mainbg.jpg';

export default createGlobalStyle`
    :root {
        --primary: hsl(132, 58%, 53%);
        --primary-lightest: hsl(132,58%,94%);
        --primary-light: hsl(132,58%,75%);
        --primary-dark: hsl(132,96%,25%);
        --primary-darkest: hsl(132,96%,10%);

        --secondary: hsl(27, 87%, 46%);
        --secondary-lightest: hsl(27,87%,94%);
        --secondary-light: hsl(27,87%,70%);
        --secondary-dark: hsl(27,96%,30%);
        --secondary-darkest: hsl(27,96%,10%);

        --grey: hsl(132, 10%, 40%);
        --grey-lightest: hsl(132, 10%, 96%);
        --grey-light: hsl(132, 10%, 85%);
        --grey-dark: hsl(132, 10%, 25%);
        --grey-darkest: hsl(132, 10%, 10%);

        --grey-lightest-opa: hsla(132, 10%, 96%, 0.5);
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