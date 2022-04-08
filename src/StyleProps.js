import styled from "styled-components"

export const COLORS = {
    accentGreen: '#0dc47b',
    accentGreenHover: '#00be72',
    textReg: '#444',
    textLight: '#666',
    textDark: '#222',
    lightGray: '#e5e5e5',
}

export const BORDERS = {
    borderPrimary: '3px solid #e5e5e5',
    borderSecondary: '1px solid #e5e5e5',
    focus: '1px solid #0dc47b',
    radiusPrimary: '8px',
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
    background-color: ${COLORS.accentGreen};
    color: #fff;
    border: none;
    border-radius: ${BORDERS.radiusSecondary};
    padding: 0.5rem 1rem;
    margin: ${STYLES.marginSecondary};
    font-size: ${FONTS.sizeSmall};
    font-weight: ${FONTS.fontWeightBold};
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${COLORS.accentGreenHover};
    }
    &:focus {
        ${BORDERS.focus}
    }
`
