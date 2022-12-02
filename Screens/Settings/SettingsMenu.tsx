import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import BackButton from "../../Components/Shared/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsMenu() {
    return (
        <ImageBackground
            source={require("../../../assets/backgroundDark.png")}
            style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingTop: 20,
                paddingHorizontal: 20,
            }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <BackButton />
                    <Text
                        style={{
                            color: "white",
                            fontSize: 22,
                            fontWeight: "bold",
                            marginLeft: 10,
                        }}
                    >
                        Paramètres
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 20,
                        marginTop: 20,
                    }}
                >
                    <SettingsButton title="Tutoriel" />
                    <SettingsButton title="Effets sonores" />
                    <SettingsButton title="Notifications" />
                    <SettingsButton title="Vibration" />
                    <SettingsButton title="Convertir crypto" />
                    <SettingsButton title="Conditions d'utilisations" />
                    <SettingsButton title="Politique de confidentialité" />
                    <SettingsButton title="Rapporter une erreur" />
                    <SettingsButton title="Support" />

                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 20,
                        }}
                    >
                        <Image source={require("../../../assets/logout.png")} />
                        <Text
                            style={{
                                color: "black",
                                fontSize: 16,
                                fontWeight: "bold",
                                marginLeft: 10,
                            }}
                        >
                            Déconnexion
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

interface SettingsButtonProps {
    title: string;
}

function SettingsButton({ title }: SettingsButtonProps) {
    return (
        <View
            style={{
                width: "100%",
                height: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                borderBottomColor: "#0b1e0068",
                borderBottomWidth: 1,
            }}
        >
            <Text
                style={{
                    color: "#0b1e00",
                    fontWeight: "bold",
                }}
            >
                {title}
            </Text>
        </View>
    );
}
