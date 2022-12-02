import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsMenu from "../../Screens/Settings/SettingsMenu";

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SettingsStack.Screen
                name="SettingsMenu"
                component={SettingsMenu}
            />
        </SettingsStack.Navigator>
    );
}
