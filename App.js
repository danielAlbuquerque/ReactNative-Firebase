import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBtfeUNoIA4WoM54c_Wx3huOh9T4N7xVHA",
      authDomain: "todo-17b62.firebaseapp.com",
      databaseURL: "https://todo-17b62.firebaseio.com",
      projectId: "todo-17b62",
      storageBucket: "todo-17b62.appspot.com",
      messagingSenderId: "112904404965"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText={'Firebase Auth'} />
        <LoginForm />
      </View>
    );
  }
}
