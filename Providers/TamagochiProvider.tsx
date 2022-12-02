import moment from "moment";
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { FoodType } from "../Fixtures/food";
import { tamagotchisFixtures, TamagotchiType } from "../Fixtures/tamagotchi";
import { InventoryContext } from "./InventoryProvider";
import { UserContext, UserContextType } from "./UserProvider";

type TamagotchiProviderProps = {
    children: React.ReactNode;
};

export type TamagotchiContextType = {
    tamagotchi: TamagotchiType;
    tamagotchis: TamagotchiType[];
    setTamagotchi: (tamagotchi: TamagotchiType) => void;
    feedTamagotchi: (food: FoodType) => void;
    setTamagotchis: (tamagotchis: TamagotchiType[]) => void;
};

export const TamagotchiContext = createContext<TamagotchiContextType | null>(
    null
);

export const TamagotchiProvider = (props: TamagotchiProviderProps) => {
    const { user, setUser } = useContext(UserContext) as UserContextType;
    const { inventory, setInventory } = useContext(InventoryContext);

    const [tamagotchi, setTamagotchi] = useState<TamagotchiType>(null);

    const [tamagotchis, setTamagotchis] =
       useState<TamagotchiType[]>(tamagotchisFixtures);
    const [hunger2, setHunger2] = useState(0);

    // useEffect(() => {
    //     console.log("useEffect");
    //     setTamagotchi(tamagotchisFixtures[0]);


    //     setHunger2(100);
    // }, []);

    function feedTamagotchi(food: FoodType) {
        hunger.current = hunger.current + food.hunger;
        setTamagotchi({
            ...tamagotchi,
            hunger: hunger.current,
            strength: strength.current,
        });
    }

    function strengthTamagotchi() {
        strength.current = strength.current + 1;
        setTamagotchi({
            ...tamagotchi,
            strength: strength.current,
            hunger: hunger.current,
        });
    }

    function intelligenceTamagotchi() {
        intelligence.current = intelligence.current + 1;
        setTamagotchi({
            ...tamagotchi,
            intelligence: intelligence.current,
            hunger: hunger.current,
        });
    }

    function sendToWork() {
        // if (moment().isAfter(dateBeforeNextWork.current)) {
        //     // dateBeforeNextWork.current = moment().add(1, "days").toString();
        //     setTamagotchi({
        //         ...tamagotchi,
        //         // date_before_next_work: dateBeforeNextWork.current,
        //         strength: strength.current,
        //         hunger: hunger.current,
        //     });
        //     setUser({
        //         ...user,
        //         token: user.token + 100,
        //     });
        // }
    }
    let hunger = useRef(0);
    let strength = useRef(0);
    let intelligence = useRef(0);

    if (tamagotchi) {
        hunger.current = tamagotchi.hunger;
        strength.current = tamagotchi.strength;
        intelligence.current = tamagotchi.intelligence;
    }

    return (
        <TamagotchiContext.Provider
            value={{
                tamagotchi,
                setTamagotchi,
                feedTamagotchi,
                setTamagotchis,
                tamagotchis,
                strengthTamagotchi,
                intelligenceTamagotchi,
                sendToWork,
            }}
        >
            {props.children}
        </TamagotchiContext.Provider>
    );
};
