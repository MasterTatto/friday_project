import Pagination from '@mui/material/Pagination/Pagination';
import React from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";
import {setPagination} from "../../profileReducer";


const Paginate = () => {
    const cards = useSelector<AppRootStateType, number | undefined>((state) => state.profile.cards?.cardPacksTotalCount)
    const dispatch = useDispatch()
    // console.log(cards)
    //@ts-ignore
    let fullPagination = Math.ceil(cards / 9)
    const handleChange = (event: any, value: any) => {
        dispatch(setPagination(value, 9))
    }
    return (
        <div className={styles.pagination}>
            <Pagination count={fullPagination} variant="outlined" shape="rounded" color="secondary"
                        onChange={handleChange}/>
        </div>
    );
};

export default Paginate;
