import React from 'react';
import styles from './styles.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../m2-bll/store";

const Headers = ({headerGroup, changeSortCards, nameHeader, sortCards}: any) => {
    const typeGetRequest = useSelector<AppRootStateType, string>((state) => state.profile.tableType)
    const typeTableRequest = typeGetRequest === 'cards'
    const changeStyleSortCard = ((nameHeader === 'Cards' && sortCards !== 0) && styles.activeCards) || ((nameHeader === 'Last Update' && sortCards !== 0) && styles.activeUpdate)
    const changeStyleSortCardItems = ((nameHeader === 'Grade' && sortCards !== 0) && styles.activeGrade) || ((nameHeader === 'Last Update' && sortCards !== 0) && styles.activeUpdate)
    return (
        <div
            className={`${typeTableRequest ? styles.tableHeader : styles.tableHeader2} ${typeTableRequest ? changeStyleSortCard : changeStyleSortCardItems}`}
            key={headerGroup}
            onClick={() => changeSortCards(headerGroup)}>
            <h4 className={styles.column}>
                {headerGroup}
            </h4>
        </div>
    );
};

export default Headers;
