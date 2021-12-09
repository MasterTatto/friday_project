import {combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {passwordReducer} from "./password-reducer";
import {profileReducer} from "./profile-reducer";
import {recoveryReducer} from "./recovery-reducer";
import {regestratyReducer} from "./regestraty-reducer";


const rootReducer = combineReducers({
    loginReducer: loginReducer,
    passwordReducer: passwordReducer,
    profileReducer: profileReducer,
    recoveryReducer: recoveryReducer,
    regestratyReducer: regestratyReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>