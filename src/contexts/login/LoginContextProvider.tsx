import {useState, type ReactNode } from "react"
import { LoginContext, type UserInfo } from "./LoginContext"


export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        userName: "",
        email: ""
    });

    return (
        <LoginContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </LoginContext.Provider>
    )

}