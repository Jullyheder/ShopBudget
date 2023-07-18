import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0E002F;
  align-items: center;
`;

export const SelectView = styled.View`
  width: 90%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const Select = styled(Picker)`
  height: 60px;
  background-color: #865A19;
  color: #C4B282;
`;

export const LoadingAI = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ListCartHistoric = styled.FlatList`
  width: 90%;
`;
