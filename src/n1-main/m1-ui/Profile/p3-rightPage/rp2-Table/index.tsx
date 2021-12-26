import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2-bll/store";
import {ModalTypeAction} from "../../../common/modal";
import Headers from "./t1-tableHeader";
import Rows from "./t2-TableRow";
import {setChangeSortCardItems, setChangeSortCards} from "../../p1-reducers/cardsReducer";
import {GetCardsType, getItemsCardType} from "../../api-profile";

const header = ['Name', 'Cards', 'Last Update', 'Created by', 'Actions']
const items = ['Question', 'Actions', 'Last Update', 'Grade']

const Table = ({setCardName}: any) => {
    const rows = useSelector<AppRootStateType, GetCardsType | null>((state) => state.profileCard.cards)
    const rowsItems = useSelector<AppRootStateType, getItemsCardType | null>((state) => state.profileCardItem.cardItems)
    const sortCards = useSelector<AppRootStateType, number>((state) => state.profileCard.sortByCards)
    const profileID = useSelector<AppRootStateType, string>((state) => state.login.profileData._id)
    const [nameHeader, setNameHeader] = useState('')
    const [type, setType] = useState<ModalTypeAction>('')
    const [cardID, setCardID] = useState('')
    const typeGetRequest = useSelector<AppRootStateType, string>((state) => state.profileCardItem.tableType)
    const typeTableRequest = typeGetRequest === 'cards'


    useEffect(() => {
        const scrollContainer = document.querySelectorAll("#table");

        scrollContainer.forEach((el) => {
            el.addEventListener("wheel", (evt: any) => {
                evt.preventDefault();
                el.scrollLeft += evt.deltaY;
            });
        })
        return () => {
            scrollContainer.forEach((el) => {
                el.removeEventListener("wheel", (evt: any) => {
                    evt.preventDefault();
                    el.scrollLeft += evt.deltaY;
                });
            })
        }
    });

    const dispatch = useDispatch()

    const changeSortCards = (name: string) => {
        const nameClick = name === 'Cards' ? 'cardsCount' : 'updated'
        const nameClickItems = name === 'Last Update' ? 'updated' : 'grade'

        if (typeTableRequest) {
            if (name === 'Cards' || name === 'Last Update') {
                if (sortCards === 0) {
                    dispatch(setChangeSortCards(1, nameClick))
                } else {
                    dispatch(setChangeSortCards(0, nameClick))
                }
            }
        }

        if (!typeTableRequest) {
            if (name === 'Grade' || name === 'Last Update') {
                if (sortCards === 0) {
                    dispatch(setChangeSortCardItems(1, nameClickItems))
                } else {
                    dispatch(setChangeSortCardItems(0, nameClickItems))
                }
            }
        }

        setNameHeader(name)
    }

    const headerTable = (typeTableRequest ? header : items).map(headerGroup => {
            return <Headers headerGroup={headerGroup} nameHeader={nameHeader} sortCards={sortCards}
                            changeSortCards={changeSortCards} key={headerGroup}/>
        }
    )

    const rowsTable = (typeTableRequest ? rows?.cardPacks : rowsItems?.cards)?.map((row: any) => {
        return <Rows row={row} typeTableRequest={typeTableRequest}
                     profileID={profileID}
                     type={type} setType={setType}
                     setCardName={setCardName}
                     key={row._id}/>
    })

    return (
        <div className={styles.table}>

            <div className={styles.thead}>
                {headerTable}
            </div>

            <div className={styles.rows}>
                {rowsTable}
            </div>

        </div>
    );
};

export default Table;
