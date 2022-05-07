import React from 'react'
import styled from 'styled-components';
import { ErrorMessage, useField } from 'formik';
import { BORDERS, COLORS, STYLES } from '../StyleProps';

const TextInputWrapper = styled.div`
    input {
        position: relative;
        width: 90%;
        background-color: ${COLORS.grayInputBg};
        border: none;
        /* outline: 2px solid ${COLORS.lightGray}; */
        outline: ${(props) => props.outline};
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
        <label 
            htmlFor={field.name}
        >
        </label>
            <input 
            // className={`${meta.touched && meta.error && 'is-invalid'}`}
            className={`${meta.touched && meta.error && 'is-invalid'}`}
            type="text" 
            autoComplete='off'
            onBlur={console.log("meta", meta)}
            // onBlur={console.log("field", field)}
            {...field}
            {...props}
            />
    
        <ErrorMessage component="div" name={field.name} className="error" />

    </TextInputWrapper>
  )
}

export default TextInput