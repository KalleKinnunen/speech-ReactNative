import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Speech from 'expo-speech'

export default function App() {
  const [text, setText] = useState('')

  const speak = () => {
    Speech.speak(text);
    setText('')
    
  };

 
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} returnKeyType="done"></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => speak()}><Text>Kuuntele tästä</Text></TouchableOpacity>
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
    marginBottom: 10,
    marginTop: 20
  },
  input : {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 3,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
button : {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    margin: 100,
    borderColor: 'black',
    borderWidth: 1,
    width: '50%',
    height: 40
  },
text : {
    color: 'black',
    fontSize: 20,
    marginBottom: 4,
  },
list : {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
listcontainer : {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
},
});