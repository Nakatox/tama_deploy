import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Image
                style={{
                    width: 30,
                    height: 30,
                    margin: 10,
                }}
                source={require("../../../assets/arrow.png")}
            />
        </Pressable>
    );
}
