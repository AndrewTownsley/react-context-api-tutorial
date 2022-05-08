import styled from 'styled-components/macro';
import { COLORS, BORDERS, FONTS, STYLES } from "../../StyleProps";

export const CartWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${COLORS.white};
    height: 100%;
    min-height: 90vh;
`

export const CartHeader = styled.header`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const CartContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    max-width: 90%;
    margin: 1rem auto;
    `
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    `

export const CartSummary = styled.section`
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: ${BORDERS.borderSecondary};
    border-radius: ${BORDERS.radiusSecondary};
    padding: 1rem 1rem 0 1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    background: ${COLORS.textWhite};
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        h3 {
            width: 100%;
            border-bottom: ${BORDERS.borderPrimary};
            margin-bottom: ${STYLES.marginSecondary};
        }
        h4 {
            display: flex;
            justify-content: space-between;
            font-size: ${FONTS.sizeMedium};
            font-weight: 100;
            span {
                color: ${COLORS.textReg};
            }
        }
    }
    a {
        padding: 1rem 0;
        width: 100%;
    }
    button {
        width: 100%;
        margin: 0;
    }
`

export const CartItemCard = styled.article`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: flex-end;
    /* margin: 0 1rem 0 1rem; */
    border-top: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    max-width: 550px;
    height: auto;
    background: ${COLORS.textWhite};
    box-shadow: ${STYLES.boxShadow};
    :first-child {
      border-top-left-radius: ${BORDERS.radiusSecondary};
      border-top-right-radius: ${BORDERS.radiusSecondary};
    }
    :last-child {
        border-bottom: 1px solid #e5e5e5;
        border-bottom-left-radius: ${BORDERS.radiusSecondary};
        border-bottom-right-radius: ${BORDERS.radiusSecondary};
    }
    section {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      padding: 0rem 1rem 0 1rem;
    }
    h5 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      height: 2rem;
      padding: 1rem 0rem 0.5rem 0rem;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #666;
      }
      a {
          color: ${COLORS.textReg};
        &:hover {
            text-decoration: underline;
        }
      }
    }
    p {
      padding: 0.5rem 1rem;
    }
`

export const CartItemCardImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* border-top-right-radius: ${BORDERS.radiusPrimary}; */
    /* border-top-left-radius: ${BORDERS.radiusPrimary}; */
  }
`

export const CartItemControls = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    div {
        padding: 0.5rem 0 0.15rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const CartEmpty = styled.div`
    height: calc(100vh - 95px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem auto;
`

export const ClearCartBtn = styled.button`
     appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${COLORS.accentPurpleGrad};
    background: white;
    color: ${COLORS.textDark};
    border: none};
    border-radius: ${BORDERS.radiusSmall};
    padding: 0.5rem 1rem;
    margin: ${STYLES.marginSecondary} 0;
    font-size: ${FONTS.sizeSmall};
    font-weight: ${FONTS.fontWeightBold};
    transition: ease all .2s;
    opacity: 1;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &:hover {
        opacity: 1;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.35);
        text-decoration: none;
    }
    &:focus-visible {
        outline: ${BORDERS.focus};
    }
    &:active {
        transform: translateY(2px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    }
`