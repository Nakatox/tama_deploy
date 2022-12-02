import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { tamagotchisFixtures, TamagotchiType } from "../../Fixtures/tamagotchi";
import {
    TamagotchiContext,
    TamagotchiContextType,
} from "../../Providers/TamagochiProvider";
import { useNavigation } from "@react-navigation/native";
import { InventoryContext } from "../../Providers/InventoryProvider";

export default function ChooseEggScreen() {
    const image = require("../../../assets/Vector.png");

    function getRandomTamagotchi() {
        return tamagotchisFixtures[
            Math.floor(Math.random() * tamagotchisFixtures.length)
        ];
    }

    return (
        <ImageBackground
            source={image}
            resizeMode="cover"
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <SafeAreaView>
                <Text
                    style={{
                        fontSize: 24,
                        alignSelf: "center",
                        color: "white",
                        marginBottom: 50,
                    }}
                >
                    CHOISIR UN CHAO EGGS
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 50,
                    }}
                >
                    <Egg
                        tamagotchi={getRandomTamagotchi()}
                        topPosition={0}
                        img={require("../../../assets/EGG1.png")}
                    />
                    <Egg
                        tamagotchi={getRandomTamagotchi()}
                        topPosition={100}
                        img={require("../../../assets/EGG2.png")}
                    />
                    <Egg
                        tamagotchi={getRandomTamagotchi()}
                        topPosition={0}
                        img={require("../../../assets/EGG3.png")}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );

    interface EggProps {
        tamagotchi: TamagotchiType;
        topPosition: number;
        img: string;
    }

    function Egg({ tamagotchi, topPosition, img }: EggProps) {
        const { setTamagotchi } = useContext(
            TamagotchiContext
        ) as TamagotchiContextType;

        const { setInventory } = useContext(InventoryContext);
        const { tamagotchis, setTamagotchis } = useContext(TamagotchiContext);

        const navigation = useNavigation();

        return (
            <Pressable
                onPress={() => {
                    setTamagotchi(tamagotchi);
                    setInventory([tamagotchi])
                    setTamagotchis(
                        tamagotchis.filter(
                            (t: TamagotchiType) => t.id !== tamagotchi.id
                        )
                    );
                    navigation.navigate("HomeStack");
                }}
                style={{
                    top: topPosition,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: 10,
                    }}
                >
                    {tamagotchi && tamagotchi.price}$
                </Text>

                <Image source={img} style={{}} />
            </Pressable>
        );
    }
}
