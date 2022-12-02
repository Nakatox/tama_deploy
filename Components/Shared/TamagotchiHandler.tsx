import React, { useContext, useEffect, useRef, useCallback } from "react";

import { TamagotchiType } from "../../Fixtures/tamagotchi";
import { Text } from "react-native";
import {
    TamagotchiContext,
    TamagotchiContextType,
} from "../../Providers/TamagochiProvider";

interface TabElementProps {
    children: React.ReactNode;
}

export default function TamagotchiHandler({ children }: TabElementProps) {
    const { tamagotchi, setTamagotchi } = useContext(
        TamagotchiContext
    ) as TamagotchiContextType;

    const interval = useRef<NodeJS.Timeout>();

    // useEffect(() => {
    //     interval.current = setInterval(() => {
    //         let hunger = tamagotchi.hunger - 20;
    //         if (tamagotchi.hunger > 0) {
    //             setTamagotchi({
    //                 ...tamagotchi,
    //                 hunger: hunger,
    //             });
    //         }
    //     }, 1000);
    // }, []);

    useEffect(() => {
        // if (tamagotchi) {
        //     let hunger = tamagotchi.hunger - 1;
        //     interval.current = setInterval(() => {
        //         if (tamagotchi.hunger > 0) {
        //             setTamagotchi({
        //                 ...tamagotchi,
        //                 hunger: hunger--,
        //             });
        //         }
        //     }, 1000);
        //     return () => {
        //         clearInterval(interval.current as NodeJS.Timeout);
        //     };
        // }
    }, []);

    useEffect(() => {
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return <>{children}</>;
}
