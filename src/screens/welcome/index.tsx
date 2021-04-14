import React from 'react'
import { StatusBar } from 'react-native';
import { Container, Wrapper, Description, AccountExist, LoginText } from './welcome.styled'
import { Launch } from '../../assets/images/launch';
import { Button } from '../../components/Button';
import { Logo } from '../../assets/images/logo';

export function Welcome() {
  return (
    <Container>
      <StatusBar hidden />
      <Launch />
      <Wrapper>
        <Logo />
        <Description>Start selling today with the{"\n"}Point of Sale for modern businesses</Description>
        <Button title={"Create account"} onPress={() => { }} />
        <AccountExist>Already have an account?</AccountExist>
        <LoginText>Login now</LoginText>
      </Wrapper>
    </Container>
  )
}