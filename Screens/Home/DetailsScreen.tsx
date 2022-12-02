import { View, Text, SafeAreaView, Button, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import React, { useContext } from "react";
import { TamagotchiType } from "../../Fixtures/tamagotchi";
import Tamagotchi from "../../Components/Shared/Tamagotchi";
import BackButton from "../../Components/Shared/BackButton";
import BalaceButton from "../../Components/Shared/BalaceButton";
import moment from "moment";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
    TamagotchiContext,
    TamagotchiContextType,
} from "../../Providers/TamagochiProvider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from "../../Providers/UserProvider";
import { InventoryContext } from "../../Providers/InventoryProvider";
import StatDetail from "../../Components/Home/StatDetail";

interface TamagotchiProps {
    tamagotchi: TamagotchiType;
}

export default function DetailsScreen() {
    const route = useRoute();
    const params = route.params;
    const { tamagotchiParam } = params as { tamagotchi: TamagotchiType };

    const userContext = useContext(UserContext);
    const inventoryContext = useContext(InventoryContext);
    const tamagotchiContext = useContext(TamagotchiContext);

    const { user, setUser } = userContext;
    const { inventory, setInventory } = inventoryContext;
    const { tamagotchi, setTamagotchis, tamagotchis, setTamagotchi } =
        tamagotchiContext;

    function isOwned() {
        return inventory.find(
            (tama: TamagotchiType) => tama.id === tamagotchiParam.id
        );
    }

    const navigation = useNavigation();

    const buyTamagotchi = () => {
        if (user.token >= tamagotchiParam.price) {
            user.token -= tamagotchiParam.price;
            setInventory([...inventory, tamagotchiParam]);
            setTamagotchis(
                tamagotchis.filter(
                    (t: TamagotchiType) => t.id !== tamagotchiParam.id
                )
            );
            setUser(user);
            navigation.goBack();
        }
    };

    const sellTamagotchi = () => {
        user.token +=
            tamagotchiParam.price +
            (tamagotchiParam.strength + tamagotchiParam.intelligence) * 0.5;
        setTamagotchis([...tamagotchis, tamagotchiParam]);
        setInventory(
            inventory.filter((t: TamagotchiType) => t.id !== tamagotchiParam.id)
        );
        if (tamagotchiParam.id === tamagotchi.id) {
            setTamagotchi([]);
        }
        setUser(user);

        navigation.goBack();
    };

    return (
        <ImageBackground
            source={require("../../../assets/backgroundDark.png")}
            style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingTop: 50,
            }}
        >
            <ScrollView>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <BackButton />
                <BalaceButton />
            </View>
            <View
                style={{
                    marginTop: 50,
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <View
                    style={{
                        zIndex: 2,
                        backgroundColor: "white",
                        borderRadius: 90,
                        padding: 20,
                        borderColor: "#0b1e00",
                        borderWidth: 10,
                    }}
                >
                    <Image
                        source={require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")}
                        style={{
                            zIndex: 2,
                            width: 100,
                            height: 105,
                            marginHorizontal: 5,
                        }}
                    />
                </View>
                <View
                    style={{
                        zIndex: 1,
                        backgroundColor: "white",
                        borderRadius: 800,
                        width: 800,
                        height: 800,
                        position: "absolute",
                        top: 80,
                    }}
                />
            </View>
            <View
                style={{
                    backgroundColor: "white",
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: 20,
                        }}
                    >
                        {tamagotchiParam.name}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 20,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Jour de possession
                        </Text>
                        <Text
                            style={{
                                fontSize: 50,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            {moment(tamagotchiParam.date).format("D")}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Prix
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 50,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {tamagotchiParam.price +
                                    (tamagotchiParam.strength +
                                        tamagotchiParam.intelligence) *
                                        0.5}
                            </Text>
                            <Image
                                source={require("../../../assets/coin.png")}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginHorizontal: 5,
                                    alignSelf: "center",
                                }}
                            />
                        </View>
                    </View>
                </View>
                <StatDetail
                    stat={tamagotchiParam.hunger}
                    statName="Nourriture"
                />
                <StatDetail
                    stat={tamagotchiParam.intelligence}
                    statName="Intelligence"
                />
                <StatDetail stat={tamagotchiParam.strength} statName="Force" />

                {/* <Stats
                    title="Jours de posséssiosn"
                    stat={moment(tamagotchiParam.created_at).format(
                        "DD MMMM YYYY"
                    )}
                />
                <Stats title="Nourriture" stat={tamagotchiParam.hunger} />
                <Stats
                    title="Intelligence"
                    stat={tamagotchiParam.intelligence}
                />
                <Stats title="Force" stat={tamagotchiParam.strength} />
                <Stats
                    title="Nombre d'heures avant de travailler"
                    stat={
                        moment().diff(
                            tamagotchiParam.date_before_next_work,
                            "hours"
                        ) + "h"
                    }
                /> */}
                {isOwned() ? (
                    <Button title="Vendre" onPress={sellTamagotchi} />
                ) : (
                    <Button title="Acheter" onPress={buyTamagotchi} />
                )}
            </View>
            </ScrollView>
        </ImageBackground>
    );
}
