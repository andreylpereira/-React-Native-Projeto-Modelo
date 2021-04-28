import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Perfil from './pages/Perfil';
import Negocio from './pages/Negocio';
import Opcoes from './pages/Opcoes';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Drawers}
          options={({navigation}) => ({
            headerLeft: () => (
              <View
                style={{display: 'flex', flexDirection: 'row', marginLeft: 1}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }>
                  <Icon name={'menu'} size={37} color={'white'} />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View>
                <Icon
                  name={'musical-notes'}
                  size={40}
                  color={'#CDCCCE'}
                  style={css.imageLogo}
                />
              </View>
            ),
            title: 'Nome do App',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'tomato',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          })}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{headerStyle: {backgroundColor: 'tomato'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'white',
        showLabel: false,
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        style: {
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderTopColor: '#CDCCCE',
          borderBottomColor: '#131313',
          backgroundColor: '#131313',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'PERFIL',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar-outline" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Negocio"
        component={Negocio}
        options={{
          tabBarLabel: 'NEGOCIO',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-outline" color={color} size={38} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Content = ({...props}) => {
  return (
    <View>
      <View>
        <View style={css.personLogo}>
          <Icon
            name="person-circle"
            color={'tomato'}
            size={75}
            style={{marginLeft: 5}}
          />
          <View style={css.personDescription}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 2.5,
              }}>
              Dazaranha
            </Text>
            <Text style={{color: '#CDCCCE', fontSize: 15, marginBottom: 2.5}}>
              banda
            </Text>
            <Text
              style={{
                color: '#CDCCCE',
                fontSize: 13,
                fontStyle: 'italic',
                marginBottom: 10,
              }}>
              fulano@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <DrawerItemList {...props} />
      </View>
    </View>
  );
};

const Drawers = () => {
  return (
    <Drawer.Navigator
      drawerContent={Content}
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#131313',
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#131313',
        activeBackgroundColor: 'tomato',
        inactiveBackgroundColor: '#CDCCCE',
      }}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        style={css.styleDrawers}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-outline"
              size={size}
              color={focused ? '#CDCCCE' : '#131313'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-outline"
              size={size}
              color={focused ? '#CDCCCE' : '#131313'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Opções"
        component={Opcoes}
        options={{
          title: 'Opções',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-outline"
              size={size}
              color={focused ? '#CDCCCE' : '#131313'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const css = StyleSheet.create({
  imageLogo: {
    marginRight: 100,
    borderWidth: 2,
    borderBottomColor: '#131313',
    borderRadius: 180,
    backgroundColor: '#131313',
  },
  personLogo: {
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CDCCCE',
    display: 'flex',
    flexDirection: 'row',
  },
  personDescription: {
    marginLeft: 5,
    color: '#fff',
  },
});

export default Routes;
