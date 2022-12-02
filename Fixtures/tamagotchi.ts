import moment from "moment";

export interface TamagotchiType {
    id: number;
    name: string;
    hunger: number;
    intelligence: number;
    strength: number;
    // date_before_next_work: string;
    price: number;
    created_at: string;
}

export let tamagotchisFixtures: TamagotchiType[] = [
    {
        id: 1,
        name: "Tamagotchi 1",
        hunger: 70,
        intelligence: 70,
        strength: 30,
        price: 150,
        created_at: moment().toString(),
    },
    {
        id: 2,
        name: "Tamagotchi 2",
        hunger: 50,
        intelligence: 30,
        strength: 20,
        price: 100,
        created_at: moment().toString(),
    },
    {
        id: 3,
        name: "Tamagotchi 3",
        hunger: 50,
        intelligence: 20,
        strength: 80,
        price: 80,
        created_at: moment().toString(),
    },
];
