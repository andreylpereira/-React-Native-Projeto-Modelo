import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const CadastroEstabelecimento = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        
      <TextInput style={css.input} placeholder="Nome" textContentType={'name'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="E-mail" textContentType={'emailAddress'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Senha" textContentType={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Senha" textContentType={'password'} secureTextEntry={true} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Telefone" textContentType={'telephoneNumber'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Endereço" textContentType={'name'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Cidade" textContentType={'name'} autoCorrect={false}></TextInput>
        <TextInput style={css.input} placeholder="Estado" textContentType={'name'} autoCorrect={false}></TextInput>

        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={css.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%',
  },
  button: {
    borderWidth: 2,
    borderRadius: 21,
    borderColor: '#CDCCCE',
    width: '70%',
    height: 45,
    backgroundColor: 'tomato',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    fontSize: 23,
    fontFamily: 'Nunito-Black'
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    height: 40,
    borderRadius: 21,
    borderColor: '#000',
    padding: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
  },
});

export default CadastroEstabelecimento;
