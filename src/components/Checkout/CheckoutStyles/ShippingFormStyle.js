import styled from "styled-components";
import { BORDERS, COLORS, STYLES, FONTS } from "../../../StyleProps";

export const CheckoutFormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: 0 auto 2rem auto;
`

export const UserInfo = styled.section `
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    padding: 1rem;
    margin: 2rem 0;
    border: ${BORDERS.borderSecondary};
    border-radius: ${BORDERS.radiusSecondary};
    box-shadow: ${STYLES.boxShadow};
    text-align: left;
    background: ${COLORS.textWhite};
    div {
        :first-child {
            padding-bottom: 1rem;
        }
    }
    p strong {
        /* font-size: ${FONTS.sizeMedium}; */
    }
    p {
        font-size: ${FONTS.sizeSmall};
    }
    `

export const ShipFormInputCont = styled.section `
    padding: ${STYLES.paddingLayout};
    border: ${BORDERS.borderSecondary};
    border-radius: ${BORDERS.radiusSecondary};
    box-shadow: ${STYLES.boxShadow};
    background: ${COLORS.textWhite};
    h3 {
        padding-bottom: 1rem;
    }
    input {
        width: 90%;
        background-color: #f5f5f5;
        border: none;
        outline: 2px solid #e5e5e5;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: ${BORDERS.radiusSmall};
        transition: ${STYLES.transitionFast};
        &:focus {
            outline: ${BORDERS.borderDark};
        }
        &:hover {
            outline: ${BORDERS.borderDark};
        }
    }
`

export const ShipingOptions = styled.section`
    display: flex;
    flex-direction: column;
`

export const PaymentFormWrapper = styled.section`
    margin-bottom: 10rem;
`

