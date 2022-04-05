import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';

const RatingCard = styled.div`
    pointer-events: none;
`

const RatingOnCard = ({ rating, onClick}) => {
    return (
        <RatingCard>
            <p>Rating Component</p>
            {
                [...Array(5)].map((_, i) => (
                    <span key={i} onClick={() => onClick(i)}>
                        {
                            rating > i ?
                            (
                                <AiFillStar fontSize="15px" />
                            )
                             :
                            (
                                <AiOutlineStar fontSize="15px" />
                            )
                        }
                    </span>
                ))
            }
        </RatingCard>
    )
}

export default RatingOnCard
