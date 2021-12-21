import TextField from '@mui/material/TextField/TextField';
import React, {useState} from 'react';
import styles from './styles.module.scss'
import {ReactComponent as AddedPacks} from '../../../common/assests/added.svg';
import {useDispatch, useSelector} from "react-redux";
import {addCardPackTC, findByName} from "../../profileReducer";
import {AppRootStateType} from "../../../../m2-bll/store";
import Modal from "./modal";

const FindTable = () => {
    const dispatch = useDispatch()
    const cardsPack = useSelector<AppRootStateType, any>((state) => state.profile.cardsPack)
    const [modal, setModal] = useState(false)

    const handleChange = (e: any) => {
        dispatch(findByName(e.currentTarget.value))
    }

    return (
        <div className={styles.findTable}>
            <Modal modal={modal} setModal={setModal}/>
            <h1>Packs list</h1>
            <div className={styles.action}>
                <div className={styles.inputBox}>
                    <TextField id="filled-basic" label="Search by name" variant="standard" className={styles.input}
                               onChange={handleChange}/>
                </div>
                <AddedPacks className={styles.added} onClick={() => setModal(true)}/>
            </div>
        </div>
    );
};

export default FindTable;
