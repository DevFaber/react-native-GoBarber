import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 15px;
`;

export const Hour = styled(RectButton)`
  background: #c2d2ff;
  border-radius: 10px;
  padding: 15px;
  flex: 1;
  opacity: ${props => (props.enable ? 1 : 0, 6)};

  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #073d46;
`;
