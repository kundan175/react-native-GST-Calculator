import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  color: string;
  size: number;
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#666',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 5,
            height: 70,
          },
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Calculator"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}: TabIconProps) => (
              <Icon name="calculate" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({color, size}: TabIconProps) => (
              <Icon name="info" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
