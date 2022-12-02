import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function StatDetail({ stat,  statName } : { stat: number, statName: string }) {

    const renderImage = () => {
        switch (statName) {
            case "Nourriture":
                return <Image
                    style={{ width: 50, height: 30, marginVertical:10 }}
                    source={require("../../../assets/food.png")} 
                    />;
            case "Intelligence":
                return <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../../assets/lunettes.png")} 
                    />;
            case "Force":
                return <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../../assets/force.png")} 
                    />;
        }
    };


    return (
        <View
            style={{
                alignSelf: "center",
                marginVertical: 10,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                }}
            >
                {renderImage()}
                <View
                    style={{
                        marginLeft: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            marginBottom: 5,
                        }}
                    >{statName}</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#A9A9A9",
                        }}
                    >{stat} sur 100 {statName}</Text>
                </View>
            </View>
            <View>
                <View 
                    style={{
                        zIndex:2,
                        width: stat * 2.5,
                        height: 7,
                        borderRadius: 10,
                        position: "absolute",
                        backgroundColor: stat > 50 ? "green" : "red",
                    }}
                />
                <View
                    style={{
                        zIndex: 1,
                        width: 250,
                        height: 7,
                        borderRadius: 10,
                        backgroundColor: "#E0E0E0",
                    }}
                />
            </View>
        </View>
    );
}
