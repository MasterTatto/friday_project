import React from 'react';
import Button from "../../common/button";
import styles from "./styles.module.scss";
import Input from "../../common/input";

const Profile = () => {
    return (
        <div>
            <Button title={'Send!'} className={styles.btn}/>
            <Input placeholder={'Login'} type={'text'}/>
            <Input placeholder={'Login'} type={'checkbox'}/>
        </div>
    );
};

export default Profile;
