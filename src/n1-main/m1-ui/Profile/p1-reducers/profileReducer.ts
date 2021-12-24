import {setIsLoading} from "../../appReducer";
import {Dispatch} from "redux";
import profileAPI, {ProfileType, ratingApi} from "../api-profile";

const initialState = {
    name: "user name",
    avatar: "https://cdn-icons-png.flaticon.com/512/4530/4530930.png",
    cardId: "",
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "PROFILE/CHANGE_USER_NAME":
            return {
                ...state, name: action.userName
            }
        case "PROFILE/SET_CARD_ID":
            return {
                ...state, cardId: action.cardId
            }

        default:
            return state
    }
}


//ACTIONS
export const changeUserNameAC = (userName: string) => ({type: 'PROFILE/CHANGE_USER_NAME', userName} as const)
export const setCardIDAC = (cardId: string) => ({type: 'PROFILE/SET_CARD_ID', cardId} as const)

//THUNK
export const setGradeItemTC = (grade: number, id: string) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))

    try {
        await ratingApi.setRating(grade, id)
        dispatch(setIsLoading('idle'))
    } catch (e) {
        dispatch(setIsLoading('error'))
    }
}

export const changeUserNameTC = (data: ProfileType) => (dispatch: Dispatch) => {
    dispatch(setIsLoading('loading'))
    profileAPI.changeUserName(data)
        .then((res) => {
            dispatch(changeUserNameAC(res.data.updatedUser.name))
            dispatch(setIsLoading('idle'))
        })
        .catch(() => {
            dispatch(setIsLoading('error'))
        })
}

//TYPES
type ProfileInitialStateType = typeof initialState
type ProfileActionType =
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setCardIDAC>
    | ReturnType<typeof changeUserNameAC>