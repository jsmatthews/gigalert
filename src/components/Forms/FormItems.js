//@flow
import React from 'react'

type FormProps = {
	children: any
}
export const Form = (props: FormProps) => (
	<form>
		{
			props.children.map(child => {
				return <div key={child.props.id} className="form-row">{child}</div>
			})
		}
	</form>
)

type SubmitButtonProps = {
	onClick: Function
}
export const SubmitButton = ({ onClick }: SubmitButtonProps) => (
	<input type="submit" className="submit-button" value="Submit" onClick={(e) => onClick(e)} />
)

type FormTextInputProps = {
	ph: String,
	onChange: Function,
	value: Any,
	name: String,
	autocomplete: Boolean
}
export const FormTextInput = ({ ph, onChange, value, name, autocomplete }: FormTextInputProps) => (
	<input type="text" name={name} autoComplete={autocomplete} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)

export const FormPasswordInput = ({ ph, onChange, value, name, autocomplete }: FormTextInputProps) => (
	<input type="password" name={name} autoComplete={autocomplete} className="form-text-input" placeholder={ph} value={value} onChange={(e) => onChange(e)} />
)