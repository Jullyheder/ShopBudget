import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HomeTouch
} from './styles';

export default function ProductHeader() {
  const navigation = useNavigation();

  return (
    <Container>
      <HomeTouch onPress={() => navigation.navigate('Produtos')}>
        <Icon name='home' size={30} color='#85005B' />
      </HomeTouch>
    </Container>
  );
}
