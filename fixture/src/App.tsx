/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import List from "./List";
import PaginatedList from "./PaginatedList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationKeys, RootStackParamList } from "./constants";
import { ExamplesScreen } from "./ExamplesScreen";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationKeys.EXAMPLES}
          component={ExamplesScreen}
        />
        <Stack.Screen name={NavigationKeys.LIST} component={List} />
        <Stack.Screen name={NavigationKeys.PAGINATED_LIST} component={PaginatedList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
