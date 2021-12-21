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
    addCardPack: (data: addCardPackType) => {
        return axiosInstance.post("cards/pack", {cardsPack: data})
    },
    deleteCardPack: (id: string) => {
        return axiosInstance.delete(`cards/pack?id=${id}`)
    }
};

export type addCardPackType = {
    name?: "no Name"
    path?: "/def"
    grade?: 0
    shots?: 0
    rating?: 0
    deckCover?: "url or base64"
    private?: false
    type?: "pack"
}

export type getParamsType = {
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: number | string,
    page?: number,
    pageCount?: number,
    user_id?: string
}

export type ProfileType = {
    name: string
    avatar?: string
}

export default profileAPI;