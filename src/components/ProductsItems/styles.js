import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  background-color: ${
    props => props.alterColor === 1 ? '#520647' : '#85005B'
  };
  border-radius: 10px;
  height: 100px;
`;

export const NameContainer = styled.View`
  margin: 10px 10px 20px 10px;
`;

export const NameText = styled.Text`
  font-size: 17px;
  color: #C4B282;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;

export const PriceText = styled.Text`
  font-size: 22px;
  color: #C4B282;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const AmountReduceTouch = styled.TouchableOpacity``;

export const AmountInput = styled.Text`
  font-size: 20px;
  color: #C4B282;
`;

export const AmountIncreaseTouch = styled.TouchableOpacity``;

export const AddProductTouch = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  background-color: #C4B282;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  top: -15px;
  right: 0;
  position: absolute;
  z-index: 1;
`;
