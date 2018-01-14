
// Artist Actions
export const fetchAllArtists = () => ({ type: 'FETCH_ALL_ARTISTS_REQUESTED' })
export const fetchArtist = (artistId) => ({ type: 'FETCH_ARTIST_REQUESTED', payload: { artistId } })
export const fetchArtistEvents = (artistId) => ({ type: 'FETCH_ARTIST_EVENTS_REQUESTED', payload: { artistId } })

// Event Actions
export const fetchAllEvents = () => ({ type: 'FETCH_ALL_EVENTS_REQUESTED' })

// User Actions
export const signUpUser = (userInfo) => ({ type: 'USER_SIGNUP_REQUESTED', payload: { userInfo } })
export const loginUser = (userInfo) => ({ type: 'USER_LOGIN_REQUESTED', payload: { userInfo } })
export const logOutUser = (userId) => ({ type: 'USER_LOGOUT_REQUESTED', payload: { userId: userId } })
export const verifyUser = (userId) => ({ type: 'VERIFY_USER_REQUESTED', payload: { userId: userId } })
export const fetchUser = (userId) => ({ type: 'USER_FETCH_REQUESTED', payload: { userId: userId } })

// App Actions
export const displayModal = (type) => ({ type: 'DISPLAY_MODAL', payload: { type } })
export const hideModal = (type) => ({ type: 'HIDE_MODAL', payload: { type } })
export const displayUserMenu = () => ({ type: 'DISPLAY_USER_MENU' })
export const hideUserMenu = () => ({ type: 'HIDE_USER_MENU' })
export const updateSearchBarValue = (value) => ({ type: 'UPDATE_SEARCH_BAR_VALUE', payload: { value } })
export const clearSearchBarValue = (value) => ({ type: 'CLEAR_SEARCH_BAR_VALUE' })
export const searchDatabase = (keyword) => ({ type: 'SEARCH_DATABASE', payload: { keyword } })
export const clearSearchedArtists = () => ({ type: 'CLEAR_SEARCHED_ARTISTS' })
export const displaySearch = () => ({ type: 'DISPLAY_SEARCH_LIST' })
export const hideSearch = () => ({ type: 'HIDE_SEARCH_LIST' })