import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { TextInput, View, SafeAreaView, Button } from 'react-native';
import tailwind from 'tailwind-rn';


export default function App() {

  const [value, setValue] = useState('')

  return (
    <SafeAreaView style={tailwind('bg-black flex-1')}>
      <View style={tailwind('flex-1 p-4')}>
        <View style={tailwind('flex-row items-center')}>
          <TextInput
            value={value}
            onChangeText={(newValue) => { setValue(newValue) }}
            style={tailwind('bg-gray-100 p-4 flex-1 mr-2')}
          />
          <Button title="Calcular" />
        </View>

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}
