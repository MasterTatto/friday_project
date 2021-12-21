import profileAPI, {addCardPackType, ProfileType} from "./api-profile";
import {setIsLoading} from "../appReducer";
import {Dispatch} from "redux";

const initialState = {
    name: "user name",
    avatar: "https://cdn-icons-png.flaticon.com/512/4530/4530930.png",
    cards: null as (null | GetCardsType),
    sortName: 'updated',
    sortByCards: 0 as (0 | 1),
    pageCount: 9,
    page: 1,
    searchName: '',
    cardsPack: {},
    user_id: ''
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "PROFILE/CHANGE_USER_NAME":
            return {
                ...state, name: action.userName
            }
        case "PROFILE/SET_CARDS":
            return {
                ...state, cards: action.cards
            }
        case "PROFILE/CHANGE_SORT_CARDS":
            return {
                ...state, sortByCards: action.sort, sortName: action.sortName
            }
        case "PROFILE/SET_PAGINATION":
            return {
                ...state, page: action.page, pageCount: action.pageCount
            }
        case "PROFILE/FIND_BY_NAME":
            return {
                ...state, searchName: action.searchName
            }
        case "PROFILE/SET_USER_ID":
            return {
                ...state, user_id: action.userID
            }
        default:
            return state
    }
}

// actions
export const changeUserNameAC = (userName: string) => ({type: 'PROFILE/CHANGE_USER_NAME', userName} as const)
export const setUserID = (userID: string) => ({type: 'PROFILE/SET_USER_ID', userID} as const)
export const setCards = (cards: GetCardsType) => ({type: 'PROFILE/SET_CARDS', cards} as const)
export const findByName = (searchName: string) => ({type: 'PROFILE/FIND_BY_NAME', searchName} as const)
export const setPagination = (page: number, pageCount: number) => ({
    type: 'PROFILE/SET_PAGINATION',
    page,
    pageCount
} as const)
export const setChangeSortCards = (sort: 0 | 1, sortName: string) => ({
    type: 'PROFILE/CHANGE_SORT_CARDS',
    sort,
    sortName
} as const)

//thunk
export const changeUserNameTC = (data: ProfileType) => (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))
    profileAPI.changeUserName(data)
        .then((res) => {
            dispatch(changeUserNameAC(res.data.updatedUser.name))
            dispatch(setIsLoading('idle'))
        })
        .catch(error => {
            dispatch(setIsLoading('error'))
        })
}

export const getCardsPack = (sortCards: number, sortName: string, page: number, pageCount: number, searchName: string, userID: string) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        dispatch(setIsLoading('idle'))
        const res = await profileAPI.getCards({
            sortPacks: sortCards + sortName,
            page,
            pageCount,
            packName: searchName,
            user_id: userID
        })
        dispatch(setCards(res.data))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const addCardPackTC = (data: addCardPackType) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        const res = await profileAPI.addCardPack(data)
        dispatch(setIsLoading('idle'))
    } catch (e) {

    }
}

export const deleteCardPackTC = (id: string) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        const res = await profileAPI.deleteCardPack(id)
        dispatch(setIsLoading('idle'))
    } catch (e) {

    }
}

// type
type ProfileInitialStateType = typeof initialState
export type GetCardsType = {
    cardPacks: [
        CardType
    ]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
export type CardType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

type ChangeUserNameActionType = ReturnType<typeof changeUserNameAC>
type ProfileActionType =
    ChangeUserNameActionType
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setCards>
    | ReturnType<typeof setChangeSortCards>
    | ReturnType<typeof setPagination>
    | ReturnType<typeof findByName> | ReturnType<typeof setUserID>