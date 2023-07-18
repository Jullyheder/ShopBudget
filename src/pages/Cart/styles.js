import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #0E002F;
`;

export const LoadingAI = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AddTouch = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: #865A19;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 25px;
  z-index: 1;
`;

export const ListCart = styled.FlatList`
  width: 90%;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #0E002F;
`;

export const EmptyText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #C4B282;
`;
