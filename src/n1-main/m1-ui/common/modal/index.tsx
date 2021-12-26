import React, {useState} from 'react';
import styles from './styles.module.scss'
import ContainerAuth from '../c4-containerAuth';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';
import Alert from "../alert";
import Rating from '@material-ui/lab/Rating';
import {setGradeItemTC} from "../../Profile/p1-reducers/profileReducer";
import {useDispatch} from "react-redux";

export type ModalTypeAction =
    'added'
    | 'delete'
    | 'edit'
    | ''
    | 'addedItem'
    | 'removeItem'
    | 'showAnswer'
    | 'answer'
    | 'updateItem'

// type ModalType = {
//     openModal: boolean;
//     setOpenModal: (bool: boolean) => void;
//     setActionTC: (value?: string, value2?: string) => void;
//     type: ModalTypeAction
// }
const answers = ['Did not know', 'Forgot', 'Confused', 'Knew the answer']

const Modal = ({row, openModal, setOpenModal, setActionTC, type, question, answer, setType,}: any) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<any>()
    const [value2, setValue2] = useState()
    const [rating, setRating] = useState<any>()
    const [answerUser, setAnswerUser] = useState<string | undefined>('')
    const [showAlert, setShowAlert] = useState(false)
    const setGrade = (rating: number, id: string) => dispatch(setGradeItemTC(rating, id))

    const targetContainerExit = (e: any) => {
        if (e.target.closest('#modal') !== null) return
        setOpenModal(false)
        setShowAlert(false)
    }

    const title =
        (type === 'added' && ' In this page yo can create a new packs list for study all people.') ||
        (type === 'delete' && 'Are you sure ?') ||
        (type === 'edit' && 'Set a new name card') ||
        (type === 'addedItem' && 'Create your cards') ||
        (type === 'removeItem' && 'Are you sure?') ||
        (type === 'updateItem' && 'Set a new question')

    const typeBoolean = type === 'showAnswer'
    const textButtonAction = !typeBoolean ? 'Show answer' : 'Done'
    const disabledButton = typeBoolean && answerUser === ''


    const alertConfig = (e: any) => {
        setShowAlert(true)

        setTimeout(() => {
            setGrade(e, row._id)
            setShowAlert(false)
            setOpenModal(false)
        }, 3500)
    }

    const actionButtonAction = (e: any) => {
        if (!typeBoolean) setType('showAnswer')
        if (typeBoolean) alertConfig(e)
    }
    console.log(rating)
    console.log(type)
    return (
        <ContainerAuth className={`${!openModal && styles.hidden} ${styles.box}`} onClick={targetContainerExit}>
            <Alert showAlert={showAlert} type={answerUser}/>

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
                            <h1>Check yourself:</h1>
                            <div className={styles.boxInputCheck2}>

                                {answers.map((el) => {
                                    return <div key={el} className={styles.checkbox2}>
                                        <input type="radio" name="answerUser"
                                               disabled={showAlert}
                                               onChange={setAnswerUser.bind(null, el)}/><span>{el}</span>
                                    </div>
                                })}

                            </div>
                            <div className={styles.rating}>
                                <h1>Rate this question: </h1>
                                {/**/}
                                {/**/}
                                <Rating
                                    onChange={(e: any) => {
                                        setRating(e.currentTarget.value)
                                    }} value={row.grade}
                                    name="half-rating" precision={1}/>
                                {/*    */}
                                {/*    */}
                            </div>
                        </div>
                    )}

                    <div className={styles.btn2}>
                        <Button style={{
                            borderRadius: '20px',
                            background: '#21268F',
                            color: '#fff',
                            height: '40px',
                            width: '150px'
                        }}
                                onClick={actionButtonAction.bind(null, rating)}
                                variant="contained" disabled={disabledButton}>{textButtonAction}</Button>
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
