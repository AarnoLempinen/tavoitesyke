import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [age, setAge] = useState('')
  const [lower, setLower] = useState('')
  const [upper, setUpper] = useState('')

  function calculate() {
  const result = (220-age) * 0.65
  const result2 = (220-age) * 0.85
  setLower(result.toFixed(0))
  setUpper(result2.toFixed(0))
  }

  


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput keyboardType='decimal-pad' value={age} onChangeText={text => setAge(text)}/>
      <Text style={styles.field}>Hr Limits</Text>
      <Text style={styles.field}>{lower} - {upper}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  field: {
    marginBottom: 8,
  }
});
