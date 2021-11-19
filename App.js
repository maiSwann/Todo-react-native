import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native'

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import SideMenuScreen from './screens/SideMenuScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerBackVisible: false,
          headerLargeTitle: true,
          }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerBackVisible: false
          }} />
        <Stack.Screen name="SideMenuScreen" component={SideMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}