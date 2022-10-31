import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View, TextInput } from 'react-native';

export default function App() {

  const [valor1, setValor1]=useState('')
  const [valor2, setValor2]=useState('')
  const [resultado, setResultado]=useState('')

  const soma=()=>{
    setResultado(parseInt(valor1)+parseInt(valor2))
  }

  return (
    <View style={styles.conteiner}>
      <Text></Text>
      <Text>CALCULADORA SIMPLES</Text>
      <Text></Text>
      <Text>Informe o primeiro número:</Text>
      <TextInput
      style={styles.display}
      value={String(valor1)}
      onChangeText={(texto)=>{setValor1(texto)}}>
      </TextInput>

      <Text></Text>
      <Text>Informe o segundo número:</Text>
      <TextInput
      style={styles.display}
      value={String(valor2)}
      onChangeText={(texto)=>{setValor2(texto)}}>
      </TextInput>

      <Text></Text>
      <TouchableHighlight
        style={styles.btn}
        onPress={()=>soma()}>
        <Text>SOMAR</Text>
      </TouchableHighlight>

      <Text></Text>
      <Text>RESULTADO:</Text>
      <TextInput
      style={styles.display}
      value={String(resultado)}
      onChangeText={(texto)=>{setResultado(texto)}}>
      </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    marginTop: 30,
    padding:20,
  },

  display:{
    borderWidth:1,
    borderRadius:10,
    padding:10
  
  },
  btn:{
    backgroundColor:'red',
    padding:20,
    borderRadius:10,
    width: 120,


  },
});
