import {Dispatch} from "redux";
import {AppRootStateType} from "../../../m2-bll/store";
import {setIsLoading} from "../../appReducer";
import profileAPI, {GetCardsType, getParamsNewPackType} from "../api-profile";

const initialState = {
    cards: null as (null | GetCardsType),
    sortName: 'updated',
    sortByCards: 0 as (0 | 1),
    packName: "",
    page: 1,
    rowsPerPage: 9,
    min: 0,
    max: 110,
    user_id: "",
}

export const profileCardReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "PROFILE/SET_CARDS":
            return {
                ...state, cards: action.cards
            }
        case "PROFILE/CHANGE_SORT_CARDS":
            return {
                ...state, sortByCards: action.sort, sortName: action.sortName
            }
        case "PROFILE/CHANGE_SORT_CARD_ITEMS":
            return {
                ...state, sortByCards: action.sort, sortName: action.sortName
            }
        case "PROFILE/CHANGE-PACK-NAME":
            return {
                ...state, packName: action.value
            }
        case "PROFILE/SET-PAGE":
            return {
                ...state,
                page: action.newPage
            }
        case "PROFILE/SET-ROWS-PER-PAGE":
            return {
                ...state,
                rowsPerPage: action.value
            }
        case "PROFILE/SET_CARDS_NUMBER":
            return {
                ...state, min: action.min, max: action.max
            }
        case "PROFILE/SET_CARDS_BY_ID":
            return {
                ...state, user_id: action.user_id
            }
        default:
            return state
    }
}

//ACTIONS
export const setCards = (cards: GetCardsType) => ({type: 'PROFILE/SET_CARDS', cards} as const)
export const setChangeSortCards = (sort: 0 | 1, sortName: string) => ({
    type: 'PROFILE/CHANGE_SORT_CARDS',
    sort,
    sortName
} as const)
export const setChangeSortCardItems = (sort: 0 | 1, sortName: string) => ({
    type: 'PROFILE/CHANGE_SORT_CARD_ITEMS',
    sort,
    sortName
} as const)
export const changePackName = (value: string) => ({type: 'PROFILE/CHANGE-PACK-NAME', value} as const)
export const setPage = (newPage: number) => ({type: 'PROFILE/SET-PAGE', newPage} as const)
export const setRowsPerPage = (value: number) => ({type: 'PROFILE/SET-ROWS-PER-PAGE', value} as const)
export const setChangeCardsNumber = (min: number, max: number) => ({
    type: 'PROFILE/SET_CARDS_NUMBER',
    min,
    max
} as const)
export const setChangeSortCardsById = (user_id: string) => ({type: 'PROFILE/SET_CARDS_BY_ID', user_id} as const)

//THUNK
export const getCardsPack = (sortCards: number, sortName: string, min: number, max: number, user_id: string) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const packName = state.profileCard.packName
    const page = state.profileCard.page
    const pageCount = state.profileCard.rowsPerPage
    dispatch(setIsLoading('loading'))

    try {
        dispatch(setIsLoading('idle'))
        const res = await profileAPI.getCards({
            pageCount,
            page,
            packName,
            sortPacks: sortCards + sortName,
            min,
            max,
            user_id
        })

        dispatch(setCards(res.data))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const addCardPack = (data: getParamsNewPackType) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await profileAPI.addNewPack(data)
        dispatch(setIsLoading('idle'))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const deleteCardPackTC = (id: string) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await profileAPI.deleteCardPack(id)
        dispatch(setIsLoading('idle'))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const updateCardPackTC = (data: getParamsNewPackType) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await profileAPI.updateCardPack(data)
        dispatch(setIsLoading('idle'))

    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

//types
type ProfileInitialStateType = typeof initialState
type ProfileActionType =
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setCards>
    | ReturnType<typeof setChangeSortCards>
    | ReturnType<typeof changePackName>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setRowsPerPage>
    | ReturnType<typeof setChangeCardsNumber>
    | ReturnType<typeof setChangeSortCardsById>
    | ReturnType<typeof setChangeSortCardItems>
