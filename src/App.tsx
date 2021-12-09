import React, {useState} from 'react';
import styles from './app.module.scss'
import Profile from "./components/profile";
import {useNavLink} from "./helpers/navLinks";
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/auth/login";
import RecoveryPassword from "./components/auth/recovery-password";
import Registration from "./components/auth/registration";
import NewPassword from "./components/auth/type-new-password";


function App() {
    const links = ['login', 'recovery', 'registration', 'new-password', 'profile']
    const [url, setUrl] = useState('profile')
    return (
        <div className={styles.App}>
            <Header links={links} setUrl={setUrl} url={url}/>
            <Routes>
                <Route path={'*'} element={<Profile/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'recovery'} element={<RecoveryPassword/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'new-password'} element={<NewPassword/>}/>
            </Routes>
        </div>
    );
}

export default App
