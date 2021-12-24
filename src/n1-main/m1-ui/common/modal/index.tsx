import React, {useState} from 'react';
import styles from './styles.module.scss'
import ContainerAuth from '../c4-containerAuth';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import SuperCheckbox from "../c3-SuperCheckbox/SuperCheckbox";

export type ModalTypeAction = 'added' | 'delete' | 'edit' | '' | 'addedItem' | 'removeItem' | 'showAnswer' | 'answer' | 'updateItem'

type ModalType = {
    openModal: boolean;
    setOpenModal: (bool: boolean) => void;
    setActionTC: (value?: string, value2?: string) => void;
    type: ModalTypeAction
}

const Modal = ({openModal, setOpenModal, setActionTC, type, question, answer, setType}: any) => {
    const [value, setValue] = useState()
    const [value2, setValue2] = useState()
    const targetContainerExit = (e: any) => {
        if (e.target.closest('#modal') !== null) return
        setOpenModal(false)
    }

    const title =
        (type === 'added' && ' In this page yo can create a new packs list for study all people.') ||
        (type === 'delete' && 'Are you sure ?') ||
        (type === 'edit' && 'Set a new name card') ||
        (type === 'addedItem' && 'Create your cards') ||
        (type === 'removeItem' && 'Are you sure?') ||
        (type === 'updateItem' && 'Set a new question')

    const typeBoolean = type === 'showAnswer'

    return (
        <ContainerAuth className={`${!openModal && styles.hidden} ${styles.box}`} onClick={targetContainerExit}>


            {(type === 'answer' || type === 'showAnswer') && (
                <div className={styles.modal2} id={'modal'}>
                    <div className={styles.pBox2}>
                        <div>
                            <div className={styles.question2}>
                                <h2>Question:</h2> <p>{question}?</p>
                            </div>
                            {typeBoolean && (
                                <div className={styles.answer2}>
                                    <h2>Answer:</h2> <p>{answer}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {typeBoolean && (
                        <div className={styles.checkBoxBox2}>
                            <h1>Rate yourself:</h1>
                            <div className={styles.boxInputCheck2}>
                                <div className={styles.checkbox2}><SuperCheckbox/><span>Did not know </span></div>
                                <div className={styles.checkbox2}><SuperCheckbox/><span>Forgot</span></div>
                                <div className={styles.checkbox2}><SuperCheckbox/><span>Confused</span></div>
                                <div className={styles.checkbox2}><SuperCheckbox/><span>Knew the answer</span></div>
                            </div>

                        </div>
                    )
                    }

                    <div className={styles.btn2}>
                        <Button style={{
                            borderRadius: '20px',
                            background: '#21268F',
                            color: '#fff',
                            height: '40px',
                            width: '150px'
                        }}
                                onClick={setType.bind(null, 'showAnswer')}
                                variant="contained">{!typeBoolean ? 'Show answer' : 'Next'}</Button>
                        <Button style={{
                            borderRadius: '20px',
                            background: '#D7D8EF',
                            color: '#21268F',
                            height: '40px',
                            width: '150px'
                        }}
                                onClick={setOpenModal.bind(null, false)}
                                variant="outlined">Cancel</Button>
                    </div>
                </div>
            )}

            {(type !== 'showAnswer' && type !== 'answer') && (
                <div className={styles.modal} id={'modal'}>
                    <div>
                        <p className={styles.p}>
                            {title}
                        </p>
                    </div>

                    {
                        (type === 'edit' || type === 'added' || type === 'updateItem') &&
                        <TextField variant={'outlined'} label={'Name pack'} style={{width: '100%'}}
                                   onChange={(e: any) => setValue(e.currentTarget.value)}/>
                    }
                    {
                        type === 'addedItem' && (
                            <div className={styles.addedItemsBox}>
                                <TextField variant={'outlined'} label={'Type questions'} style={{width: '100%'}}
                                           onChange={(e: any) => setValue(e.currentTarget.value)}/>
                                <TextField variant={'outlined'} label={'Type answer'} style={{width: '100%'}}
                                           onChange={(e: any) => setValue2(e.currentTarget.value)}/>
                            </div>
                        )
                    }
                    <div className={styles.btn}>
                        <Button style={{
                            borderRadius: '20px',
                            background: '#21268F',
                            color: '#fff',
                            height: '40px',
                            width: '150px'
                        }} variant="contained"
                                onClick={() => setActionTC(value, value2)}>Confirm</Button>
                        <Button style={{
                            borderRadius: '20px',
                            background: '#D7D8EF',
                            color: '#21268F',
                            height: '40px',
                            width: '150px'
                        }} onClick={() => {
                            setOpenModal(false)
                        }}
                                variant="outlined">Exit</Button>
                    </div>
                </div>
            )}

        </ContainerAuth>
    );
}
// color="success"
// color="error"
export default Modal
