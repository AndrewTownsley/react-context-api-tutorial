import styled from "styled-components"

export const COLORS = {
    accentPurple: 'linear-gradient(90deg, rgba(166,74,201,1) 0%, rgba(157,0,217,1) 50%, rgba(164,69,252,1) 100%)',
    accentPurpleHover: '#9e3cb8',
    accentYellow: '#fccd04',
    accentLightBlue: '#17e9e0',
    textReg: '#444',
    textLight: '#666',
    textDark: '#222',
    lightGray: '#e5e5e5',
    white: '#fff',
}

export const BORDERS = {
    borderPrimary: '3px solid #e5e5e5',
    borderSecondary: '1px solid #e5e5e5',
    borderDark: '2px solid #444',
    borderAccent: '1px solid #a64ac9',
    borderActive: '3px solid #a64ac9',
    focus: '1px solid #a64ac9',
    radiusPrimary: '10px',
    radiusSecondary: '5px',
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
}

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${COLORS.accentPurple};
    color: ${COLORS.white};
    border: none};
    border-radius: ${BORDERS.radiusSecondary};
    padding: 0.5rem 1rem;
    margin: ${STYLES.marginSecondary};
    font-size: ${FONTS.sizeSmall};
    font-weight: ${FONTS.fontWeightBold};
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${COLORS.accentPurpleHover};
    &:focus {
        ${BORDERS.focus}
    }
`

