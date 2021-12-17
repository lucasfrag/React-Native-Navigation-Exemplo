import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;