import {NavLink} from "react-router-dom"

export const useNavLink = (children: string, to: string) => {
    return <NavLink to={to}>
        {children}
    </NavLink>
}