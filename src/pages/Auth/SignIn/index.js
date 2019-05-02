import React, { Component } from 'react';
import { View } from 'react-native';

import logo from '~/assets/logo-white.svg';

import {
  KeyboardAvoidingView,
  EmailText,
  EmailInput,
  PasswordText,
  PasswordInput,
  SingnInButton,
  SignInText,
  AccountText,
  AccountButton,
  Logo,
} from '../styles';

export default class SignIn extends Component {
  componentDidMount() {}

  handleSubmit = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView>
        <View>
          <Logo source={logo} />
          <EmailText>Email</EmailText>
          <EmailInput onSubmitEditing={() => this.passwordInput.focus()} />
          <PasswordText>Password</PasswordText>
          <PasswordInput
            ref={(el) => {
              this.passwordInput = el;
            }}
            onSubmitEditing={this.handleSubmit}
          />

          <SingnInButton onPress={this.handleSubmit}>
            <SignInText>Entrar</SignInText>
          </SingnInButton>
          <AccountButton onPress={() => navigation.navigate('SignUp')}>
            <AccountText>Criar conta grátis</AccountText>
          </AccountButton>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
