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

export const HeaderSearchContianer = styled.div `
    position: relative;
`

export const HeaderSearchButton = styled.button `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8px;
    background: transparent;
    color: #888;
    outline: none;
    border: none;
    font-size: 1.25rem;
`

export const HeaderSearch = styled.input `
    text-align: center;
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
            padding: 1rem 1rem 0 1rem;
        }
    }
`

export const CartNavItemsLi = styled.li `
    width: 175px;
`

export const CartQuantityIcon = styled.span`
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: .75rem;
    border-radius: 5px;
    padding: 2px;
    color: #fff;
    background-color: #14a76c;
`

