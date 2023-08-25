
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CallScreen from '../screens/CallScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import HelplineScreen from '../screens/HelplineScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();



const MainNavigator = () => {
  return (
      <Tab.Navigator
       
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Call"
          component={CallScreen}
          options={{
            tabBarLabel: 'Call',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="phone" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Helpline"
          component={HelplineScreen}
          options={{
            tabBarLabel: 'Helpline',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{
            tabBarLabel: 'Feedback',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="comment" color={color} size={26} />
            ),
          }}
        />
        
      </Tab.Navigator>
  );
};

export default MainNavigator;
