import { View, Text } from "react-native";
import React from "react";
import { TamagotchiType } from "../../Fixtures/tamagotchi";

interface TamagotchiProps {
    tamagotchi: TamagotchiType;
}

export default function Tamagotchi({ tamagotchi }: TamagotchiProps) {
    return (
        <View>
            <Text>{tamagotchi && tamagotchi.name}</Text>
        </View>
    );
}
