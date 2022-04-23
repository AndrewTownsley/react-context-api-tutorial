import styled from 'styled-components';
import { COLORS, BORDERS, FONTS, STYLES } from '../../StyleProps';

export const HeaderWrapper = styled.header `
    /* background-color: #fff; */
    background-color: ${COLORS.backgroundDark};
    /* color: #fff; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 95px;
    /* border-bottom: ${BORDERS.borderPurple}; */
    `

export const HeaderLogo = styled.h1 `
    font-family: 'Fjalla One', sans-serif;
    font-family: 'Oswald', sans-serif;
    padding-left: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        transition: all 0.3s ease-in-out;
        color: $${COLORS.white};
        &:hover {
            color: ${COLORS.accentBlue};
        }
    }
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
    border-radius: ${BORDERS.radiusSmall};
    &:focus {
        border: ${BORDERS.borderDark};
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
    width: 70px;
    &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        content: "";
        width: 0;
        height: 3px;
        background: ${COLORS.lightGray};
        margin: 0.5rem 0;
    }
    &:hover::after {
        transition: width ease 0.4s;
        content: "";
        position: absolute;
        bottom: -1px;
        content: "";
        /* display: ${(props) => props.display}; */
        width: 100%;
        height: 3px;
        border-radius: ${BORDERS.radiusSmall};
        background: ${COLORS.lightGray};
        margin: 0.5rem 0;
        }
`

export const CartQuantityIcon = styled.span`
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    font-size: .75rem;
    border-radius: 5px;
    padding: 4px 4px;
    color: ${COLORS.textDark};
    color: ${COLORS.textWhite};
    background-color: ${COLORS.accentRed};
`

export const HeaderCheckoutButtonCont = styled.div `
    display: flex;
    width: 110px;
    button {
        background: ${COLORS.accentYellow};
        color: ${COLORS.backgroundDark};
        margin: 0;
        padding: 0.65rem 1rem; 
        box-shadow: none;
        /* outline: 3px solid ${COLORS.accentLightBlue}; */
        box-shadow: ${STYLES.boxShadowLight};
        &:hover {
            box-shadow: ${STYLES.boxShadowLightHover};
        }   
        &:focus {
            outline: ${BORDERS.white};
        }
        }
    a {
        padding: 0;
    }
`

