import moment from "moment";

export interface UserType {
    token: number;
    lastTimeTamagotchiWorked: string;
    lastTimeTamagotchiIntelligence: string;
    lastTimeTamagotchiStrenght: string;
}

export let users: UserType[] = [
    {
        token: 500000,
        lastTimeTamagotchiWorked: moment().subtract(1, "days").toString(),
        lastTimeTamagotchiIntelligence:moment().subtract(1, "days").toString() ,
        lastTimeTamagotchiStrenght:moment().subtract(1, "days").toString() ,
    },
]