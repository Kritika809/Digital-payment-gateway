import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "your-firebase-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-database-name.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SecureTransactions() {
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithCustomToken(auth, token);
      Alert.alert('Secure Login', 'Authenticated successfully!');
    } catch (error) {
      Alert.alert('Error', `Authentication failed: ${error.message}`);
    }
  };

  return (
    <View>
      <Text>Enter Authentication Token</Text>
      <TextInput 
        placeholder="Token" 
        value={token} 
        onChangeText={setToken} 
        secureTextEntry 
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default SecureTransactions;
