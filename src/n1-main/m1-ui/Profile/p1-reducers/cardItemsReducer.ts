import {Dispatch} from "redux";
import {setIsLoading} from "../../appReducer";
import {AddedCardItemType, cardsApi, getItemsCardType} from "../api-profile";

const initialState = {
    cardItems: null as (null | getItemsCardType),
    tableType: 'cards',
}

export const profileCardItemReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "PROFILE/SET_CARDS_ITEMS":
            return {
                ...state, cardItems: action.items
            }

        case "PROFILE/CHANGE_TYPE_TABLE":
            return {
                ...state, tableType: action.tableType
            }
        default:
            return state
    }
}

//ACTIONS
export const setCardsItemsAC = (items: getItemsCardType) => ({type: 'PROFILE/SET_CARDS_ITEMS', items} as const)
export const changeTypeTable = (tableType: string) => ({type: 'PROFILE/CHANGE_TYPE_TABLE', tableType} as const)
//THUNK
export const getCardsItems = (id: string, sortCards: number, sortName: string, page: number, rowsPerPage: number) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        dispatch(setIsLoading('idle'))
        const res = await cardsApi.getCardItems({
            cardsPack_id: id, sortCards: sortCards + sortName, pageCount: rowsPerPage,
            page: page,
        })
        dispatch(changeTypeTable('items'))
        dispatch(setCardsItemsAC(res.data))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const addedCardItemTC = (data: AddedCardItemType) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await cardsApi.addedCardItem(data)
        dispatch(setIsLoading('idle'))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const deleteCardItemTC = (id: string) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await cardsApi.deleteCardItem(id)
        dispatch(setIsLoading('idle'))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const updateCardItemTC = (id: string, title: string) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await cardsApi.updateCardItem(id, title)
        dispatch(setIsLoading('idle'))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

//TYPES
type ProfileInitialStateType = typeof initialState
type ProfileActionType =
    | ReturnType<typeof setCardsItemsAC>
    | ReturnType<typeof changeTypeTable>
