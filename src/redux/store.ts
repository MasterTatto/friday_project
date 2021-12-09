import {combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";


const rootReducer = combineReducers({
    loginReducer: loginReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>