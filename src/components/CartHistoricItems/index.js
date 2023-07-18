import React, { useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native';

import {
  Container,
  NameContainer,
  NameText,
  PriceContainer,
  PriceText,
} from './styles';

export default function CartHistoricItems({ data }) {
  return (
    <Container alterColor={data.id % 2}>
      <NameContainer>
        <NameText>{data.nameProduct}</NameText>
      </NameContainer>

      <PriceContainer>
        <PriceText>{data.amount}</PriceText>
        <PriceText>x</PriceText>
        <PriceText>R$ {data.price}</PriceText>
        <PriceText style={{fontWeight: 'bold'}}>R$ {data.total}</PriceText>
      </PriceContainer>
    </Container>
  );
}
