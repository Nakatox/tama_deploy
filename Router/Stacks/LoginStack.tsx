import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseEggScreen from "../../Screens/Login/ChooseEggScreen";
import LoginScreen from "../../Screens/Login/LoginScreen";
import KeepWordScreen from "../../Screens/Login/KeepWordScreen";
import GenerateScreen from "../../Screens/Login/GenerateScreen";

const LoginStack = createNativeStackNavigator();

export default function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="KeepWordScreen" component={KeepWordScreen} />
      <LoginStack.Screen name="GenerateScreen" component={GenerateScreen} />
      <LoginStack.Screen name="ChooseEgg" component={ChooseEggScreen} />
    </LoginStack.Navigator>
  );
}
