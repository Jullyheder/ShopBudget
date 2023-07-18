import React, { useState, useContext } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
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
  AmountIncreaseTouch,
  AddProductTouch
} from './styles';

export default function ProductsItems({ data, handleModalOpen, indexItem }) {
  const { addProductCart } = useContext(CartContext);
  const [amount, setAmount] = useState('1');

  function handleReduce() {
    if (Number(amount) > 1) {
      amountNumber = Number(amount);
      amountNumber--;
      setAmount(String(amountNumber));
    }
  }

  function handleIncrease() {
    amountNumber = Number(amount);
    amountNumber++;
    setAmount(String(amountNumber));
  }

  function handleEditProduct() {
    handleModalOpen(data);
  }

  function handleAddProductCart() {
    const convertPrice = Number(data.price.replace(',', '.'));
    const convertAmount = Number(amount);
    const totalValue = convertAmount * convertPrice
    const dataCart = {
      id: data.id,
      amount: convertAmount,
      nameProduct: data.nameProduct,
      price: convertPrice,
      total: Number(totalValue.toFixed(2))
    }
    addProductCart(dataCart);
    setAmount('1');
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleEditProduct}>
      <Container alterColor={indexItem % 2}>
        <NameContainer>
          <NameText>{data.nameProduct}</NameText>
        </NameContainer>

        <AddProductTouch onPress={handleAddProductCart}>
          <Icon name='plus' size={20} color='#85005B' />
        </AddProductTouch>

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
        </PriceContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
