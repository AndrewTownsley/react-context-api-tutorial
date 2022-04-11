import styled from 'styled-components';
import { COLORS, BORDERS, FONTS, STYLES } from '../../StyleProps';

export const HeaderWrapper = styled.header `
    background-color: #fff;
    /* color: #fff; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #e5e5e5;
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
    top: 25px;
    left: 20px;
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
    margin: 1rem ;
    border-radius: 5px;
    &:focus {
        outline: ${BORDERS.borderDark};
    }
    &:hover {
        outline: ${BORDERS.borderDark};
    }
`

export const HeaderNav = styled.nav `
    height: 100%;
    padding: 0 1rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
    `

export const CartNavItemsLi = styled.li `
    position: relative;
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
        position: absolute;
        bottom: -14px;
        content: "";
        display: ${(props) => props.display};
        width: 100%;
        height: 3px;
        background: ${COLORS.accentPurpleGrad};
        margin: 0.5rem 0;
    }
    }
    a {
        color: ${(props) => props.color};
            /* &:hover {
                color: ${COLORS.accentPurpleGrad};
            } */
    }
`

export const CartQuantityIcon = styled.span`
    position: absolute;
    top: 19px;
    right: 25px;
    font-size: .75rem;
    border-radius: 5px;
    padding: 1px 4px;
    color: #fff;
    background-color: ${COLORS.accentLightBlue};
`

export const HeaderCheckoutButtonCont = styled.div `
    display: flex;
    button {
        margin: 0;
        padding: 0.65rem 1rem;    
        }
    a {
        padding: 0;
    }
`

