//@flow
import { createSelector } from 'reselect'

const getApp = state => state.app
const getUsers = state => state.users
const getEvents = state => state.events
const getArtists = state => state.artists

export const getUsersSelector = createSelector(
	[getUsers],
	({ isLoggedIn, currentUser, isReady }) => ({ isLoggedIn, currentUser, isReady })
)

export const getArtistSelector = createSelector(
	[getArtists],
	({ artistProfile, artistEvents }) => ({ artistProfile, artistEvents })
)

export const getArtistsSelector = createSelector(
	[getArtists],
	({ artists }) => ({ artists })
)

export const getSearchedArtistsSelector = createSelector(
	[getArtists],
	({ searchedArtists }) => ({ searchedArtists })
)

export const getEventSelector = createSelector(
	[getEvents],
	({ event }) => ({ event })
)

export const getEventsSelector = createSelector(
	[getEvents],
	({ events }) => ({ events })
)

// Pages
export const getNavbarSelector = createSelector(
	[getApp],
	({
		displayLoginModal,
		displaySignupModal,
		userMenuDisplayed,
		searchBarValue,
		displaySearch
	}) => ({
		displayLoginModal,
		displaySignupModal,
		userMenuDisplayed,
		searchBarValue,
		displaySearch
	})
)

export const getDashboardSelector = createSelector(
	[getUsers, getApp],
	({ currentUser, isLoggedIn }, { userMenuDisplayed }) => ({ currentUser, isLoggedIn, userMenuDisplayed })
)
