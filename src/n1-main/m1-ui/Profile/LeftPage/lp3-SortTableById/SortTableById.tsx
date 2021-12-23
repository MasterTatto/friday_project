import React, {useState} from 'react';
import styles from './../styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";
import {setChangeSortCardsById} from "../../profileReducer";

const SortTableById = () => {
    const userId = useSelector<AppRootStateType, string>(state => state.login.profileData._id)
    const [active, setActive] = useState('all')
    const dispatch = useDispatch()

    const onMyClick = () => {
        dispatch(setChangeSortCardsById(userId))
        setActive('my')
    }
    const onAllClick = () => {
        dispatch(setChangeSortCardsById(""))
        setActive('all')
    }
    return (
        <div className={styles.idSortBlock}>
            <span className={styles.title}>View packs</span>
            <div>
                <span className={`${styles.btn} ${active === 'my' && styles.active}`} onClick={onMyClick}>My</span>
                <span className={`${styles.btn} ${active === 'all' && styles.active}`} onClick={onAllClick}>All</span>
            </div>

        </div>
    );
};

export default SortTableById;