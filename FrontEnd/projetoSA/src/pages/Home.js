import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';

const mapLightStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#d6e2e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#cfd4d5',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#1C1C1C',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        lightness: 100,
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#E6ECED',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#cfd4d5',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#E6ECED',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#1C1C1C',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#E6ECED',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      {
        saturation: -100,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#588ca4',
        //"color": "#B5B5B5"
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a9de83',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#bae6a1',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c6e8b3',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#bae6a1',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        saturation: -45,
      },
      {
        lightness: 10,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#1C1C1C',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#B2BCFF',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#A6AFED',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#9fb6bd',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [
      {
        saturation: -70,
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#939294',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#939294',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#008cb5',
      },
    ],
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a6cbe3',
      },
    ],
  },
];

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        <View style={css.containerMap}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={css.map}
            customMapStyle={mapLightStyle}
            region={{
              latitude: -27.601728,
              longitude: -48.56,
              latitudeDelta: 0.21,
              longitudeDelta: 0.042,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: -27.600711,
                longitude: -48.501234,
              }}
              image={require('../assets/maps/drink.png')}
              title="teste"
              description="Teste">
              <MapView.Callout tooltip>
                <View>
                  <View style={css.bubble}>
                    <View style={css.gridColunm}>
                      <View style={{alignSelf: 'center', marginBottom: 5}}>
                        <View style={css.gridRow}>
                          <Text style={css.mapTextTittle}>Chopp do Gus</Text>
                          <Text style={css.note}>10,0</Text>
                          <Icon
                            name="star"
                            color={'#FCC51C'}
                            size={12.5}
                            style={{
                              opacity: 0.5,
                              paddingTop: 3,
                              paddingLeft: 1,
                            }}
                          />
                        </View>
                      </View>
                      <View style={css.gridRow}>
                        <Text
                          style={{
                            height: 90,
                            width: 80,
                            marginTop: -20,
                            marginRight: -15,
                            borderRadius: 15,
                          }}>
                          <Image
                            style={css.image}
                            resizeMode="cover"
                            source={require('../assets/fotos/underdogs.jpg')}
                          />
                        </Text>

                        <View style={css.gridColunm}>
                          <Text
                            multimultiline={true}
                            style={css.mapTextDescription}>
                            R. Sérgio Rogerio Beims, 89 - Santa Monica,
                            Florianópolis - SC, 88035-210
                          </Text>
                          <Text multimultiline={true} style={css.mapTextPhone}>
                            Tel: 99482-0120
                          </Text>
                        </View>
                      </View>
                      {/* <View style={(css.gridRow, {alignSelf: 'center'})}>
                          <Text style={css.mapTextDetails} onPress={() => navigation.navigate('Perfil')}>Ver mais</Text>

                                  <View style={(css.gridRow, {alignSelf: 'center'})}>
                      </View> */}
                    </View>
                  </View>
                  <View style={css.arrowBorder} />
                  <View style={css.arrow} />
                </View>
              </MapView.Callout>
            </MapView.Marker>
            <MapView.Marker
              coordinate={{
                latitude: -27.601728,
                longitude: -48.525906,
              }}
              image={require('../assets/maps/band.png')}
              title="teste"
              description="Teste">
              <MapView.Callout tooltip>
                <View>
                  <View style={css.bubble}>
                    <View style={css.gridColunm}>
                      <View style={{alignSelf: 'center', marginBottom: 5}}>
                        <View style={css.gridRow}>
                          <Text style={css.mapTextTittle}>Dazaranha</Text>
                          <Text style={css.note}>10,0</Text>
                          <Icon
                            name="star"
                            color={'#FCC51C'}
                            size={12.5}
                            style={{
                              opacity: 0.5,
                              paddingTop: 3,
                              paddingLeft: 1,
                            }}
                          />
                        </View>
                      </View>
                      <View style={css.gridRow}>
                        <Text
                          style={{
                            height: 90,
                            width: 80,
                            marginTop: -20,
                            marginRight: -15,
                            borderRadius: 15,
                          }}>
                          <Image
                            style={css.image}
                            resizeMode="cover"
                            source={require('../assets/fotos/redlights.jpg')}
                          />
                        </Text>

                        <View style={css.gridColunm}>
                          <Text
                            multimultiline={true}
                            style={css.mapTextDescription}>
                            Banda Catarinense que é convidada pra todo santo
                            show que fazem na cidade.
                          </Text>
                          <Text multimultiline={true} style={css.mapTextPhone}>
                            Tel: 99482-0120
                          </Text>
                        </View>
                      </View>
                      {/* <View style={(css.gridRow, {alignSelf: 'center'})}>
                          <Text style={css.mapTextDetails} onPress={() => navigation.navigate('Perfil')}>Ver mais</Text>

                                  <View style={(css.gridRow, {alignSelf: 'center'})}>
                      </View> */}
                    </View>
                  </View>
                  <View style={css.arrowBorder} />
                  <View style={css.arrow} />
                </View>
              </MapView.Callout>
            </MapView.Marker>
          </MapView>
        </View>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerMap: {
    // height: 300,
    height: '85%',
    width: '95%',
    borderWidth: 5,
    elevation: 9.5,
    borderRadius: 7.5,
    borderColor: '#FFF',
    backgroundColor: '#131313',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '95%',
    padding: 10,
    elevation: 9.5,
    borderRadius: 7.5,
    textAlign: 'left',
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 7.5,
    borderColor: '#ccc',
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginBottom: 50,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 10,
  },
  mapTextTittle: {
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    paddingLeft: 5,
  },
  mapTextDescription: {
    fontSize: 13,
    width: 175,
    fontFamily: 'Nunito-Regular',
    paddingLeft: 5,
  },
  mapTextPhone: {
    fontSize: 13,
    width: 175,
    fontFamily: 'Nunito-Regular',
    paddingLeft: 5,
  },
  // mapTextDetails: {
  //   fontSize: 12,
  //   fontFamily: 'Nunito-Italic',
  //   color: '#007a87',
  //   textAlign: 'center',
  //   paddingLeft: 7.5,
  //   marginTop: 5,
  // },
  note: {
    color: '#CDCCCE',
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    paddingLeft: 5,
    paddingTop: 4,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  gridColunm: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Home;
