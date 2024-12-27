import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

function BusinessGrowth() {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('https://api.yourpaymentgateway.com/register', {
        email,
        businessName,
      });
      Alert.alert('Success', 'Your business has been registered!');
    } catch (error) {
      Alert.alert('Error', `Registration failed: ${error.message}`);
    }
  };

  return (
    <View>
      <Text>Register Your Business</Text>
      <TextInput 
        placeholder="Business Name" 
        value={businessName} 
        onChangeText={setBusinessName} 
      />
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
}

export default BusinessGrowth;
