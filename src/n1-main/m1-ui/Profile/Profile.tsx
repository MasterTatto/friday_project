import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../m2-bll/store";
import ContainerAuth from "../common/c4-containerAuth";
import React, {useEffect} from "react";
import styles from "./styles.profile.module.scss";
import LeftPage from "./p2-leftPage";
import RightPage from "./p3-rightPage";
import {getCardsPack} from "./p1-reducers/cardsReducer";
import {getCardsItems} from "./p1-reducers/cardItemsReducer";

export const Profile = () => {

    const dispatch = useDispatch()
    const sortCards = useSelector<AppRootStateType, number>((state) => state.profileCard.sortByCards)
    const sortName = useSelector<AppRootStateType, string>((state) => state.profileCard.sortName)
    const packName = useSelector<AppRootStateType, string>(state => state.profileCard.packName)
    const page = useSelector<AppRootStateType, number>(state => state.profileCard.page)
    const rowsPerPage = useSelector<AppRootStateType, number>(state => state.profileCard.rowsPerPage)
    const minValue = useSelector<AppRootStateType, number>(state => state.profileCard.min)
    const maxValue = useSelector<AppRootStateType, number>(state => state.profileCard.max)
    const userId = useSelector<AppRootStateType, string>(state => state.profileCard.user_id)
    const cardId = useSelector<AppRootStateType, string>(state => state.profile.cardId)

    useEffect(() => {
        if (cardId !== '') return
        dispatch(getCardsPack(sortCards, sortName, minValue, maxValue, userId))
    }, [dispatch, sortCards, sortName, packName, page, rowsPerPage, minValue, maxValue, userId, cardId])

    useEffect(() => {
        if (cardId === '') return
        dispatch(getCardsItems(cardId, sortCards, sortName, page, rowsPerPage))
    }, [dispatch, cardId, sortCards, sortName, page, rowsPerPage])

    const inAuth = useSelector<AppRootStateType, boolean>((state) => state.app.inAuth)
    if (!inAuth) return <Navigate to={'/login'}/>

    return (
        <ContainerAuth>
            <div className={styles.main} id={'profile'}>
                <LeftPage/>
                <RightPage/>
            </div>
        </ContainerAuth>

    )
}