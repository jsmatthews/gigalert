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

export const FormTextInput = ({ ph, onChange, value, name, autocomplete }) => (
    <input type="text" name={name} autoComplete={autocomplete} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)

export const FormPasswordInput = ({ ph, onChange, value, name, autocomplete }) => (
    <input type="password" name={name} autoComplete={autocomplete} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)