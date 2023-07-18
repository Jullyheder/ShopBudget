import React from 'react';
import { View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import {
  Container,
  InputTouch,
  InputSearch
} from './styles';

export default function SearchItem({
  clearInput, searchValue, changeValue
}) {
  return (
    <Container>
      { searchValue ? 
          (
            <InputTouch onPress={clearInput}>
              <Icon name='close' size={30} color='#85005B' />
            </InputTouch>
          )
        : (<View/>)}
        
        <InputSearch
          placeholder='Buscar Item...'
          value={searchValue}
          onChangeText={(text) => changeValue(text)}
        />
    </Container>
  );
}
