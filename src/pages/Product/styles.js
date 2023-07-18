import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0E002F;
  align-items: center;
`;

export const CartContainer = styled.View`
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const CartTouch = styled.TouchableOpacity``;

export const CartCountContainer = styled.View`
  background-color: #520647;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  left: -10px;
  bottom: -10px;
`;

export const CartCountText = styled.Text`
  color: #C4B282;
  font-size: 15px;
`;

export const AddTouch = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: #865A19;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  z-index: 1;
`;

export const ListProductsAdd = styled.FlatList`
  width: 90%;
`;

export const LoadingAI = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  height: 25px;
`;
