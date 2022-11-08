import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import Stack from './src/components/Page';

export default function GasolineApp() {

  const [modalVisible, setModalVisible] = useState(false);

  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState('');

  function Calcular(precoAlcool, precoGasolina) {
    let conta = precoAlcool / precoGasolina;
    let resultDiv
    

    if(conta <= 0.7) {
      resultDiv = 'Álcool'
    }
    else{(conta >= 0.7)
      resultDiv = 'Gasolina'
    }
    setResultado(resultDiv)
    AbrirModal()
    
  };

  //FUNCTIONS MODAL
  function AbrirModal() {
    setModalVisible(true);
  }

  function FecharModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image
          style={styles.img}
          source={require('./src/img/fuel-low.png')}
        />
        <Text style={styles.txtImg}>Qual a melhor opção?</Text>
      </View>

      <View style={styles.input}>
        <Text style={styles.txtTitle}>Álcool (preço por litro) </Text>
        <TextInput
          placeholder={'0.00'}
          placeholderTextColor={'#FFF'}
          style={styles.txtInput}
          keyboardType={'numeric'}
          onChangeText={(valor) => setPrecoAlcool(Number(valor))}
          value={precoAlcool}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.txtTitle}>Gasolina (preço por litro) </Text>
        <TextInput
          placeholder={'0.00'}
          placeholderTextColor={'#FFF'}
          style={styles.txtInput}
          keyboardType={'numeric'}
          onChangeText={(valor) => setPrecoGasolina(Number(valor))}
          value={precoGasolina}
        />
      </View>

      <TouchableOpacity style={styles.btnCalcular} onPressIn={AbrirModal} onPress={() => Calcular(precoAlcool, precoGasolina) }>
        <Text style={styles.txtBtn}>Calcular</Text>
      </TouchableOpacity>
      
      <Modal animationType='slide' visible={modalVisible}>
        <Stack fechar={FecharModal} result={resultado} alcool={precoAlcool} gasolina={precoGasolina}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161A1D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  img: {
    height: 150,
    width: 150,
  },
  txtImg: {
    fontSize: 25,
    marginTop: 50,
    color: '#FFF',
    fontWeight: 'bold'
  },
  input: {
    width: '90%',
    marginBottom: 30
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10
  },
  txtInput: {
    height: 50,
    backgroundColor: '#B1A7A6',
    borderRadius: 5,
    fontSize: 16
  },
  btnCalcular: {
    width: '90%',
    backgroundColor: '#E5383B',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5383B'
  },
  txtBtn: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
})