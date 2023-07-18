import React, {useState, useEffect, useContext} from 'react';
import { View, Alert } from 'react-native';
import { format } from 'date-fns';
import { CartContext } from '../../contexts/auth';
import ProductHeader from '../../components/ProductHeader';
import TotalValue from '../../components/TotalValue';
import SearchItem from '../../components/SearchItem';
import CartItems from '../../components/CartItems';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import {
  Container,
  EmptyContainer,
  EmptyText,
  LoadingAI,
  ListCart,
  AddTouch,
} from './styles';

export default function Cart({ navigation }) {
  const { cart, loadingCart, cartHistoric, addObjectCartHistoric } = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(cart);

  useEffect(() => {
    const filteredList = cart.filter((item) =>
        item.nameProduct.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredList);

      const totalSum = cart.reduce((accumulator, product) => accumulator + Number(product.total.replace(',', '.')), 0);
      setTotalSum(String(totalSum.toFixed(2).replace('.', ',')));
  }, [cart, searchValue])

  function addCartHistoric() {
    const dateNow = format(Date.now(), 'dd/MM/yyyy');

    if(cartHistoric[dateNow]) {
      Alert.alert('Salvar seu Carrinho', 'Já existe carrinho com essa data deseja sobrescrever?', [
        {
          text: 'Cancelar',
          onPress: () => {return},
          style: 'cancel',
        },
        // passar dateNow para ir ao selected da data!
        {text: 'Salvar', onPress: () => addObjectCartHistoric(dateNow, valid=true)}
      ]);

    } else {
      addObjectCartHistoric(dateNow, valid=false)
    }
  }

  if (loadingCart) {
    return(
      <Container>
        <ProductHeader/>
        <LoadingAI size="large" color='#85005B' />
      </Container>
    )
  }

  if (cart.length === 0) {
    return (
      <EmptyContainer>
        <ProductHeader/>
        <EmptyText>Carrinho vazio...</EmptyText>
      </EmptyContainer>
    )
  }

  return (
    <Container>
      <ProductHeader/>

      <TotalValue total={totalSum} />

      <SearchItem
        clearInput={() => setSearchValue('')}
        searchValue={searchValue}
        changeValue={(val) => setSearchValue(val)}
      />

      { (cart.length > 0) ? (
        <AddTouch onPress={addCartHistoric}>
          <Icon name='content-save-outline' size={30} color='#C4B282' />
        </AddTouch>
      ) : <View/>}

      <ListCart
        data={filteredData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <CartItems
            data={item}
            indexItem={filteredData.findIndex(p => p.id === item.id)}
          />
        }
      />
    </Container>
  );
}
