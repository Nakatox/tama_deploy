import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    let navigation = useNavigation();

    const image = require("../../../assets/Vector.png");
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.button1}>
                    <Button
                        title="Connecter wallet"
                        onPress={() => {
                            navigation.navigate("KeepWordScreen", {
                                item: "test",
                            });
                        }}
                    ></Button>
                </View>
                <View style={styles.button2}>
                    <Button
                        title="Créer wallet"
                        onPress={() => {
                            navigation.navigate("GenerateScreen", {});
                        }}
                    ></Button>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    button1: {
        backgroundColor: "#F5EBB3",
        width: 180,
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginLeft: 110,
        marginBottom: 20,
        borderRadius: 5,
    },
    button2: {
        backgroundColor: "#F5EBB3",
        width: 180,
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginLeft: 110,
        borderRadius: 5,
    },
});
