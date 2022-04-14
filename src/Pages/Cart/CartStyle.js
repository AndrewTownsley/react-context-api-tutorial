import styled from "styled-components";
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

export const CartEmpty = styled.div`
    height: 100vh;
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