import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../StyleProps'
import { GiLindenLeaf } from 'react-icons/gi'
import { HeaderLogo } from '../components/Header/HeaderStyle'

const FooterWrapper = styled.footer`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    border-top: 3px solid #e5e5e5;
    background-color: ${COLORS.backgroundDark};
    div {
        padding-top: 3rem;
    }
    h1 {
        color: ${COLORS.accentLightBlue};
        color: ${COLORS.accentYellow};
    }
    p {
        color: ${COLORS.white};
    }
    a {
        text-decoration: underline;
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
        <HeaderLogo>
            fresh commerce
        </HeaderLogo>
        <p>Copyright 2022 by Andrew Townsley</p>
    </FooterWrapper>

  )
}

export default Footer