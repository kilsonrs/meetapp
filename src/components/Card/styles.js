import styled from 'styled-components/native';

export const Container = styled.View`
  width: 290px;
  height: 220px;
  border-radius: 3px;
  background: #fff;
  margin-right: 16px;
`;

export const Cover = styled.Image`
  flex: 1;
  width: 100%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const Details = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const Info = styled.View`
  justify-content: center;
`;

export const Title = styled.Text`
  color: #222222;
  font-size: 16px;
  font-weight: bold;
`;

export const Subscribers = styled.Text`
  color: #999999;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #e5556e;
`;
