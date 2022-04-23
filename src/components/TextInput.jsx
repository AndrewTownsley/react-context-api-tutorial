import React from 'react'
import styled from 'styled-components';
import { useField } from 'formik';
import { BORDERS, COLORS, STYLES } from '../StyleProps';

const TextInputWrapper = styled.div`
    input {
        width: 90%;
        background-color: ${COLORS.grayInputBg};
        border: none;
        outline: 2px solid ${COLORS.lightGray};
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: ${BORDERS.radiusSmall};
        transition: ${STYLES.transitionFast};
        &:focus {
            outline: ${BORDERS.borderDark};
        }
        &:hover {
            outline: ${BORDERS.borderDark};
        }
    }
`

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  return (
    <TextInputWrapper>
        <label htmlFor={field.name}></label>
        <input 
            type="text" 
            autoComplete='off'
            {...field}
            {...props}
        />
    </TextInputWrapper>
  )
}

export default TextInput