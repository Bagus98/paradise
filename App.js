import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './src/Project/Home';
import Signup from './src/Project/signup';

const IconLoginfb = require('./src/images/loginfb2.png');
const IconLogingoogle = require('./src/images/logingoogle2.png');
const Iconlogo = require('./src/images/logo.png');

class Header extends React.Component {
      render() {
          return (
            <View style={{ flex: 1, padding: 100, backgroundColor: '#0066ff' }}>
            </View>
          );
      }
}

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0066ff' }}>
        <Image source={Iconlogo} style={{ height: 150, width: 150 }} />
        <View style={{margin:5, padding: 5, backgroundColor: 'white', borderRadius: 3 }}>
        <TextInput style={{ width: 250, height: 30, color: 'black', alignItems: 'center', justifyContent: 'center' }}
          placeholder="Username "
          placeholderTextColor="gray"
          underlineColorAndroid='transparent'
          onChangeText={(Username) => this.setState({ Username })}
        />
        </View>
        <View style={{margin:5, padding: 5, backgroundColor:'white', borderRadius:3, paddingTop: 5 }}>
        <TextInput style={{ width: 250, height: 30, color: 'black' }}
          placeholder="Password "
          placeholderTextColor="gray"
          underlineColorAndroid='transparent'
          onChangeText={(Username) => this.setState({ Username })}
        />
        </View>

        <View style={{ margin: 20, marginBottom: 5 }}>
        <Button
        title="              SIGN-IN             "
        color= "#003d99"
          onPress={() => this.props.navigation.navigate('Details')}
         />
         </View>

         <View style={{ margin: 5 }}>
         <Button
         title="              SIGN-UP             "
         color= "#003d99"
           onPress={() => this.props.navigation.navigate('Create')}
          />
          </View>



        <TouchableOpacity style={{ margin: 20, marginBottom: 0, paddingTop: 20 }} onPress={() => this.props.navigation.navigate('Beli')}>
                <Image source={IconLoginfb} style={{ height: 61, width: 250, }} />
         </TouchableOpacity>

        <TouchableOpacity style={{ margin: 5, }} onPress={() => this.props.navigation.navigate('Beli')}>
                <Image source={IconLogingoogle} style={{ height: 61, width: 250, }} />
         </TouchableOpacity>

      </View>
    );
  }
}

class CreateAccount extends React.Component{
  static navigationOptions = {
  headerTitle: 'sign-up'
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Signup />
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
      <View style={{ flex: 2 }}>
          <Home />
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
    Create: {
      screen: CreateAccount,
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
