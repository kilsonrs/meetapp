import React, { Component } from 'react';
import { View } from 'react-native';

import {
  KeyboardAvoidingView,
  NameText,
  NameInput,
  EmailText,
  EmailInput,
  PasswordText,
  PasswordInput,
  SingnInButton,
  SignInText,
  AccountText,
  AccountButton,
} from '../styles';

export default class SignUp extends Component {
  componentDidMount() {}

  handleSubmit = () => {};

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView>
        <View>
          <NameText>Nome</NameText>
          <NameInput onSubmitEditing={() => this.emailInput.focus()} />
          <EmailText>Email</EmailText>
          <EmailInput
            ref={(el) => {
              this.emailInput = el;
            }}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <PasswordText>Password</PasswordText>
          <PasswordInput
            ref={(el) => {
              this.passwordInput = el;
            }}
            onSubmitEditing={this.handleSubmit}
          />

          <SingnInButton onPress={() => {}}>
            <SignInText>Criar conta</SignInText>
          </SingnInButton>
          <AccountButton onPress={() => navigation.navigate('SignIn')}>
            <AccountText>Já tenho conta</AccountText>
          </AccountButton>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
