import styled from "styled-components";
import { COLORS, BORDERS, FONTS, STYLES } from "../../StyleProps";

export const CheckoutWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
