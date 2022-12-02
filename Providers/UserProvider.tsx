import React, { createContext, useState } from "react";
import { users, UserType } from "../Fixtures/user";

type UserProviderProps = {
    children: React.ReactNode;
};

export type UserContextType = {
    user: UserType;
    setUser: (user: UserType) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = (props: UserProviderProps) => {
    const [user, setUser] = useState(users[0]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
