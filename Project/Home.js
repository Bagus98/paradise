import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Singaraja from '../Project/Singaraja';
import Bangli from '../Project/Bangli';
import Karangasem from '../Project/Karangasem';
import Gianyar from '../Project/Gianyar';
import Jembrana from '../Project/Jembrana';
import Tabanan from '../Project/Tabanan';
import Klungkung from '../Project/Klungkung';

const Iconsingaraja = require('../images/singaraja.jpg');
const Iconbangli = require('../images/bangli.png');
const Iconkarangasem = require('../images/karangasem.jpg');
const Icongianyar = require('../images/gianyar.jpg');
const Iconjembrana = require('../images/jembrana.png');
const Iconbadung = require('../images/badung.jpg');
const Icontabanan = require('../images/tabanan.jpg');
const Iconklungkung = require('../images/klungkung.jpg');
const Icondenpasar = require('../images/denpasar.jpg');


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
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#0066ff', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}> PARADISE </Text>
      </View>

      <View style={{ flex: 6, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center' }} onPress={() => this.props.navigation.push('Kategori')} >
        <Image source={Iconsingaraja} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>SINGARAJA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori2')}>
        <Image source={Iconbangli} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>BANGLI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori3')}>
        <Image source={Iconkarangasem} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>KARANGASEM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori4')}>
        <Image source={Icongianyar} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>GIANYAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori5')}>
        <Image source={Iconbadung} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>BADUNG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori6')}>
        <Image source={Iconjembrana} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>JEMBRANA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori7')}>
        <Image source={Icontabanan} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>TABANAN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori8')}>
        <Image source={Iconklungkung} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>KLUNGKUNG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, margin: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.push('Kategori9')}>
        <Image source={Icondenpasar} style={{ height: 200, width: 320, borderRadius: 5 }} />
        <Text style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontSize: 20, width: 320, height: 40, borderRadius: 5 }}>DENPASAR</Text>
        </TouchableOpacity>


        </ScrollView>

        </View>
      </View>
    );
  }
}


class SINGARAJA extends React.Component {
  static navigationOptions = {
  headerTitle: 'SINGARAJA'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Singaraja />
      </View>
    );
  }
}

class BANGLI extends React.Component {
  static navigationOptions = {
  headerTitle: 'BANGLI'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Bangli />
      </View>
    );
  }
}

class KARANGASEM extends React.Component {
  static navigationOptions = {
  headerTitle: 'KARANGASEM'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Karangasem />
      </View>
    );
  }
}

class JEMBRANA extends React.Component {
  static navigationOptions = {
  headerTitle: 'JEMBRANA'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Jembrana />
      </View>
    );
  }
}

class BADUNG extends React.Component {
  static navigationOptions = {
  headerTitle: 'BADUNG'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Badung />
      </View>
    );
  }
}

class TABANAN extends React.Component {
  static navigationOptions = {
  headerTitle: 'TABANAN'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Tabanan />
      </View>
    );
  }
}

class KLUNGKUNG extends React.Component {
  static navigationOptions = {
  headerTitle: 'KLUNGKUNG'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Klungkung />
      </View>
    );
  }
}

class DENPASAR extends React.Component {
  static navigationOptions = {
  headerTitle: 'DENPASAR'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Denpasar />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Kategori: {
      screen: SINGARAJA,
    },
    Kategori2: {
      screen: BANGLI,
    },
    Kategori3: {
      screen: KARANGASEM,
    },
    Kategori4: {
      screen: JEMBRANA,
    },
    Kategori5: {
      screen: BADUNG,
    },
    Kategori6: {
      screen: TABANAN,
    },
    Kategori7: {
      screen: KLUNGKUNG,
    },
    Kategori8: {
      screen: DENPASAR,
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
