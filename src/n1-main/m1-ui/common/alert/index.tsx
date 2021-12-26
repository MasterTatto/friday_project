import React from 'react';
import styles from './styles.module.scss'

const Alert = ({type, showAlert}: any) => {
        const background: any =
            (type === 'Did not know' && '#FFCCBC') ||
            (type === 'Forgot' && '#FFF9C4') ||
            (type === 'Confused' && '#B3E5FC') ||
            (type === 'Knew the answer' && '#DCEDC8');
        const color: any =
            (type === 'Did not know' && '#b71c1c') ||
            (type === 'Forgot' && '#212121') ||
            (type === 'Confused' && '#01579B') ||
            (type === 'Knew the answer' && '#33691E');
        const answer =
            (type === 'Did not know' && 'come back later') ||
            (type === 'Forgot' && 'Time to repeat this question :)') ||
            (type === 'Confused' && 'Dont worry, you are good :)') ||
            (type === 'Knew the answer' && 'Nice, you are monster :)')

        return (
            <div className={`${styles.alert} ${showAlert && styles.active}`} style={{background, color}}>
                {answer}
            </div>
        );
    }
;

export default Alert;
