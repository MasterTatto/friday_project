import axios from 'axios';
import {serverAPI} from "../common/helpers/findServer";

const instance = {
    baseURL: serverAPI,
    withCredentials: true
};

const axiosInstance = axios.create(instance);

export const profileAPI = {
    changeUserName: (data: ProfileType) => {
        return axiosInstance.put("auth/me", data)
    },
    getCards: (getParamsCards: getParamsType) => {
        return axiosInstance.get("cards/pack", {params: getParamsCards})
    },
    addNewPack: (data: getParamsNewPackType) => {
        return axiosInstance.post("/cards/pack", data)
    },
    deleteCardPack: (id: string) => {
        return axiosInstance.delete(`cards/pack?id=${id}`)
    },
    updateCardPack: (data: getParamsNewPackType) => {
        return axiosInstance.put(`cards/pack`, data)
    }
};

export const cardsApi = {
    getCardItems: (getParamsCardsItemType: getParamsCardsItemType) => {
        return axiosInstance.get('cards/card', {params: getParamsCardsItemType})
    },
    addedCardItem: (data: AddedCardItemType) => {
        return axiosInstance.post('cards/card', data)
    },
    deleteCardItem: (id: string) => {
        return axiosInstance.delete(`cards/card?id=${id}`)
    },
    updateCardItem: (id: string, question: string) => {
        return axiosInstance.put('cards/card', {card: {_id: id, question: question}})
    }
}

export const ratingApi = {
    setRating: (grade: number, card_id: string) => {
        return axiosInstance.put("cards/grade", {grade: grade, card_id: card_id})
    }
}

export type getParamsNewPackType = {
    cardsPack: cardsPackType
}
export type AddedCardItemType = {
    card: {
        cardsPack_id: string,
        question?: string,
        answer?: string,
        grade?: number,
        shots?: number,
        rating?: number,
        answerImg?: string,
        questionImg?: string,
        questionVideo?: string,
        answerVideo?: string,
        type?: string,
    }
}
export type cardsPackType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
    _id?: string
}

export type getParamsType = {
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: number | string,
    page?: number,
    pageCount?: number,
    user_id?: string,
}

export type getParamsCardsItemType = {
    cardAnswer?: string,
    cardQuestion?: string,
    cardsPack_id: string,
    min?: number,
    max?: number,
    sortCards?: number | string,
    page?: number,
    pageCount?: number,
}

export type ProfileType = {
    name: string
    avatar?: string
}

export type getItemsCardType = {
    cards: [
        CardItemsType
    ],
    cardsTotalCount: number,
    maxGrade: number,
    minGrade: number,
    page: number,
    pageCount: number,
    packUserId: string
}

export type CardItemsType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    shots: number,
    type: string,
    user_id: string,
    created: string,
    updated: string,
    __v: number,
    _id: string,
}

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

export default profileAPI;