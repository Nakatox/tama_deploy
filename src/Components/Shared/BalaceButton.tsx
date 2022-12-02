import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { SvgUri } from "react-native-svg";

export default function BalaceButton() {
    const context = useContext(UserContext);
    const { user, setUser } = context;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/coin.png")}
            />

            <Text style={styles.amount}>{user.token}</Text>

            <Image
                style={styles.image}
                source={require("../../../assets/plus.png")}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "#F5EBB3",
        borderRadius: 30,
        padding: 10,
        marginTop: 10,
        // marginHorizontal: 30,
        width: 200,
    },
    image: {
        width: 30,
        height: 30,
    },
    amount: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
});
