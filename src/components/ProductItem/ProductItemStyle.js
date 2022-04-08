import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  margin: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 0.75rem;
  max-width: 200px;
  h5 {
    height: 2rem;
  }
  cursor: pointer;
  &:hover {
    border: 1px solid #14a76c;
  }
`

export const ProductCardImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`

export const ProductCardBtnCont = styled.div`
  /* height: 100px; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`