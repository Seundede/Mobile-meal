import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurant from "./screens/Restaurant";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./screens/Cart";
import BottomTab from "./screens/BottomTab";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Allergy from "./screens/Allergy";
import { StripeProvider } from "@stripe/stripe-react-native";
import Home from "./screens/Home";
import { LogBox } from "react-native";
import Splash from "./screens/Splash";
import Signin from "./screens/Signin";
import Checkout from "./components/Checkout";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [state, setState] = useState(false);


  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setState(true);
        return <Home />;
      }
    });

    return subscribe;
  }, []);

  LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <Provider store={store}>
      <StripeProvider
        publishableKey="pk_test_51KOIZDFthq0D0sgzx2jY3Fv2tZGbKLHOju78M3moCDgT26TbL64hECrGxj0n0dy7nb8PY7sS53SoP9DRA9UuuAL200gHlJQs5y"
        merchantIdentifier="merchant.com.foodDelivery"
     
        threeDSecureParams={{
          backgroundColor: '#fff',
          timeout: 3,
        }}
      >
        <NavigationContainer>
          <StatusBar style="auto" />
          {state ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="BottomTab">
                {(props) => <BottomTab {...props} setAppState={setState} />}
              </Stack.Screen>
              <Stack.Screen name="Restaurant" component={Restaurant} />
              <Stack.Screen name="Allergy" component={Allergy} />
              <Stack.Screen
                name="Checkout"
                component={Checkout}
                options={{
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
              
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen component={Splash} name="Splash" />
              <Stack.Screen component={Signin} name="Signin" />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}
