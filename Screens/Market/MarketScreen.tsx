import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Pressable,
    Image,
    SafeAreaView,
    ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import BalaceButton from "../../Components/Shared/BalaceButton";
import BackButton from "../../Components/Shared/BackButton";
import { TamagotchiContext } from "../../Providers/TamagochiProvider";

export default function MarketScreen() {
    const navigation = useNavigation();

    const tamagochisContext = useContext(TamagotchiContext);
    const { tamagotchis } = tamagochisContext;

    return (
        <ImageBackground
            source={require("../../../assets/background.png")}
            style={styles.container}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <BackButton />
                <BalaceButton />
            </View>
            <View style={styles.tamagochisContainer}>
                <FlatList
                    data={tamagotchis}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.cardContainer}>
                                <Image
                                    source={require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")}
                                    style={{
                                        width: 110,
                                        height: 130,
                                        marginRight: 10,
                                    }}
                                />
                                <Text style={styles.price}>
                                    {item.price} eth
                                </Text>

                                <Pressable
                                    style={({ pressed }) => [
                                        {
                                            paddingHorizontal: 20,
                                            paddingVertical: 5,
                                            margin: 10,
                                            marginTop: 0,
                                            borderRadius: 20,
                                            textAlign: "center",
                                            backgroundColor: "#25df82",
                                        },
                                    ]}
                                    onPress={() => {
                                        navigation.navigate("Details", {
                                            tamagotchiParam: item,
                                        });
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        Acheter
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    tamagochisContainer: {
        flex: 1,
        alignSelf: "center",
        backgroundColor: "#F5EBB3",
        padding: 10,
        borderRadius: 20,
        margin: 20,
    },
    cardContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    cardName: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    cardImage: {
        flex: 1,
        width: 100,
        height: 100,
    },
    priceContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        marginTop: 0,
        borderRadius: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 5,
    },
    buyButton: {
        padding: 10,
        margin: 10,
        marginTop: 10,
        borderRadius: 20,
        textAlign: "center",
        width: 100,
    },
});
