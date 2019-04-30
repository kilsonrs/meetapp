import React, { Component } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';

import {
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{
          flex: 1,
          backgroundColor: '#27202c',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: 30,
        }}
      >
        <View>
          <EmailText>Nome</EmailText>
          <EmailInput
            placeholder="Digite seu nome"
            selectionColor="#908d93"
            placeholderTextColor="#908d93"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <EmailText>Email</EmailText>
          <EmailInput
            placeholder="Digite seu e-mail"
            selectionColor="#908d93"
            placeholderTextColor="#908d93"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            ref={(el) => {
              this.emailInput = el;
            }}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <PasswordText>Password</PasswordText>
          <PasswordInput
            placeholder="Sua senha secreta"
            selectionColor="#908d93"
            placeholderTextColor="#908d93"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
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
