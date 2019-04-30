import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #27202c;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const EmailText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
`;

export const EmailInput = styled.TextInput`
  font-size: 20px;
  color: #908d93;
`;

export const PasswordText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
`;

export const PasswordInput = styled.TextInput`
  font-size: 20px;
  color: #908d93;
`;

export const SingnInButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #e5556e;
  border-radius: 25px;
  margin-top: 20px;
`;

export const SignInText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const AccountButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 5,
    Bottom: 5,
    left: 5,
    right: 5,
  },
})`
  align-self: center;
  max-width: 120px;
`;

export const AccountText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  color: #b4b4b4;
`;
