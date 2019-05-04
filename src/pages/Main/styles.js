import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  indicatorStyle: 'black',
})`
  flex: 1;
  padding: 16px 0 16px 16px;
  background-color: #27202c;
`;

export const CardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 20px 0 20px;
`;

export const ListTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;
