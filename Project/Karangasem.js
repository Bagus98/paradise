import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

const Iconajagadnatha = require('../images/jagadnatha.jpg');
const Iconbangli = require('../images/bangli.png');


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state = {
      Username: '',
      Password: ''
    };
  }


  render() {
    return (
      <View style={{ flex: 1 }}>

      <View style={{ flex: 6, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center' }} onPress={() => this.props.navigation.push('Details')} >
        <Image source={Iconajagadnatha} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>PURA JAGADNATHA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Details')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>BANGLI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Details')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>KARANGASEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Details')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>GIANYAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Details')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>BADUNG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Details')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>JEMBRANA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Details')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>DENPASAR</Text>
        </TouchableOpacity>


        </ScrollView>

        </View>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
