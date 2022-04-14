import styled from "styled-components";
import { COLORS, STYLES, FONTS, BORDERS} from "../../StyleProps";

export const ProductDetailWrapper = styled.section`
`

export const DetailContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`

export const DetailContentImg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        border-radius: ${BORDERS.radiusPrimary};
    }
`

export const DetailContentInfo = styled.div`
    padding: ${STYLES.paddingPrimary};
    h1 {
        font-size: ${FONTS.sizeXLarge};
        padding-bottom: 1rem;
    }
    h2 {
        font-size: ${FONTS.sizeMedium};
        padding: 0.5rem 0;
    }
    p {
        font-size: ${FONTS.sizeMedium};
        color: ${COLORS.textLight};
    }
    button {
        margin: 0.5rem 0 0 0;
    }
`

export const DetailCartBtnCont = styled.div`
    display: flex;
    
`