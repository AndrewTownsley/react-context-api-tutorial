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
      padding: 1rem 0rem 1rem 0rem;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #666;
      }
    }
    p {
      padding: 0.5rem 1rem;
    }
`

export const CheckoutCardImgCont = styled.div`
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

export const CheckoutSummary = styled.section`
    margin: 2rem;
`
