import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CartProvider from './src/contexts/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar style="auto" />
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}
