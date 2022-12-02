import React, { createContext, useState } from "react";
import { View, Text } from "react-native";

type ModalProviderProps = {
    children: React.ReactNode;
};

export type ModalContextType = {
    modal: boolean;
    openModal: (modal: boolean) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = (props: ModalProviderProps) => {
    const [modal, openModal] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                modal,
                openModal,
            }}
        >
            {props.children}
            <View>
                <Text>ModalProvider</Text>
            </View>
        </ModalContext.Provider>
    );
};
