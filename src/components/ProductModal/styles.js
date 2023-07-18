import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #0E002F;
  align-items: center;
`;

export const ContainerFeed = styled.View`
  flex: 1;
  width: 90%;
`;

export const CloseTouch = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #520647;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 0;
`;

export const NameProductInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(196, 178, 130, 0.4)'
})`
  margin-top: 100px;
  height: 50px;
  border: 1px solid #85005B;
  color: #C4B282;
  border-radius: 10px;
  font-size: 17px;
  padding: 0 10px;
  text-align: right;
`;

export const PriceContainer = styled.View`
  margin-top: 50px;
  height: 50px;
  
  border: 1px solid #85005B;
  color: #C4B282;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const PriceText = styled.Text`
  color: #C4B282;
  font-size: 17px;
  width: 20%;
`;

export const PriceProductInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(196, 178, 130, 0.4)'
})`
  color: #C4B282;
  font-size: 17px;
  width: 80%;
  text-align: right;
`;

export const AddProductTouch = styled.TouchableOpacity`
  margin-top: 50px;
  height: 50px;
  
  background-color: #865A19;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const AddProductText = styled.Text`
  color: #C4B282;
  font-size: 22px;
`;
