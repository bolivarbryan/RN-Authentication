import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyCvImR31bRinrGi76QDR7ACO4LoFpB3kJc",
        authDomain: "yugioh-32988.firebaseapp.com",
        databaseURL: "https://yugioh-32988.firebaseio.com",
        projectId: "yugioh-32988",
        storageBucket: "yugioh-32988.appspot.com",
        messagingSenderId: "603884279963"
      });
  }

  render() {
    return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
  );
  }
}

export default App;
