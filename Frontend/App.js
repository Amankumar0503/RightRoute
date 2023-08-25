import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './app/utils/MainNavigator';
import LoginProvider from './app/context/LoginProvider';
import SignUpProvider from './app/context/SignUpProvider';

export default function App() {
  return (
    <>
      <LoginProvider>
        <SignUpProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </SignUpProvider>
      </LoginProvider>
    </>
  );
}