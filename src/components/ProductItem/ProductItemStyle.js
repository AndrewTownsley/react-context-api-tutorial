import styled from 'styled-components';
import { BORDERS, COLORS, STYLES, FONTS } from '../../StyleProps';

export const ProductCard = styled.div`
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
    &:hover {
      color: #666;
    }
  }
  p {
    padding: 0.5rem 0 0 0;
  }
  cursor: pointer;
`

export const ProductCardImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* border-top-right-radius: ${BORDERS.radiusPrimary}; */
    /* border-top-left-radius: ${BORDERS.radiusPrimary}; */
  }
`

export const ProductCardBtnCont = styled.div`
  /* height: 100px; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const PriceClearance = styled.span`
  color: ${COLORS.textLight};
  text-decoration: line-through;
`