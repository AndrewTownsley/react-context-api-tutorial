import styled from "styled-components";
import { BORDERS, FONTS, STYLES, COLORS } from "../../StyleProps";

export const FilterWrapper = styled.div`
      border-right: 3px solid #e5e5e5;
      h3 {
        padding: 1rem;
        font-size: ${FONTS.sizeMedium};
        border-bottom: ${BORDERS.borderSecondary}
      }
      h4 {
        font-size: ${FONTS.sizeSmall};
      }
      ul {
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
        /* align-items: center; */
        text-align: left;
        border-bottom: ${BORDERS.borderSecondary}; 
        label {
          font-size: ${FONTS.sizeSmall};
        }
        input {
            margin: ${STYLES.marginSecondary};
        }
      }
`

export const FilterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.white};
    color: ${COLORS.textDark};
    border: ${props => props.border};
    border-radius: ${BORDERS.radiusSecondary};
    padding: 0.25rem;
    margin: ${STYLES.marginSecondary};
    font-size: ${FONTS.sizeSmall};
    font-weight: ${FONTS.fontWeightBold};
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${COLORS.lightGray};
    &:focus {
        ${BORDERS.focus}
    }
`
