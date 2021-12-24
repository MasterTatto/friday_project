import React from 'react';
import styles from './styles.module.scss'
import {Pagination} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";
import {FormControl, MenuItem, Select} from "@material-ui/core";
import { setPage, setRowsPerPage} from "../../p1-reducers/cardsReducer";

const Paginate = () => {

    const dispatch = useDispatch()
    const cardPacksTotalCount = useSelector<AppRootStateType, number | undefined>((state) => state.profileCard.cards?.cardPacksTotalCount)
    const page = useSelector<AppRootStateType, number>((state) => state.profileCard.page)
    const rowsPerPage = useSelector<AppRootStateType, number>((state) => state.profileCard.rowsPerPage)
    const typeGetRequest = useSelector<AppRootStateType, string>((state) => state.profileCardItem.tableType)
    const typeTableRequest = typeGetRequest === 'cards'
    const rowsItems = useSelector<AppRootStateType, number | undefined>((state) => state.profileCardItem.cardItems?.cardsTotalCount)
    //@ts-ignore
    const pageCount = Math.ceil(typeTableRequest ? cardPacksTotalCount / rowsPerPage : rowsItems / rowsPerPage)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    };

    const changeRowsPerPage = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setRowsPerPage(Number(event.target.value)))
    };

    return (
        <div className={styles.pagination}>
            <Pagination count={pageCount}
                        size="small"
                        shape="rounded"
                        color="primary"
                        page={page}
                        onChange={handleChange}
            />
            <div className={styles.rowsPerPage}>
                <span style={{marginRight: '10px'}}>Show</span>
                <FormControl size="small" variant="outlined"
                             className={styles.formControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rowsPerPage}
                        onChange={changeRowsPerPage}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
                <span style={{marginLeft: '10px'}}>Cards per Page</span>
            </div>

        </div>
    );
};

export default Paginate;
