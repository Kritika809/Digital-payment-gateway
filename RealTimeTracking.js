import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

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
const database = getDatabase(app);

function RealTimeTracking() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactionsRef = ref(database, 'transactions');
    onValue(transactionsRef, (snapshot) => {
      const data = snapshot.val();
      const transactionsList = data ? Object.entries(data).map(([id, details]) => ({ id, ...details })) : [];
      setTransactions(transactionsList);
    });
  }, []);

  return (
    <View>
      <Text>Transaction Statuses</Text>
      <FlatList 
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{`ID: ${item.id}, Status: ${item.status}, Amount: ${item.amount}`}</Text>
        )}
      />
    </View>
  );
}

export default RealTimeTracking;
