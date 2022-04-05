import styled from 'styled-components';

export const HeaderWrapper = styled.header `
    background-color: #fff;
    /* color: #fff; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid #e5e5e5;
    `

export const HeaderLogo = styled.h1 `
    padding: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderSearch = styled.input `
    background-color: #f5f5f5;
    border: none;
    outline: 2px solid #e5e5e5;
    padding: 0.5rem 2rem;
    margin: 0 0 1rem 0;
    border-radius: 5px;
    &:focus {
        outline: 2px solid #14a76c;
    }
`

export const HeaderNav = styled.nav `
    height: 100%;
    ul {
        display: flex;
        justify-content: space-between;
        align-items: end;
        li a {
            padding: 1rem;
        }
    }
`

