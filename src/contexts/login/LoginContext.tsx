import {
    createContext,
    type Dispatch,
    type SetStateAction
} from "react";

export type UserInfo = {
    userName: string;
    email: string;
};

export type LoginContextType = {
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
};

export const LoginContext = createContext<LoginContextType | undefined>(undefined);
