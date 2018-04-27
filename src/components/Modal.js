import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const modalRoot = document.body

export const ModalHeader = ({ title }) => (
	<div className='modal-header'>
		{title}
	</div>
)

ModalHeader.propTypes = {
	title: PropTypes.string
}

export class Modal extends Component {
	constructor(props) {
		super(props)
		this.modalContainer = document.createElement('div')
		this.modalContainer.className = props.modalContainerStyle || 'modal-container'

		this.backgroundEl = document.createElement('div')
		this.backgroundEl.className = props.modalBackgroundStyle || 'modal-background'

		this.modalEl = document.createElement('div')
		this.modalEl.className = props.modalStyle || 'modal'
	}

	componentDidMount() {
		this.backgroundEl.addEventListener('click', () => this.props.closeModal(this.props.type))
		this.modalContainer.appendChild(this.backgroundEl)
		this.modalContainer.appendChild(this.modalEl)

		modalRoot.addEventListener('keyup', (e) => {
			if (e.keyCode !== 27) return
			this.props.closeModal(this.props.type)
		})

		modalRoot.appendChild(this.modalContainer)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.modalContainer)
	}

	render() {
		return createPortal(this.props.children, this.modalEl)
	}
}

Modal.propTypes = {
	modalContainerStyle: PropTypes.string,
	modalBackgroundStyle: PropTypes.string,
	modalStyle: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.array,
	closeModal: PropTypes.func
}