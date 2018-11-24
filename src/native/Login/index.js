import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavigationActions } from 'react-navigation';
import { Image, ImageBackground, Platform, StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Left,
  Right,
  Toast,
} from 'native-base';
import { email, required, alphaNumeric, maxLength15, minLength8 } from './validation';
import logo from '../../assets/images/icon.png';
import styles from './styles';

class LoginForm extends Component {
  login() {
    console.log('login!');
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={input.name === 'email' ? 'mail' : 'unlock'}
            style={{ color: '#fff' }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === 'email' ? 'Email' : 'Password'}
            secureTextEntry={input.name === 'password' ? true : false}
            {...input}
          />
          {touched && error ? (
            <Icon
              active
              style={styles.formErrorIcon}
              onPress={() => this.textInput._root.clear()}
              name="close"
            />
          ) : (
            <Text />
          )}
        </Item>
        {touched && error ? (
          <Text style={styles.formErrorText1}>{error}</Text>
        ) : (
          <Text style={styles.formErrorText2}>error here</Text>
        )}
      </View>
    );
  }

  skip() {
    this.props.navigation.navigate('Walkthrough');
    return this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Walkthrough' })],
      }),
    );
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.container}>
            <View style={styles.form}>
              <Field
                name="email"
                component={this.renderInput}
                type="email"
                validate={[email, required]}
              />
              <Field
                name="password"
                component={this.renderInput}
                type="password"
                validate={[minLength8, maxLength15, required]}
              />

              <Button
                rounded
                primary
                block
                large
                style={styles.loginBtn}
                onPress={() => this.login()}
              >
                <Text>Get Started</Text>
              </Button>

              <View style={styles.otherLinksContainer}>
                <Left>
                  <Button
                    small
                    transparent
                    style={{ alignSelf: 'flex-start' }}
                    onPress={() => navigation.navigate('SignUp')}
                  >
                    <Text style={styles.helpBtns}>Create Account</Text>
                  </Button>
                </Left>
                <Right>
                  <Button
                    small
                    transparent
                    style={{ alignSelf: 'flex-end' }}
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text style={styles.helpBtns}>Forgot Password</Text>
                  </Button>
                </Right>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default reduxForm({ form: 'login' })(LoginForm);
