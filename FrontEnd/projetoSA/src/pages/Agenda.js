import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'teste1',
  },
  {
    id: '2',
    title: 'teste2',
  },
  {
    id: '3',
    title: 'teste3',
  },
];

const Agenda = ({navigation}) => {
  function Perfils(perfil) {
    if (perfil == 'Banda') {
      return (
        <>
          <StatusBar barStyle="dark-content" hidden={true} />
          <View style={css.container}>
            <Text style={css.title}>Agenda</Text>

            <View style={css.card}>
              {/* <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                /> */}
              <View style={css.content}>
                <View style={css.rows}>
                  <Text style={css.label}>Evento: </Text>
                  <Text style={css.tittle}>
                    Noite de Indie Rock Noite de Indie Rock Noite de Indie Rock
                  </Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Estabelecimento: </Text>
                  <Text
                    multimultiline={true}
                    numberOfLines={2}
                    style={css.tittle}>
                    Chop do Gus
                  </Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Data: </Text>
                  <Text style={css.description}>16/05/2021</Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Hora: </Text>
                  <Text style={css.description}>20:00h</Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Bandas: </Text>
                  <Text
                    multimultiline={true}
                    numberOfLines={2}
                    style={css.description}>
                    Dazaranha, John Bala Jones
                  </Text>
                </View>
                <View style={css.buttons}>
                  <TouchableOpacity
                    style={css.button}
                    onPress={() =>
                      navigation.navigate('CadastroEstabelecimento')
                    }>
                    <Text style={css.buttonText}>Candidatar-se</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={css.button}
                    onPress={() => navigation.navigate('Avaliacao')}>
                    <Text style={css.buttonText}>Avaliar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    }
    if (perfil == 'Estabelecimento') {
      return (
        <>
          <StatusBar barStyle="dark-content" hidden={true} />
          <View style={css.container}>
            <Text style={css.title}>Agenda</Text>

            <View style={css.card}>
              {/* <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                /> */}
              <View style={css.content}>
                <View style={css.rows}>
                  <Text style={css.label}>Evento: </Text>
                  <Text
                    multimultiline={true}
                    numberOfLines={2}
                    style={css.tittle}>
                    Noite de Indie Rock
                  </Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Estabelecimento: </Text>
                  <Text
                    multimultiline={true}
                    numberOfLines={2}
                    style={css.tittle}>
                    Chop do Gus
                  </Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Data: </Text>
                  <Text style={css.description}>16/05/2021</Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Hora: </Text>
                  <Text style={css.description}>20:00h</Text>
                </View>
                <View style={css.rows}>
                  <Text style={css.label}>Bandas: </Text>
                  <Text
                    multimultiline={true}
                    numberOfLines={2}
                    style={css.description}>
                    Dazaranha, John Bala Jones
                  </Text>
                </View>
                <View style={css.buttons}>
                  <TouchableOpacity
                    style={css.button}
                    onPress={() =>
                      navigation.navigate('CadastroEstabelecimento')
                    }>
                    <Text style={css.buttonText}>Selecionar bandas</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={css.button}
                    onPress={() => navigation.navigate('Avaliacao')}>
                    <Text style={css.buttonText}>Avaliar bandas</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    } else {
      <View>
        <Text>Error</Text>
      </View>;
    }
  }
  return <>{Perfils('Banda')}</>;
};

const css = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    fontFamily: 'Nunito-Bold',
    fontSize: 21,
    elevation: 10,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '90%',
    elevation: 9.5,
    borderRadius: 7.5,
  },
  content: {
    padding: 10,
  },
  label: {
    fontFamily: 'Nunito-Black',
  },
  tittle: {
    fontFamily: 'Nunito-Regular',
    paddingRight: 55,
  },
  description: {
    fontFamily: 'Nunito-Regular',
    paddingRight: 55,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 21,
    borderColor: '#FF8069',
    width: '48%',
    height: 25,
    backgroundColor: 'tomato',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Nunito-Black',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Agenda;