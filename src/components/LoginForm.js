import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  render() {
      return (
        <View>
          <Card>
            <CardSection>
              <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>


            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>


            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        </View>
      );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
