import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 54px;
  width: 100%;
  background: #e5556e;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
`;

export const Profile = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;
