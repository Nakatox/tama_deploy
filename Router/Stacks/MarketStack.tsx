import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../../Screens/Home/DetailsScreen";
import MarketScreen from "../../Screens/Market/MarketScreen";

const MarketStack = createNativeStackNavigator();

export default function MarketStackScreen() {
    return (
        <MarketStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MarketStack.Screen name="MarketScreen" component={MarketScreen} />
            <MarketStack.Screen name="Details" component={DetailsScreen} />
        </MarketStack.Navigator>
    );
}
