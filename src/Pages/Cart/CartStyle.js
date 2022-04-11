import styled from "styled-components";

export const CartWrapper = styled.div`
    max-width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    `
export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    `

export const CartEmpty = styled.div`
    height: 100vh;
` 

export const CartHeader = styled.section`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
    }
`