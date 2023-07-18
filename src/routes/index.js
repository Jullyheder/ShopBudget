import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductHeader from '../components/ProductHeader';


import Product from '../pages/Product';
import TabRoutes from './tabRoutes';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Produtos'
        component={Product}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='CartTab'
        component={TabRoutes}
      />
    </Stack.Navigator>
  );
}

export default Routes;
