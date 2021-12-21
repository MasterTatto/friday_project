import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../m2-bll/store";
import ContainerAuth from "../common/c4-containerAuth";
import React, {useEffect} from "react";
import styles from "./styles.profile.module.scss";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import {getCardsPack} from "./profileReducer";

export const Profile = () => {
    const dispatch = useDispatch()
    const sortCards = useSelector<AppRootStateType, number>((state) => state.profile.sortByCards)
    const sortName = useSelector<AppRootStateType, string>((state) => state.profile.sortName)
    const page = useSelector<AppRootStateType, number>((state) => state.profile.page)
    const pageCount = useSelector<AppRootStateType, number>((state) => state.profile.pageCount)
    const searchName = useSelector<AppRootStateType, string>((state) => state.profile.searchName)
    const cardsPack = useSelector<AppRootStateType, any>((state) => state.profile.cardsPack)
    const userID = useSelector<AppRootStateType, string>((state) => state.profile.user_id)

    useEffect(() => {
        dispatch(getCardsPack(sortCards, sortName, page, pageCount, searchName, userID))
    }, [dispatch, sortCards, sortName, page, pageCount, searchName, cardsPack, userID])

    const inAuth = useSelector<AppRootStateType, boolean>((state) => state.app.inAuth)
    if (!inAuth) return <Navigate to={'/login'}/>

    return (
        <ContainerAuth>
            <div className={styles.main}>
                <LeftPage/>
                <RightPage/>
            </div>
        </ContainerAuth>

    )
}