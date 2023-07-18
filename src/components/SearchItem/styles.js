import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 50px;
  border: 1px solid #85005B;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const InputTouch = styled.TouchableOpacity`
  width: 10%;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(196, 178, 130, 0.4)'
})`
  font-size: 17px;
  color: #C4B282;
  width: 80%;
  height: 100%;
`;
