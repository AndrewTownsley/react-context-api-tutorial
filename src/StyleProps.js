import styled from "styled-components"

export const COLORS = {
    accentPurpleGrad: 'linear-gradient(90deg, rgba(141,0,188,1) 0%, rgba(115,0,169,1) 50%, rgba(104,1,230,1) 100%)',
    accentPurpleGradHover: 'linear-gradient(90deg, rgba(138,0,202,1) 0%, rgba(186,58,255,1) 50%, rgba(128,0,255,1) 100%)',
    accentPurple: 'rgba(104,1,230,1)',
    accentYellow: '#fccd04',
    accentLightBlue: '#17e9e0',
    textReg: '#444',
    textLight: '#666',
    textDark: '#222',
    textWhite: '#fff',
    lightGray: '#e5e5e5',
    white: 'rgb(240, 240, 240)',
    backgroundDark: '#0b0c10'
}

export const BORDERS = {
    borderPrimary: '3px solid #e5e5e5',
    borderSecondary: '1px solid #e5e5e5',
    borderDark: '2px solid #444',
    borderAccent: '1px solid #a64ac9',
    borderActive: '3px solid #a64ac9',
    borderPurple: '6px solid rgba(104,1,230,1)',
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
}

export const Button = styled.button`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${COLORS.accentPurpleGrad};
    color: ${COLORS.textWhite};
    border: none};
    border-radius: ${BORDERS.radiusSmall};
    padding: 0.5rem 1rem;
    margin: ${STYLES.marginSecondary};
    font-size: ${FONTS.sizeSmall};
    font-weight: ${FONTS.fontWeightBold};
    /* outline: none; */
    transition: ease all .2s;
    opacity: 0.85;
    cursor: pointer;
    &:hover {
        opacity: 1;
    &:focus {
        outline: ${BORDERS.focus};
    }
`

