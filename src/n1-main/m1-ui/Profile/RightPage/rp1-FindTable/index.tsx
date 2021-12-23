import React, {ChangeEvent, useState} from 'react';
import styles from './styles.module.scss'
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addCardPack, addedCardItemTC, changePackName, changeTypeTable, setCardIDAC} from "../../profileReducer";
import Modal from "../../../common/modal";
import {ReactComponent as AddedCard} from "../../../../../assets/added.svg";
import {ReactComponent as Arrow} from "../../../../../assets/arrow.svg";
import {AppRootStateType} from "../../../../m2-bll/store";

const FindTable = ({cardName}: any) => {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(changePackName(e.currentTarget.value))
    }

    const backToCards = () => {
        dispatch(changeTypeTable('cards'))
        dispatch(setCardIDAC(''))
    }

    const typeGetRequest = useSelector<AppRootStateType, string>((state) => state.profile.tableType)
    const profileID = useSelector<AppRootStateType, string>((state) => state.login.profileData._id)
    const userIDCard = useSelector<AppRootStateType, any>((state) => state.profile.cardItems)
    const typeTableRequest = typeGetRequest === 'cards'
    const cardId = useSelector<AppRootStateType, string>(state => state.profile.cardId)
    const addNewPack = (value?: string, value2?: string) => {
        typeTableRequest ? dispatch(addCardPack({cardsPack: {name: value}})) : dispatch(addedCardItemTC({
            card: {
                cardsPack_id: cardId,
                question: value,
                answer: value2
            }
        }))
    }
    console.log(userIDCard)
    return (
        <>
            {typeTableRequest ? <h1>Packs list</h1> : (
                <div className={styles.info}>
                    <div className={styles.arrowBox} onClick={backToCards}>
                        <Arrow className={styles.arrow}/>
                    </div>
                    <p>{cardName}</p>
                </div>
            )}
            <Modal openModal={openModal} setOpenModal={setOpenModal} setActionTC={addNewPack}
                   type={typeTableRequest ? 'added' : 'addedItem'}/>
            <div className={styles.findTable}>
                <div className={styles.findInput}>
                    <TextField id="outlined-basic"
                               onChange={onChangeHandler}
                               style={{width: '800px'}}
                               variant="standard"
                               label={'Find by name'}
                    />
                </div>
                {((profileID === userIDCard?.packUserId) || (typeTableRequest)) &&
                <AddedCard onClick={setOpenModal.bind(null, true)} className={styles.btn}/>}
            </div>
        </>
    )
}

export default FindTable;
