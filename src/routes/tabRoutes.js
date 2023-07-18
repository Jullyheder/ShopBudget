import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CartHistoric from '../pages/CartHistoric';
import Cart from '../pages/Cart';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      headerShown={false}
      initialRouteName='Cart'
      activeColor='#865A19'
      inactiveColor='#C4B282'
      barStyle={{ backgroundColor: '#0E002F' }}
    >
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <Icon name='cart' color={color} size={25} />
          )
        }}
      />
      <Tab.Screen
        name='CartHistoric'
        component={CartHistoric}
        options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ color }) => (
            <Icon name='history' color={color} size={25} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
