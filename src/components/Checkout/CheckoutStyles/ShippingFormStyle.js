import styled from "styled-components/macro";
import { BORDERS, COLORS, STYLES, FONTS } from "../../../StyleProps";

export const CheckoutFormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 80%; */
    margin: 0;
    h3 {
        font-size: ${FONTS.sizeMedium};
        margin-bottom: ${STYLES.marginSecondary};
        border-bottom: ${BORDERS.borderPrimary};
    }
    /* section {
        display: flex;
        flex-direction: column;
        padding: ${STYLES.paddingLayout};
        border: ${BORDERS.borderSecondary};
        border-radius: ${BORDERS.radiusSecondary};
        box-shadow: ${STYLES.boxShadow};
        background: ${COLORS.textWhite};
        margin: 0 0 2rem 0;
        width: 80%;
    } */
`

export const CheckoutHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

export const ShippingFormCont = styled.section`
    /* width: 100%; */
    margin: 0 2rem;
`

export const CheckoutSummaryTable = styled.section`
    max-width: 500px;
`

export const CheckoutSummaryTotals = styled.section`
        padding: 1rem 1rem 0.5rem 1rem;
        border: ${BORDERS.borderSecondary};
        border-bottom-right-radius: ${BORDERS.radiusSecondary};
        border-bottom-left-radius: ${BORDERS.radiusSecondary};
        box-shadow: ${STYLES.boxShadow};
        background: ${COLORS.textWhite};
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                padding-bottom: 0.5rem;
            }
        }
        background: ${COLORS.textWhite};
`

export const UserInfo = styled.section `
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    padding: 1rem;
    margin: 0 0 2rem 0;
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

export const ShipFormInputCont = styled.form `
    padding: ${STYLES.paddingLayout};
    border: ${BORDERS.borderSecondary};
    border-radius: ${BORDERS.radiusSecondary};
    box-shadow: ${STYLES.boxShadow};
    background: ${COLORS.textWhite};
    width: 80%;
    }
    select {
        background-color: ${COLORS.grayInputBg};
        border: none;
        outline: 2px solid ${COLORS.lightGray};
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
button {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
}
`

export const StateSelectLabel = styled.label `
    /* max-width: 90%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    select {
        padding: 0.5rem 0;
        width: 50%;
    }
`

export const ShipingOptions = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${STYLES.paddingLayout};
    border: ${BORDERS.borderSecondary};
    border-radius: ${BORDERS.radiusSecondary};
    box-shadow: ${STYLES.boxShadow};
    background: ${COLORS.textWhite};
    margin: 2rem 0;
    width: 80%;
    label {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        margin-left: 1rem;
    }
`

