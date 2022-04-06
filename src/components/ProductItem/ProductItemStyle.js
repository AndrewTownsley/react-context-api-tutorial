import styled from 'styled-components';

export const ProductCard = styled.div`
  margin: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 0.75rem;
  max-width: 150px;
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