import React, {useState} from 'react';
import styles from './styles.module.scss'
import ContainerAuth from "../../../../common/c4-containerAuth";
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import {addCardPackTC, findByName} from "../../../profileReducer";
import {useDispatch} from "react-redux";

type ModalType = {
    modal: boolean
    setModal: (bool: boolean) => void
}

const Modal = ({modal, setModal}: ModalType) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState()
    const handleClick = (e: any) => {
        dispatch(addCardPackTC({name: value}))
    }

    return (
        <ContainerAuth className={`${!modal && styles.hidden} ${styles.box}`} onClick={(e: any) => {
            if (e.target.closest('#modal') !== null) return
            setModal(false)
        }}>
            <div className={styles.modal} id={'modal'}>
                <div>
                    <p className={styles.p}>
                        In this page yo can create a new packs list for study all people.
                    </p>
                    <p className={styles.p}>Good lucky)</p>
                </div>
                <TextField variant={'outlined'} label={'Name pack'} style={{width: '100%'}}
                           onChange={(e: any) => setValue(e.currentTarget.value)}/>
                <div className={styles.btn}>
                    <Button variant="contained" color="success" onClick={handleClick}>Confirm</Button>
                    <Button onClick={() => setModal(false)} variant="outlined" color="error">Exit</Button>
                </div>
            </div>
        </ContainerAuth>
    );
}

export default Modal
