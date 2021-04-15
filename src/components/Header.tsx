import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-remix-icon';
import { components } from '../theme/components';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`

const IconBg = styled.TouchableOpacity`
  height: 34px;
  width: 34px;
  background-color: ${({ theme: { colors } }) => colors.blackLighter};
  border-radius: 5px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.Text`
  font-family: Poppins-Bold;
  font-size: 24px;
  line-height: 36px;
  color: white;
`;

interface IProps {
  testID?: string;
  back?: boolean;
  heading: string;
  onBack?: () => void;
}

export function Header(props: IProps) {
  const { testID, back, heading, onBack } = props;
  const { Pressable: { activeOpacity } } = components;

  return (
    <Container testID={testID} >
      {back && (
        <IconBg activeOpacity={activeOpacity} onPress={onBack} >
          <Icon name={"arrow-left-line"} size={"24"} color={"white"} />
        </IconBg>
      )}
      <Heading>{heading}</Heading>
    </Container>
  );
};