import React from 'react';
import styles from './styles.module.scss'
import {combineCss} from "../../helpers/combineCss";

type InputsType = {
    placeholder: string,
    className?: any,
    type: string
}

const Input = ({placeholder, className, type}: InputsType) => {
    return <input className={combineCss(styles.input, className)} placeholder={placeholder} type={type}/>
};

export default Input;
