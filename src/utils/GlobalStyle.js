import { createGlobalStyle } from 'styled-components'
import { device } from './devices'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6em; /* currently ems cause chrome bug misinterpreting rems on body element */
        line-height: 1.6;
        font-weight: 400;
        font-family: 'Source Sans Pro', sans-serif;
        color: ${colors.gallery};
    }
    
    h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-family: 'Source Serif Pro', serif;
    font-weight: 400;
    }

    h1 { font-weight: 700; font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem; }
    h2 { font-weight: 600; font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
    h3 { font-weight: 600; font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
    h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
    h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
    h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }
  
    @media ${device.tablet} {
        h1 { font-size: 5.0rem; }
        h2 { font-size: 4.2rem; }
        h3 { font-size: 3.6rem; }
        h4 { font-size: 3.0rem; }
        h5 { font-size: 2.4rem; }
        h6 { font-size: 1.5rem; }
    }
  
    p {margin-top: 0; }
  
    a {
        color: ${colors.cinnabar};
        font-weight: 700;
        text-decoration: underline;
        text-decoration-skip-ink: auto;
    }
    a:hover { color: ${colors.crimson}; }
  
    .button,
    button,
    input[type="submit"],
    input[type="reset"],
    input[type="button"] {
        display: inline-block;
        height: 38px;
        padding: 0 30px;
        color: #555;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: .1rem;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #bbb;
        cursor: pointer;
        box-sizing: border-box; }
    .button:hover,
    button:hover,
    input[type="submit"]:hover,
    input[type="reset"]:hover,
    input[type="button"]:hover,
    .button:focus,
    button:focus,
    input[type="submit"]:focus,
    input[type="reset"]:focus,
    input[type="button"]:focus {
        color: #333;
        border-color: #888;
        outline: 0; }
    .button.button-primary,
    button.button-primary,
    input[type="submit"].button-primary,
    input[type="reset"].button-primary,
    input[type="button"].button-primary {
        color: #FFF;
        background-color: #33C3F0;
        border-color: #33C3F0; }
    .button.button-primary:hover,
    button.button-primary:hover,
    input[type="submit"].button-primary:hover,
    input[type="reset"].button-primary:hover,
    input[type="button"].button-primary:hover,
    .button.button-primary:focus,
    button.button-primary:focus,
    input[type="submit"].button-primary:focus,
    input[type="reset"].button-primary:focus,
    input[type="button"].button-primary:focus {
        color: #FFF;
        background-color: #1EAEDB;
        border-color: #1EAEDB; }
  
    input[type="email"],
    input[type="number"],
    input[type="search"],
    input[type="text"],
    input[type="tel"],
    input[type="url"],
    input[type="password"],
    textarea,
    select {
        height: 38px;
        padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
        background-color: #fff;
        border: 1px solid #D1D1D1;
        border-radius: 4px;
        box-shadow: none;
        box-sizing: border-box; }
    /* Removes awkward default styles on some inputs for iOS */
    input[type="email"],
    input[type="number"],
    input[type="search"],
    input[type="text"],
    input[type="tel"],
    input[type="url"],
    input[type="password"],
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
                appearance: none; }
    textarea {
        min-height: 65px;
        padding-top: 6px;
        padding-bottom: 6px; }
    input[type="email"]:focus,
    input[type="number"]:focus,
    input[type="search"]:focus,
    input[type="text"]:focus,
    input[type="tel"]:focus,
    input[type="url"]:focus,
    input[type="password"]:focus,
    textarea:focus,
    select:focus {
        border: 1px solid #33C3F0;
        outline: 0; }
    label,
    legend {
        display: block;
        margin-bottom: .5rem;
        font-weight: 600; }
    fieldset {
        padding: 0;
        border-width: 0; }
    input[type="checkbox"],
    input[type="radio"] {
        display: inline; }
    label > .label-body {
        display: inline-block;
        margin-left: .5rem;
        font-weight: normal; }

    ul { list-style: circle inside; }
    ol { list-style: decimal inside; }
    ol, ul {
        padding-left: 0;
        margin-top: 0;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
        margin: 1.5rem 0 1.5rem 3rem;
        font-size: 90%;
    }
    li { margin-bottom: 1rem; }
  
    code {
        padding: .2rem .5rem;
        margin: 0 .2rem;
        font-size: 90%;
        white-space: nowrap;
        background: #F1F1F1;
        border: 1px solid #E1E1E1;
        border-radius: 4px; }
    pre > code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre; }
  
    th,
    td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #E1E1E1; }
    th:first-child,
    td:first-child {
        padding-left: 0; }
    th:last-child,
    td:last-child {
        padding-right: 0; }
  
    button,
    .button {
        margin-bottom: 1rem; }
    input,
    textarea,
    select,
    fieldset {
        margin-bottom: 1.5rem; }
    pre,
    blockquote,
    dl,
    figure,
    table,
    p,
    ul,
    ol,
    form {
        margin-bottom: 2.5rem; }
 
    hr {
        margin-top: 3rem;
        margin-bottom: 3.5rem;
        border-width: 0;
        border-top: 1px solid #E1E1E1;
    }
`