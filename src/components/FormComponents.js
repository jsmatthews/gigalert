import React from 'react'

export const Form = (props) => (
    <form>
        {
            props.children.map(child => {
                return <div key={child.props.id} className="form-row">{child}</div>
            })
        }
    </form>
)

export const SubmitButton = ({ onClick }) => (
    <input type="submit" className="submit-button" value="Submit" onClick={(e) => onClick(e)} />
)

export const FormTextInput = ({ ph, onChange, value, name }) => (
    <input type="text" name={name} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)