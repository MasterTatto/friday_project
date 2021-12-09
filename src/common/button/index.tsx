import React from 'react';
import styles from './styles.module.scss'
import {combineCss} from "../../helpers/combineCss";

type ButtonsType = {
    title: string,
    className?: any,
}

const Button = ({title, className}: ButtonsType) => {
    return <button className={combineCss(styles.btn, className)}>{title}</button>
};

export default Button;
