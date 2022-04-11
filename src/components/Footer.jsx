import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../StyleProps'
import { GiLindenLeaf } from 'react-icons/gi'
import { HeaderLogo } from '../components/Header/HeaderStyle'

const FooterWrapper = styled.footer`
    height: 200px;
    /* position: absolute; */
    /* bottom: 0; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
        <HeaderLogo>
                <GiLindenLeaf style={{color: `${COLORS.accentPurple}`, paddingRight: '10px'}}/>  fresh commerce
            </HeaderLogo>
        <p>Copyright 2022 by Andrew Townsley</p>
    </FooterWrapper>

  )
}

export default Footer