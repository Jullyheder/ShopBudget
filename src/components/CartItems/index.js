import React, { useState, useContext } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { CartContext } from '../../contexts/auth';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import {
  Container,
  NameContainer,
  NameText,
  PriceContainer,
  PriceText,
  AmountContainer,
  AmountReduceTouch,
  AmountInput,
  AmountIncreaseTouch
} from './styles';

export default function ProductsItems({ data, indexItem }) {
  const { editProductCart, deleteProductCart } = useContext(CartContext);
  const [amount, setAmount] = useState(data.amount);

  function handleReduce() {
    if (Number(amount) > 1) {
      const convertPrice = Number(data.price.replace(',', '.'));
      let amountNumber = Number(amount);
      amountNumber--;
      setAmount(String(amountNumber));
      const totalValue = amountNumber * convertPrice;
      editProductCart(data.id, amountNumber, Number(totalValue.toFixed(2)));
    } else {
      deleteProductCart(data.id);
    }
  }

  function handleIncrease() {
    const convertPrice = Number(data.price.replace(',', '.'));
    let amountNumber = Number(amount);
    amountNumber++;
    setAmount(String(amountNumber));
    const totalValue = amountNumber * convertPrice;
    editProductCart(data.id, amountNumber, Number(totalValue.toFixed(2)));
  }

  return (
    <TouchableWithoutFeedback>
      <Container alterColor={indexItem % 2}>
        <NameContainer>
          <NameText>{data.nameProduct}</NameText>
        </NameContainer>

        <PriceContainer>
          <AmountContainer>
            <AmountReduceTouch onPress={handleReduce}>
              <Icon name='minus' size={17} color='#C4B282' />
            </AmountReduceTouch>

            <AmountInput>{amount}</AmountInput>

            <AmountIncreaseTouch onPress={handleIncrease}>
              <Icon name='plus' size={17} color='#C4B282' />
            </AmountIncreaseTouch>
          </AmountContainer>

          <PriceText>R$ {data.price}</PriceText>
          <PriceText style={{fontWeight: 'bold'}}>R$ {data.total}</PriceText>
        </PriceContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
