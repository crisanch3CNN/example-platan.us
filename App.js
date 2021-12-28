import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Text, TextInput, View, SafeAreaView, Button, Alert } from 'react-native';
import tailwind from 'tailwind-rn';
import axios from 'axios';


export default function App() {

  const [value, setValue] = useState('');
  const [age, setAge] = useState(null);

  async function handleClick() {
    // Alert.alert('Hola');
    const { data } = await axios.get(`https://api.agify.io/?name=${value}`);
    setAge(data.age);

  }

  return (
    <SafeAreaView style={tailwind('bg-black flex-1')}>
      <View style={tailwind('flex-1 p-4')}>
        <View style={tailwind('flex-row items-center')}>
          <TextInput
            value={value}
            onChangeText={(newValue) => { setValue(newValue) }}
            style={tailwind('bg-gray-100 p-4 flex-1 mr-2')}
          />
          <Button title="Calcular" onPress={handleClick} />
        </View>
        <Text style={tailwind('text-white mt-2')} >Tu edad aproximada es ....</Text>
        <Text style={tailwind('text-white text-lg')}>{age}</Text>

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}
