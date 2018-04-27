import React from 'react'
import PropTypes from 'prop-types'

export const Form = (props) => (
	<form>
		{
			props.children.map(child => {
				return <div key={child.props.id} className="form-row">{child}</div>
			})
		}
	</form>
)

Form.propTypes = {
	children: PropTypes.array
}

export const SubmitButton = ({ onClick }) => (
	<input type="submit" className="submit-button" value="Submit" onClick={(e) => onClick(e)} />
)

SubmitButton.propTypes = {
	onClick: PropTypes.array
}

export const FormTextInput = ({ ph, onChange, value, name, autocomplete }) => (
	<input type="text" name={name} autoComplete={autocomplete} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)

FormTextInput.propTypes = {
	ph: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	name: PropTypes.string,
	autocomplete: PropTypes.string
}

export const FormPasswordInput = ({ ph, onChange, value, name, autocomplete }) => (
	<input type="password" name={name} autoComplete={autocomplete} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)

FormPasswordInput.propTypes = {
	ph: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	name: PropTypes.string,
	autocomplete: PropTypes.string
}