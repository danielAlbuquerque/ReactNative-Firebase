import React from 'react';
import { View, TextInput } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends React.Component {
  state = { text: 'teste' };

  render() {
      return (
        <View>
          <Card>
            <CardSection>
              <TextInput
                value={this.state.text}
                onChangeText={text => this.setState({text: text})}
                style={{ height: 20, width: 100 }}
              />
            </CardSection>

            <CardSection>
              <TextInput style={{ height: 20, width: 100 }} />
            </CardSection>

            <CardSection>
              <Button onPress={() => console.log('Logging')}>Log in</Button>
            </CardSection>
          </Card>
        </View>
      );
  }
}

export default LoginForm;
