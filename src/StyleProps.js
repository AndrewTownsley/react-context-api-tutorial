import styled from "styled-components"

export const COLORS = {
    accentPurpleGrad: 'linear-gradient(90deg, rgba(0,180,63,1) 0%, rgba(0,188,88,1) 19%, rgba(0,158,195,1) 100%)',
    accentPurpleGradHover: 'linear-gradient(90deg, rgba(138,0,202,1) 0%, rgba(186,58,255,1) 50%, rgba(128,0,255,1) 100%)',
    accentGreen: '#00bc58',
    accentYellow: '#fccd04',
    accentLightBlue: '#009ec3',
    accentBlue: '#009ec3',
    accentRed: '#ff0000',
    accentRedFade: 'rgba(255, 0, 0, 0.3)',
    accentRedFadeBg: 'rgba(255, 0, 0, 0.1)',
    textReg: '#444',
    textLight: '#666',
    textDark: '#222',
    textWhite: '#fff',
    linkDark: '#444',
    linkLight: '#666',
    lightGray: '#e5e5e5',
    grayInputBg: '#f5f5f5', 
    white: 'rgb(250, 250, 250)',
    backgroundDark: '#1A1A1D',
}

export const BORDERS = {
    borderPrimary: '3px solid #e5e5e5',
    borderSecondary: '1px solid #e5e5e5',
    borderDark: '2px solid #444',
    borderAccent: '1px solid #a64ac9',
    borderActive: '3px solid #009ec3',
    borderBlue: '6px solid #009ec3',
    focus: '3px solid #222',
    radiusPrimary: '10px',
    radiusSecondary: '5px',
    radiusSmall: '2px',
}

export const FONTS = {
    sizeSmall: '0.75rem',
    sizeMedium: '1rem',
    sizeLarge: '1.25rem',
    sizeXLarge: '1.5rem',
    fontWeightPrimary: '400',
    fontWeightBold: '700',
}

export const STYLES = {
    paddingSecondary: '0.5rem',
    paddingPrimary: '1rem',
    paddingLayout: '2rem',
    marginSecondary: '0.5rem',
    marginPrimary: '1rem',
    marginLayout: '2rem',
    transitionFast: 'ease all 0.2s',
    transitionSlow: 'background ease all 0.5s',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
    boxShadowHover: '0px 8px 15px rgba(0, 0, 0, 0.3)',
    boxShadowLight: '0px 10px 15px rgba(0, 0, 0, 0.4)',
    boxShadowLightHover: '0px 10px 17px rgba(0, 0, 0, 1)'
}

export const Button = styled.button`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${COLORS.accentPurpleGrad};
    color: ${COLORS.textWhite};
    border: none};
    border-radius: ${BORDERS.radiusSmall};
    padding: 0.5rem 1rem;
    margin: ${STYLES.marginSecondary} 0;
    font-size: ${FONTS.sizeSmall};
    font-weight: ${FONTS.fontWeightBold};
    transition: ease all .2s;
    opacity: 1;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &:hover {
        opacity: 1;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.35);
        text-decoration: none;
    }
    &:focus-visible {
        outline: ${BORDERS.focus};
    }
    &:active {
        transform: translateY(2px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    }
`

