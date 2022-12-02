import React, { useEffect, useState, useCallback } from "react";
import { View } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeStack from "./Stacks/HomeStack";
import LoginStackScreen from "./Stacks/LoginStack";
import { TamagotchiProvider } from "../Providers/TamagochiProvider";
import { UserProvider } from "../Providers/UserProvider";
import { InventoryProvider } from "../Providers/InventoryProvider";
import TamagotchiHandler from "../Components/Shared/TamagotchiHandler";
import InventoryStackScreen from "./Stacks/InventoryStack";
import Inventory from "../Components/Home/Inventory";
import DetailsScreen from "../Screens/Home/DetailsScreen";

SplashScreen.preventAutoHideAsync();

const RootStack = createNativeStackNavigator();

export default function Router() {
    const [appAssetsLoaded, setAssetsAppLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            // Font.loadAsync({
            //     Font1: require('../assets/fonts/Font1.ttf'),
            //     Font2: require('../assets/fonts/Font2.ttf'),
            // }),
            // Asset.fromModule(require('../assets/images/image1.png')).downloadAsync(),
            // Asset.fromModule(require('../assets/images/image2.png')).downloadAsync(),
        ]).then(() => {
            setAssetsAppLoaded(true);
        });
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appAssetsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [appAssetsLoaded]);

    if (!appAssetsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <UserProvider>
                <InventoryProvider>
                    <TamagotchiProvider>
                        <TamagotchiHandler>
                            <NavigationContainer>
                                <RootStack.Navigator
                                    screenOptions={{ headerShown: false }}
                                >
                                    <RootStack.Group>
                                        <RootStack.Screen
                                            name="LoginStack"
                                            component={LoginStackScreen}
                                        />
                                    </RootStack.Group>

                                    <RootStack.Screen
                                        name="HomeStack"
                                        component={HomeStack}
                                    />

                                    <RootStack.Group
                                        screenOptions={{
                                            presentation: "transparentModal",
                                        }}
                                    >
                                        <RootStack.Screen
                                            name="InventoryStack"
                                            component={InventoryStackScreen}
                                        />
                                    </RootStack.Group>
                                </RootStack.Navigator>
                            </NavigationContainer>
                        </TamagotchiHandler>
                    </TamagotchiProvider>
                </InventoryProvider>
            </UserProvider>
        </View>
    );
}
