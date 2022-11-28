import { createGlobalStyle } from "styled-components";
import backgroundImg from "./assets/images/mainbg.jpg";
import backgroundImgH from "./assets/images/mainbg_h.jpg";

import MontserratW2 from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-regular.woff2";
import MontserratW from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-regular.woff";
import MontserratTTF from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-regular.ttf";
import MontserratSVG from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-regular.svg#Montserrat";

import Montserrat600EOT from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-600.eot?#iefix";
import Montserrat600W2 from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-600.woff2";
import Montserrat600W from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-600.woff";
import Montserrat600TTF from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-600.ttf";
import Montserrat600SVG from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-600.svg#Montserrat";

import Montserrat800EOT from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-800.eot?#iefix";
import Montserrat800W2 from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-800.woff2";
import Montserrat800W from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-800.woff";
import Montserrat800TTF from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-800.ttf";
import Montserrat800SVG from "./assets/fonts/montserrat-v25-latin/montserrat-v25-latin-800.svg#Montserrat";

import UncialAntiquaEOT from "./assets/fonts/uncial-antiqua-v20-latin/uncial-antiqua-v20-latin-regular.eot?#iefix";
import UncialAntiquaW2 from "./assets/fonts/uncial-antiqua-v20-latin/uncial-antiqua-v20-latin-regular.woff2";
import UncialAntiquaW from "./assets/fonts/uncial-antiqua-v20-latin/uncial-antiqua-v20-latin-regular.woff";
import UncialAntiquaTTF from "./assets/fonts/uncial-antiqua-v20-latin/uncial-antiqua-v20-latin-regular.ttf";
import UncialAntiquaSVG from "./assets/fonts/uncial-antiqua-v20-latin/uncial-antiqua-v20-latin-regular.svg#UncialAntiqua";

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

    /* montserrat-regular - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url() format('embedded-opentype'), /* IE6-IE8 */
        url(${MontserratW2}) format('woff2'), /* Super Modern Browsers */
        url(${MontserratW}) format('woff'), /* Modern Browsers */
        url(${MontserratTTF}) format('truetype'), /* Safari, Android, iOS */
        url(${MontserratSVG}) format('svg'); /* Legacy iOS */
    }
    /* montserrat-600 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url(${Montserrat600EOT}) format('embedded-opentype'), /* IE6-IE8 */
        url(${Montserrat600W2}) format('woff2'), /* Super Modern Browsers */
        url(${Montserrat600W}) format('woff'), /* Modern Browsers */
        url(${Montserrat600TTF}) format('truetype'), /* Safari, Android, iOS */
        url(${Montserrat600SVG}) format('svg'); /* Legacy iOS */
    }
    /* montserrat-800 - latin */
    @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: local(''),
    url(${Montserrat800EOT}) format('embedded-opentype'), /* IE8-IE8 */
    url(${Montserrat800W2}) format('woff2'), /* Super Modern Browsers */
    url(${Montserrat800W}) format('woff'), /* Modern Browsers */
    url(${Montserrat800TTF}) format('truetype'), /* Safari, Android, iOS */
    url(${Montserrat800SVG}) format('svg'); /* Legacy iOS */
    }

    /* uncial-antiqua-regular - latin */
    @font-face {
    font-family: 'Uncial Antiqua';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${UncialAntiquaEOT}) format('embedded-opentype'), /* IE6-IE8 */
        url(${UncialAntiquaW2}) format('woff2'), /* Super Modern Browsers */
        url(${UncialAntiquaW}) format('woff'), /* Modern Browsers */
        url(${UncialAntiquaTTF}) format('truetype'), /* Safari, Android, iOS */
        url(${UncialAntiquaSVG}) format('svg'); /* Legacy iOS */
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
