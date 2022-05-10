import React from 'react'
import styled from 'styled-components';
import { useField, Form, FormikProps, Formik, ErrorMessage } from 'formik';
import { BORDERS, COLORS, STYLES } from '../StyleProps';

const TextInputWrapper = styled.div`
    input {
        position: relative;
        display: flex;
        flex-direction: column;
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
                /* outline: ${BORDERS.borderDark}; */
                outline: ${(props) => props.outline};
            }
            &:hover {
                outline: ${(props) => props.outline};
            }
    }
`

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  return (
    <TextInputWrapper>
             <label htmlFor={props.id || props.name}>{label}</label>

        {
            meta.touched && meta.error ?
                <>
                    <input 
                        className={`${meta.touched && meta.error && 'is-invalid'}`}
                        autoComplete='off'
                        outline={`2px solid ${COLORS.red}`}
                        // onBlur={console.log("meta", meta, "field", field, "props", props)}
                        {...field}
                        {...props}
                        />
                    <ErrorMessage 
                    component="div" 
                    name={field.name} 
                    className="error" 
                    />
                </>
                :
                    <input 
                        // className={`${meta.touched && meta.error && 'is-invalid'}`}
                        autoComplete='off'
                        outline={`2px solid ${COLORS.lightGray}`}
                        // onBlur={console.log("meta", meta, "field", field, "props", props)}
                        // onBlur={(e) => console.log(e.target.value)}
                        // value={field.value}
                        {...field}
                        {...props}
                    />
            }

    </TextInputWrapper>
  )
}

export default TextInput