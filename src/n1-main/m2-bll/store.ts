import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "../../n2-features/f1-auth/a1-login/loginReducer";
import {registerReducer} from "../../n2-features/f1-auth/a2-register/registerReducer";
import {recoveryReducer} from "../../n2-features/f1-auth/a3-forget/f2-bll/recoveryReducer";
import {newPassReducer} from "../NewPassword/newPassReducer";
import {appReducer} from "../m1-ui/appReducer";
import {profileCardReducer} from "../m1-ui/Profile/p1-reducers/cardsReducer";
import {profileCardItemReducer} from "../m1-ui/Profile/p1-reducers/cardItemsReducer";
import {profileReducer} from "../m1-ui/Profile/p1-reducers/profileReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recovery: recoveryReducer,
    newPass: newPassReducer,
    profile: profileReducer,
    profileCard: profileCardReducer,
    profileCardItem: profileCardItemReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// type
export type AppRootStateType = ReturnType<typeof rootReducer>
