import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';

function Scalability() {
  const [status, setStatus] = useState('');

  const testLoadHandling = async () => {
    try {
      const response = await axios.post('https://api.yourpaymentgateway.com/test-load', {
        transactions: 10000, // Simulate 10,000 transactions
      });
      setStatus(`System Load Test Passed: ${response.data.success}`);
    } catch (error) {
      Alert.alert('Error', `Load test failed: ${error.message}`);
    }
  };

  return (
    <View>
      <Text>Test High Volume Transactions</Text>
      <Button title="Run Load Test" onPress={testLoadHandling} />
      <Text>{status}</Text>
    </View>
  );
}

export default Scalability;
