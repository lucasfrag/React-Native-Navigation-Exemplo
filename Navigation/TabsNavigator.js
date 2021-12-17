import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import Home from '../Screens/Home';
import Messages from '../Screens/Messages';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
const icons = {
  Home: {
    name: 'home'
  },
  Messages: {
    name: 'mail'
  },
  Profile: {
    name: 'person'
  }
}


const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen 
        name="Home" 
        component={StackNavigator} 
        options={{headerShown: false}} 
        
        screenOptions={ ({route}) => ({
          tabBarIcon: () => {
            const {name} = icons[route.name];
            return <Icon name={name} size={20} />
          }
        })}

      />
      <Tabs.Screen 
        name="Messages" 
        component={Messages}  

        screenOptions={ ({route}) => ({
          tabBarIcon: () => {
            const {name} = icons[route.name];
            return <Icon name={name} size={20} />
          }
        })}
      />
      <Tabs.Screen 
        name="Profile" 
        component={Profile}  

        screenOptions={ ({route}) => ({
          tabBarIcon: () => {
            const {name} = icons[route.name];
            return <Icon name={name} size={20} />
          }
        })}        
      />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;