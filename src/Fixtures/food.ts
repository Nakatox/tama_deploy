export interface FoodType {
    id: number;
    name: string;
    price: number;
    hunger: number;
}

export let Foods: FoodType[] = [
    {
        id: 1,
        name: "Burger",
        price: 10,
        hunger: 10,
    },
    {
        id: 2,
        name: "Pizza",
        price: 20,
        hunger: 20,
    },
    {
        id: 3,
        name: "Sushi",
        price: 30,
        hunger: 30,
    },
];
