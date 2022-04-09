import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';

const RatingCard = styled.div`
    pointer-events: none;
`

const RatingOnCard = ({ rating, onClick}) => {
    return (
        <RatingCard>
            {
                [...Array(5)].map((_, i) => (
                    <span key={i} onClick={() => onClick(i)}>
                        {
                            rating > i ?
                            (
                                <AiFillStar fontSize="15px" color="#ffe400" />
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
