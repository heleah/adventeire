import { createGlobalStyle } from 'styled-components';
import backgroundImg from './assets/images/mainbg.jpg';
import backgroundImgH from './assets/images/mainbg_h.jpg';

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

        --tertiary: hotpink;

        --grey: hsl(132, 10%, 40%);
        --grey-lightest: hsl(132, 10%, 96%);
        --grey-light: hsl(132, 10%, 85%);
        --grey-dark: hsl(132, 10%, 25%);
        --grey-darkest: hsl(132, 10%, 10%);

        --grey-lightest-opa: hsla(132, 10%, 96%, 0.6);
        --grey-opa: hsla(132,10%,40%, 0.6);
        --secondary-lightest-opa: hsla(27,87%,94%, 0.5);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    h1, h2, h3, h4 {
        line-height: 1.2;
    }

    body, h1, h2, h3, h4, p {
        margin: 0;
    }

    body {
        max-width: 30rem;
        margin: 0 auto;
        line-height: 1.5;
        font-size: 1.1rem;
        font-family: 'Montserrat', sans-serif;
        background: url(${backgroundImg});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;

        @media (min-width: 768px) {
            background: url(${backgroundImgH});
            background-position: left;
        }
    }

    body * {
        font-family: 'Montserrat', sans-serif;
    }

    h2 {
        font-family: 'Uncial Antiqua', serif;
        font-size: 1.4rem;
        padding: 1rem;
        color: var(--grey-dark);
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    .rmsc {
        --rmsc-main: var(--primary);
        --rmsc-hover: #f1f3f5;
        --rmsc-selected: var(--secondary-light);
        --rmsc-border: none;
        --rmsc-gray: var(--primary-darkest);
        --rmsc-bg: var(--grey-lightest);
        --rmsc-spacing: 10px;
        --rmsc-radius: 4px;
        --rmsc-height: 38px;
    }
`;
