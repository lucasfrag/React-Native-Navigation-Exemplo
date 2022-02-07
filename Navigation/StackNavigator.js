import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator'
import Pagamentos from '../src/Screens/Pagamentos';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Pagamentos" component={Pagamentos}  />

    </Stack.Navigator>
  );
};
export default StackNavigator;