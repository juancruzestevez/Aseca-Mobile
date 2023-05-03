import StartPage from "./scr/pages/StartPage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchPage from "./scr/pages/SearchPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={StartPage}/>
          <Stack.Screen name="Search" component={SearchPage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}