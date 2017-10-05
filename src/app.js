import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button,Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
state = { loggedIn: null };
  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyCvImR31bRinrGi76QDR7ACO4LoFpB3kJc",
        authDomain: "yugioh-32988.firebaseapp.com",
        databaseURL: "https://yugioh-32988.firebaseio.com",
        projectId: "yugioh-32988",
        storageBucket: "yugioh-32988.appspot.com",
        messagingSenderId: "603884279963"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return (
    <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
    </View>
  );
  }
}

export default App;
