import styled from "styled-components";

export const CartWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 80%;
    min-height: 100vh;
    margin: 2rem auto;
    `
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    `

export const CartEmpty = styled.div`
    height: 100vh;
` 

export const CartHeader = styled.section`
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    div {
        display: flex;
        flex-direction: column;
    }
    a {
        padding: 1rem 0;
    }
    button {
        margin: 0;
    }
`