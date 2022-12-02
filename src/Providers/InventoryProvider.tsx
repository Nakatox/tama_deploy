import React, { createContext, useState } from "react";
import { tamagotchisFixtures, TamagotchiType } from "../Fixtures/tamagotchi";

type InventoryProviderProps = {
    children: React.ReactNode;
};

export type InventoryContextType = {
    inventory: TamagotchiType[] | null;
    setInventory: (inventory: TamagotchiType[]) => void;
};

export const InventoryContext = createContext({} as InventoryProviderProps);

export const InventoryProvider = (props: InventoryProviderProps) => {
    const [inventory, setInventory] = useState([]);
    

    return (
        <InventoryContext.Provider
            value={{
                inventory,
                setInventory,
            }}
        >
            {props.children}
        </InventoryContext.Provider>
    );
};
