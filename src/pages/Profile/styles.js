import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #1fdeeb;
  font-weight: bold;
  align-self: center;
  margin-top: 40px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  border-radius: 15px;
`;

export const SubmitButton = styled(Button)`
  border-radius: 10px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #26dd20;
  border-radius: 10px;
`;
