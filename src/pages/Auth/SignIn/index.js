import React, { Component } from 'react';
import { View } from 'react-native';

import logo from '~/assets/logo-white.svg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

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

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView>
        <View>
          <Logo source={logo} />

          <EmailText>Email</EmailText>
          <EmailInput
            onChangeText={text => this.setState({ email: text })}
            value={email}
            onSubmitEditing={() => this.passwordInput.focus()}
          />

          <PasswordText>Password</PasswordText>
          <PasswordInput
            onChangeText={text => this.setState({ password: text })}
            value={password}
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

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
