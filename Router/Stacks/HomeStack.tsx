import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inventory from "../../Components/Home/Inventory";
import DetailsScreen from "../../Screens/Home/DetailsScreen";
import HomeScreen from "../../Screens/Home/HomeScreen";
import ChooseEggScreen from "../../Screens/Login/ChooseEggScreen";
import InventoryStackScreen from "./InventoryStack";
import MarketStackScreen from "./MarketStack";
import SettingsStackScreen from "./SettingsStack";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Settings" component={SettingsStackScreen} />
            <HomeStack.Screen name="Market" component={MarketStackScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}
