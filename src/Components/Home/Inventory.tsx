import {
    View,
    Text,
    Pressable,
    Image,
    SafeAreaView,
    FlatList,
    StyleSheet,
    ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { InventoryContext } from "../../Providers/InventoryProvider";
import { TamagotchiContext } from "../../Providers/TamagochiProvider";
import { TamagotchiType } from "../../Fixtures/tamagotchi";
import BackButton from "../Shared/BackButton";
import BalaceButton from "../Shared/BalaceButton";

export default function Inventory() {
    const navigation = useNavigation();

    const { inventory } = useContext(InventoryContext);
    console.log(inventory);
    
    const tamagotchiContext = useContext(TamagotchiContext);
    const { tamagotchi, setTamagotchi } = tamagotchiContext;

    const chooseTama = (tamagotchi: TamagotchiType) => {
        setTamagotchi(tamagotchi);
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={require("../../../assets/background.png")}
            style={{
                flex: 1,
            }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
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
                <View style={styles.modal}>
                    <FlatList
                        ListEmptyComponent={
                            <Text style={styles.emptyText}>
                                You don't have any tamagotchis yet
                            </Text>
                        }
                        data={inventory}
                        contentContainerStyle={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        style={{
                            width: "100%",
                        }}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 50 }} />
                        )}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    alignSelf: "center",
                                }}
                            >
                                <Image
                                    source={require("../../../assets/tamagotchi/tamagotchi_1_stand_1.png")}
                                    style={{
                                        width: 110,
                                        height: 130,
                                        marginRight: 10,
                                    }}
                                />
                                <View>
                                    <Pressable
                                        style={[styles.button]}
                                        onPress={() =>
                                            navigation.navigate("Details", {
                                                tamagotchiParam: item,
                                            })
                                        }
                                    >
                                        <Text>Voir</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[
                                            styles.button,
                                            {
                                                backgroundColor: "#25df82",
                                                left: 20,
                                                marginTop: 20,
                                            },
                                        ]}
                                        onPress={() => {
                                            setTamagotchi(item);

                                            navigation.goBack();
                                        }}
                                    >
                                        <Text style={{ color: "white" }}>
                                            Utiliser
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4545457f",
    },
    modal: {
        flex: 1,
        margin: 20,
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        backgroundColor: "#F5EBB3",
    },
    button: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    emptyText: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
    },
});
