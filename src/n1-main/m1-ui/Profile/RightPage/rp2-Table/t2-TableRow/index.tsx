import React, {useState} from 'react';
import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {
    deleteCardItemTC,
    deleteCardPackTC,
    setCardIDAC, setGradeItemTC,
    updateCardItemTC,
    updateCardPackTC
} from "../../../profileReducer";
import Rating from '@material-ui/lab/Rating';
import Modal from "../../../../common/modal";

const Rows = ({row, typeTableRequest, profileID, setCardID, setCardName, setType, type, cardID, test}: any) => {
    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false)

    const updateCardPack = (value: string) => {
        type === 'edit' && dispatch(updateCardPackTC({cardsPack: {_id: row._id, name: value}}))
        type === 'delete' && dispatch(deleteCardPackTC(row._id))
        type === 'removeItem' && dispatch(deleteCardItemTC(row._id))
        type === 'updateItem' && dispatch(updateCardItemTC(row._id, value))
    }

    const actionCards = (value?: string) => {
        setType(value)
        setOpenModal(true)
    }

    const actionLearnHandler = (id: string, name: string) => {
        dispatch(setCardIDAC(id))
        setCardName(name)
    }
    const setGrade = (rating: number, id: string) => dispatch(setGradeItemTC(rating, id))
    console.log(row)
    return <div className={styles.rowe} key={row._id}>

        <Modal type={type} setType={setType} setOpenModal={setOpenModal} openModal={openModal}
               setActionTC={updateCardPack}
               question={row.question} answer={row.answer}
        />

        <div className={styles.row}>

            <span className={styles.rowItem} id={'table'}>{typeTableRequest ? row.name : row.question}</span>
            <span className={styles.rowItem}
                  id={'table'}>{typeTableRequest ? row.cardsCount : (

                <div className={`${styles.rowItem} ${styles.btnBox}`}>
                    {profileID === row.user_id && (<>

                        <span className={styles.btn} onClick={actionCards.bind(null, 'removeItem')}
                              data-color>Delete</span>
                        <span className={styles.btn} onClick={actionCards.bind(null, 'updateItem')}>Edit</span>

                    </>)}

                    <span className={styles.btn} onClick={actionCards.bind(null, 'answer')}>Answer</span>
                </div>

            )}</span>
            <span className={styles.rowItem} id={'table'}>{row.updated.slice(0, 10)}</span>
            <span className={styles.rowItem}
                  id={'table'}> {typeTableRequest ? row.user_name :
                <Rating name="half-rating" value={row.grade} precision={0.5}
                        onChange={(e: any) => setGrade(e.currentTarget.value, row._id)}/>}</span>

            {typeTableRequest && <div className={`${styles.rowItem} ${styles.btnBox}`}>

                {profileID === row.user_id && (<>

                    <span className={styles.btn} data-color
                          onClick={actionCards.bind(null, 'delete', row._id)}>Delete</span>
                    <span className={styles.btn}
                          onClick={actionCards.bind(null, 'edit', row._id)}>Edit</span>

                </>)}

                <span onClick={actionLearnHandler.bind(null, row._id, row.name)}
                      className={styles.btn}>Learn</span>

            </div>}

        </div>
    </div>

};

export default Rows;
