import { Context, createContext } from "react";

interface userContextInterface {
    user: any,
    setUser: any
}

const initialValue: userContextInterface = {
    user: "",
    setUser: ""
};

export const userContext: Context<userContextInterface> = createContext(initialValue);