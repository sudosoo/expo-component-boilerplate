import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Expo Router!</Text>
      
      <View style={styles.card}>
        <Text style={styles.subtitle}>Getting Started</Text>
        <Text style={styles.description}>
          This is your home screen. Start building your app by editing this file.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Counter Example</Text>
        <Text style={styles.counter}>Count: {count}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Features</Text>
        <Text style={styles.feature}>✅ TypeScript Support</Text>
        <Text style={styles.feature}>✅ Expo Router</Text>
        <Text style={styles.feature}>✅ React Native</Text>
        <Text style={styles.feature}>✅ Hot Reload</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  counter: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  feature: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
});
