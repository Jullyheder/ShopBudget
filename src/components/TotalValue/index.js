import React from 'react';

import {
  Container,
  TotalValueText
} from './styles';

export default function TotalValue({ total }) {
  return (
    <Container>
      <TotalValueText>Total</TotalValueText>
      <TotalValueText>R$ {total}</TotalValueText>
    </Container>
  );
}
