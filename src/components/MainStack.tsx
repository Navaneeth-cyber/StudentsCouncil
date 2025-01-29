import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./LoginScreen";
import { DashboardScreen } from "./DashboardScreen";
import { WinnersScreen } from "./WinnersScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
      }}
    >
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
      <StackNavigator.Screen
        name="Winners"
        component={WinnersScreen}
        options={{
          title: "Winners Gallery",
          headerTintColor: "#2563eb",
        }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);