import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import AppNavigator from './AppNavigator';
import SignUpScreen from '../screens/SignUpScreen';


function LoginNavigator(){
    const Stack = createStackNavigator();

    return (
     
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{
              headerStyle: {
                backgroundColor: '#ffb6b6',
              },
              headerTintColor: 'black',
            }}
          />
          <Stack.Screen name="App" component={AppNavigator} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
         
    );
}
export default LoginNavigator;