import React from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";
import {setUserID} from "../../profileReducer";

const SortTable = () => {
    const profileID = useSelector<AppRootStateType, string>((state) => state.login.profileData._id)
    const dispatch = useDispatch()

    return (
        <div className={styles.box}>
            <span onClick={() => {
                dispatch(setUserID(profileID))
            }
            }>MY</span>
            <span onClick={() => {
                dispatch(setUserID(''))
            }
            }>ALL</span>
        </div>
    );
};

export default SortTable;
