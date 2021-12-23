import React, {useState} from 'react';
import FindTable from "./rp1-FindTable";
import Table from "./rp2-Table";
import Paginate from "./rp3-Pagination";
import styles from './styles.module.scss'

const RightPage = () => {
    const [cardName, setCardName] = useState('')

    return (
        <div className={styles.main}>
            <FindTable cardName={cardName}/>
            <Table setCardName={setCardName}/>
            <Paginate/>
        </div>
    );
};

export default RightPage;
