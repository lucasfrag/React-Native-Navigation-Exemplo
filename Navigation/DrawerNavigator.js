import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/Screens/Home';
import Pagamentos from '../src/Screens/Pagamentos';
import Categorias from '../src/Screens/Categorias';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Categorias" component={Categorias} />
      <Drawer.Screen name="Pagamentos" component={Pagamentos} />

    </Drawer.Navigator>
  );
};
export default DrawerNavigator;