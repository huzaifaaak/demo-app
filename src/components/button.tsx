import React from 'react';
import styled from 'styled-components/native'
import { components } from '../theme/components'

const Container = styled.TouchableOpacity<{ disabled?: boolean }>`
  height: ${({ theme: { components: { Button } } }) => Button.h}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, theme: { colors } }) => disabled ? colors.blackLighter : colors.primary};
  border-radius: 5px;
`;

const Title = styled.Text`
  color: white;
  font-size: 13px;
  font-weight: 600;
  font-family: ${({ theme: { font } }) => font.SEMI_BOLD};
  line-height: 19px;
`;

interface IProps {
  title: string;
  testID?: string;
  disabled?: boolean;
  onPress: () => void;
}

export function Button(props: IProps) {
  const { title, testID, disabled, onPress } = props;
  const { Pressable: { activeOpacity } } = components;
  return (
    <Container testID={testID} disabled={disabled} onPress={onPress} activeOpacity={activeOpacity}>
      <Title>{title}</Title>
    </Container>
  );
};
