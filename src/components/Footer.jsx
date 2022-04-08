import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    height: 200px;
    /* position: ; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    width: 100vw;
    border-top: 3px solid #e5e5e5;
    margin-top: 2rem;
    div {
        padding-top: 3rem;
    }
`

const Footer = () => {
  return (
    <FooterWrapper>
        <div>
            <Link to='/'>
                Shop
            </Link>
            <Link to='/cart'>
                Cart
            </Link>
        </div>
        <p>Copyright 2022 by Andrew Townsley</p>
    </FooterWrapper>

  )
}

export default Footer