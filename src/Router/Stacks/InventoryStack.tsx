import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inventory from "../../Components/Home/Inventory";
import DetailsScreen from "../../Screens/Home/DetailsScreen";

const InventoryStack = createNativeStackNavigator();

export default function InventoryStackScreen() {
    return (
        <InventoryStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <InventoryStack.Screen
                name="Inventory"
                component={Inventory}
                options={{
                    presentation: "transparentModal",
                    headerShown: false,
                }}
            />

            <InventoryStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ presentation: "card", headerShown: false }}
            />
        </InventoryStack.Navigator>
    );
}
