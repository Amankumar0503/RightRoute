import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useLogin } from '../context/LoginProvider';
import { useSignUP } from '../context/SignUpProvider';
import DrawerNavigator from './DrawerNavigator';

import AppForm from '../component/AppForm'
import UserProfile from '../component/UserProfile';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
    
     
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  const { isSignedIn } = useSignUP(); // Use the correct hook name

  // Choose which stack to show based on login and signup status
  const StackToRender = isLoggedIn || isSignedIn ? DrawerNavigator : StackNavigator;

  return (
    
      <StackToRender />
    
  );
};
export default MainNavigator;