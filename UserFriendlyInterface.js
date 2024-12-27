import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function UserFriendlyInterface() {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    alert(`Payment of $${amount} initiated!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Payment Processing</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  heading: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 },
});

export default UserFriendlyInterface;
