import styled from "styled-components";
import { COLORS, BORDERS, FONTS, STYLES } from "../../StyleProps";

export const CheckoutWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
export const CheckoutCard = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    /* text-align: center; */
    margin: 1rem;
    border: 1px solid #e5e5e5;
    /* border-radius: ${BORDERS.radiusPrimary}; */
    max-width: 220px;
    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0rem 1rem 0 1rem;
    }
    h5 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      height: 2rem;
      padding-bottom: ${STYLES.paddingSecondary};
      color: #000;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #666;
      }
    }
    p {
      padding: 0.5rem 0 0 0;
    }
`