import React, { useContext, useState, useEffect } from 'react';
import { Modal, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { CartContext } from '../../contexts/auth';
import ProductsItems from '../../components/ProductsItems';
import ProductModal from '../../components/ProductModal';
import SearchItem from '../../components/SearchItem';

import {
  Container,
  CartContainer,
  CartTouch,
  CartCountContainer,
  CartCountText,
  AddTouch,
  ListProductsAdd,
  LoadingAI,
  Footer
} from './styles';

export default function Product({ navigation }) {
  const { products, loadingProduct, cart } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [verifyEdit, setVerifyEdit] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(products);

  useEffect(() => {
    // Filtra a lista de produtos com base no valor digitado
    const filteredList = products.filter((item) =>
      item.nameProduct.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredList);
  }, [products, searchValue]);

  function handleEditProduct(data) {
    setProduct(data);
    setVerifyEdit(true);
    setModalVisible(true);
  }

  return (
    <Container>
      <CartContainer>
        <CartTouch onPress={() => navigation.navigate('CartTab')}>
          <Icon name='cart-outline' size={30} color='#85005B' />

          {cart.length > 0 ? (
            <CartCountContainer>
              <CartCountText>{cart.length}</CartCountText>
            </CartCountContainer>
          ) : <View/>}
        </CartTouch>
      </CartContainer>

      <SearchItem
        clearInput={() => setSearchValue('')}
        searchValue={searchValue}
        changeValue={(val) => setSearchValue(val)}
      />

      <AddTouch onPress={() => setModalVisible(true)}>
        <Icon name='plus' size={30} color='#C4B282' />
      </AddTouch>

      { loadingProduct ? (
        <LoadingAI size="large" color='#85005B' />
      ) : (
        <ListProductsAdd
          data={filteredData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <ProductsItems
              data={item}
              indexItem={filteredData.findIndex(p => p.id === item.id)}
              handleModalOpen={
                (data) => handleEditProduct(data)
              }
            />
          }
        />
      )}

      <Footer/>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <ProductModal
          data={product}
          edit={verifyEdit}
          handleClose={() => setModalVisible(false)}
          handleEdit={() => setVerifyEdit(false)}
          clearProduct={() => setProduct({})}
        />
      </Modal>
    </Container>
  );
}
