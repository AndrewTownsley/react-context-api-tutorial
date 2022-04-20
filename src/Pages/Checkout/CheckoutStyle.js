import styled from "styled-components/macro";
import { COLORS, BORDERS, FONTS, STYLES } from "../../StyleProps";

export const CheckoutWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: ${COLORS.white};
`

// Cart Card styles...
export const CheckoutCard = styled.article`
    display: flex;
    /* align-items: start; */
    justify-content: space-between;
    border-top: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    max-width: 500px;
    padding: 1rem;
    /* height: auto; */
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
    div {
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    h5 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      /* height: 2rem; */
      /* padding: 0rem 0rem 1rem 0rem; */
      color: #000;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #666;
      }
    }
      span {
        color: ${COLORS.textDark};
        span {
          font-size: ${FONTS.sizeSmall};
          color: ${COLORS.textLight};
        }
    }
    button {
      font-size: ${FONTS.sizeSmall};
      padding: 0;
      border: none;
      background: none;
      color: ${COLORS.textDark};
      box-shadow: none;
      &:hover {
        box-shadow: none;
        background: ${COLORS.accentRedFade};
      }
    }
    /* p {
      padding: 0.5rem 1rem;
    } */
`

export const CheckoutCardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const CheckoutItemControls = styled.section`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* padding: 0 1rem; */
    div {
        padding: 0.5rem 0 0.15rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const PaymentFormWrapper = styled.section`
        display: flex;
        flex-direction: column;
        padding: ${STYLES.paddingLayout};
        border: ${BORDERS.borderSecondary};
        border-radius: ${BORDERS.radiusSecondary};
        box-shadow: ${STYLES.boxShadow};
        background: ${COLORS.textWhite};
        margin: 0;
        max-width: 80%;
        h3 {
          font-size: ${FONTS.sizeMedium};
          margin-bottom: ${STYLES.marginSecondary};
          border-bottom: ${BORDERS.borderPrimary};
    }
        input {
          width: 90%;
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
        select {
          background-color: ${COLORS.grayInputBg};
          border: none;
          outline: 2px solid ${COLORS.lightGray};
          padding: ${STYLES.paddingSecondary};
          margin: 0.5rem 0;
          border-radius: ${BORDERS.radiusSmall};
          transition: ${STYLES.transitionFast};
        }
` 

export const CheckoutSummaryContainer = styled.section`
    margin: 0 2rem 2rem 2rem;
`
