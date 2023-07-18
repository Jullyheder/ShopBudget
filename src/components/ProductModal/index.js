import { useState, useContext } from 'react';
import {
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { CartContext } from '../../contexts/auth';

import {
  Container,
  CloseTouch,
  ContainerFeed,
  NameProductInput,
  PriceContainer,
  PriceText,
  PriceProductInput,
  AddProductTouch,
  AddProductText
} from './styles';

export default function ProductModal({
  data,
  edit,
  handleEdit,
  handleClose,
  clearProduct
}) {
  const [nameProduct, setNameProduct] = useState(
    !data.nameProduct ? '' : data.nameProduct
  );
  const [priceProduct, setPriceProduct] = useState(
    !data.price ? '' : data.price
  );
  const { addProduct, editProduct } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    clearProduct();
    handleEdit();
    handleClose();
  }

  function handleSet() {
    setLoading(true);
    if (edit) {
      if (nameProduct === '' || priceProduct === '') {
        alert('Por favor, verificar se todos os campos foram preenchidos!')
        return;
      }

      const priceNumber = Number(priceProduct.replace(',', '.'));
      editProduct(data.id, nameProduct, priceNumber);
    } else {

      if (nameProduct === '' || priceProduct === '') {
        alert('Por favor, verificar se todos os campos foram preenchidos!')
        return;
      }

      const priceNumber = Number(priceProduct.replace(',', '.'));
      addProduct(nameProduct, priceNumber);
    }
    clearProduct();
    handleEdit();
    setLoading(false);
    handleClose();
  }

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerFeed>
          <CloseTouch onPress={closeModal}>
            <Icon name='close' size={30} color='#C4B282' />
          </CloseTouch>

          <NameProductInput
            placeholder='Nome do produto'
            value={nameProduct}
            onChangeText={(val) => setNameProduct(val)}
          />

          <PriceContainer>
            <PriceText>R$</PriceText>
            <PriceProductInput
              placeholder='Valor do produto'
              value={priceProduct}
              onChangeText={(val) => setPriceProduct(val)}
              keyboardType='numeric'
            />
          </PriceContainer>

          <AddProductTouch onPress={handleSet}>
            <AddProductText>
              { loading ? 
                (<ActivityIndicator size="small" color="#C4B282" />)
              :
                (edit ? 'Editar' : 'Adicionar')
              }
            </AddProductText>
          </AddProductTouch>
        </ContainerFeed>
      </TouchableWithoutFeedback>
    </Container>
  );
}
