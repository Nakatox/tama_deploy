import { useNavigation } from "@react-navigation/native";
import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput,
    ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
export default function KeepWordScreen() {
    let navigation = useNavigation();

    const { params } = useRoute();
    const { item } = params;
    console.log(item);
    const [textInputName, setTextInputName] = useState("");

    const checkTextInput = () => {
        //Check for the Name TextInput
        let itemstring = item.toString();

        if (!itemstring.trim() && textInputName == itemstring) {
            alert("Please Enter words");
            return;
        }

        //Checked Successfully
        //Do whatever you want
        navigation.navigate("ChooseEgg");
    };
    const image = require("../../../assets/Vector.png");

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 34,
                        marginTop: 60,
                        marginLeft: 90,
                        marginBottom: 80,
                    }}
                >
                    Connecter wallet
                </Text>
                <TextInput
                    style={styles.inputt}
                    placeholder="Enter secret recovery phrase"
                    onChangeText={(value) => setTextInputName(value)}
                />
                <View style={styles.button4}>
                    <Button
                        title="Connection"
                        onPress={checkTextInput}
                        color="#606070"
                    />
                </View>
                <Button
                    title="J’ai oublié ma phrase de connexion"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <View style={styles.button3}>
                    <Button
                        color="white"
                        title="Retour au menu précédent"
                        onPress={() => {
                            navigation.navigate("Login");
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    inputspace: {
        padding: 10,
        height: 50,
        width: 150,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
    },
    inputt: {
        padding: 10,
        width: 320,
        marginLeft: 50,
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: "#D9D9D9",
        opacity: 0.5,
        color: "grey",
        borderRadius: 5,
    },
    button3: {
        marginTop: 220,
    },
    button4: {
        backgroundColor: "#F5EBB3",
        width: 180,
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginLeft: 110,
        marginBottom: 20,
        marginTop: 40,
        borderRadius: 5,
    },
});
