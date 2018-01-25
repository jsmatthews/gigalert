// @flow
type Action = { type: string; }

// Artist Actions
type ArtistAction = Action & { payload: { artistId: number; }; }
export const fetchAllArtists = (): Action => ({ type: 'FETCH_ALL_ARTISTS_REQUESTED' })
export const fetchArtist = (artistId: number): ArtistAction => ({ type: 'FETCH_ARTIST_REQUESTED', payload: { artistId } })
export const fetchArtistEvents = (artistId: number): ArtistAction => ({ type: 'FETCH_ARTIST_EVENTS_REQUESTED', payload: { artistId } })

// Event Actions
type EventAction = Action & { payload: { id: number; }; }
export const fetchAllEvents = (): Action => ({ type: 'FETCH_ALL_EVENTS_REQUESTED' })
export const fetchEvent = (id: number): EventAction => ({ type: 'FETCH_EVENT_REQUESTED', payload: { id } })

// User Actions
type UserInfo = { email: string; password: string; }
type UserInfoAction = Action & { payload: { userInfo: UserInfo; }; }
export const signUpUser = (userInfo: UserInfo): UserInfoAction => ({ type: 'USER_SIGNUP_REQUESTED', payload: { userInfo } })
export const loginUser = (userInfo: UserInfo): UserInfoAction => ({ type: 'USER_LOGIN_REQUESTED', payload: { userInfo } })

type UserAction = Action & { payload: { userId: number; }; }
export const logOutUser = (userId: number): UserAction => ({ type: 'USER_LOGOUT_REQUESTED', payload: { userId } })
export const verifyUser = (userId: number): UserAction => ({ type: 'VERIFY_USER_REQUESTED', payload: { userId } })
export const fetchUser = (userId: number): UserAction => ({ type: 'USER_FETCH_REQUESTED', payload: { userId } })

// App Actions
type ModalAction = Action & { payload: { type: string; }; }
export const displayModal = (type: string): ModalAction => ({ type: 'DISPLAY_MODAL', payload: { type } })
export const hideModal = (type: string): ModalAction => ({ type: 'HIDE_MODAL', payload: { type } })
export const displayUserMenu = (): Action => ({ type: 'DISPLAY_USER_MENU' })
export const hideUserMenu = (): Action => ({ type: 'HIDE_USER_MENU' })

type SearchAction = Action & { payload: { keyword: mixed } }
export const updateSearchBarValue = (keyword: mixed): SearchAction => ({ type: 'UPDATE_SEARCH_BAR_VALUE', payload: { keyword } })
export const searchDatabase = (keyword: mixed): SearchAction => ({ type: 'SEARCH_DATABASE', payload: { keyword } })
export const clearSearchBarValue = (): Action => ({ type: 'CLEAR_SEARCH_BAR_VALUE' })
export const clearSearchedArtists = (): Action => ({ type: 'CLEAR_SEARCHED_ARTISTS' })
export const displaySearch = (): Action => ({ type: 'DISPLAY_SEARCH_LIST' })
export const hideSearch = (): Action => ({ type: 'HIDE_SEARCH_LIST' })