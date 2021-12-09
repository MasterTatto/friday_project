import React from 'react';
import styles from './styles.module.scss'
import {useNavLink} from "../../helpers/navLinks";
import {NavLink} from 'react-router-dom';
import {combineCss} from "../../helpers/combineCss";

type HeaderTypeProps = {
    links: string[]
    setUrl: any
    url: string
}

const Header = ({links, setUrl, url}: HeaderTypeProps) => {
        return (
            <div className={styles.header}>
                {links.map((el) => {
                    //  @ts-ignore
                    return <NavLink to={el} key={el} className={combineCss(styles.items, url === el && styles.active)}
                                    onClick={() => setUrl(el)}>
                        {el}
                    </NavLink>
                })}
            </div>
        );
    }
;

export default Header;
