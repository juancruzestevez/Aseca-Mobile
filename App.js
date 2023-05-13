import StartPage from "./scr/pages/StartPage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchPage from "./scr/pages/SearchPage";
import LeaguePage from "./scr/pages/LeaguePage";
import TeamPage from "./scr/pages/TeamPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={StartPage} options={{ headerShown: true, }}/>
          <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: true, }}/>
          <Stack.Screen name="League" component={LeaguePage} options={{ headerShown: true, }}/>
          <Stack.Screen name="Team" component={TeamPage} options={{ headerShown: true, }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}