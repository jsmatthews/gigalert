import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'redux-mock-store'
import App from '../containers/App'

describe('Pass store', () => {
	const defaultApp = {
		searchBarValue: '',
		displayLoginModal: false,
		displaySignupModal: false,
		userMenuDisplayed: false
	}
	const mockStore = configureStore()
	let store, wrapper

	beforeEach(() => {
		store = mockStore(defaultApp)
		container = shallow(<Provider store={store}><App /></ Provider>)
	})


	test('App renders', () => {
		const div = document.createElement('div')
		ReactDOM.render(<App />, div)
	})
})

