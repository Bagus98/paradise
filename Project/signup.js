import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class Header extends React.Component {
      render() {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 100, backgroundColor: '#005ce6' }}>

            </View>
          );
      }
}

class menusingup extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props)
    this.state = {
      Username: '',
      Email: '',
      Password: '',
      Confirm: ''
    };
  }

  Insert_Data_Into_Mysql = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/bagus/tambahdatabelanja.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  hari: this.state.Username,
                  tanggal: this.state.Email,
                  namabarang: this.state.Password,
                  hargabarang: this.state.Confirm,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false });
            });
        });
    }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#005ce6' }}>
        <View style={{margin:5, padding: 5, backgroundColor: 'white', borderRadius: 3 }}>
        <TextInput style={{ width: 200, height: 30, color: 'black', alignItems: 'center', justifyContent: 'center' }}
          placeholder="Username "
          placeholderTextColor="gray"
          underlineColorAndroid='transparent'
          onChangeText={(Username) => this.setState({ Username })}
        />
        </View>
        <View style={{margin:5, padding: 5, backgroundColor:'white', borderRadius:3, paddingTop: 5 }}>
        <TextInput style={{ width: 200, height: 30, color: 'black' }}
          placeholder="Email "
          placeholderTextColor="gray"
          underlineColorAndroid='transparent'
          onChangeText={(Email) => this.setState({ Email })}
        />
        </View>
        <View style={{margin:5, padding: 5, backgroundColor:'white', borderRadius:3, paddingTop: 5 }}>
        <TextInput style={{ width: 200, height: 30, color: 'black' }}
          placeholder="Password "
          placeholderTextColor="gray"
          underlineColorAndroid='transparent'
          onChangeText={(Password) => this.setState({ Password })}
        />
        </View>
        <View style={{margin:5, padding: 5, backgroundColor:'white', borderRadius:3, paddingTop: 5 }}>
        <TextInput style={{ width: 200, height: 30, color: 'black' }}
          placeholder="confirm Password "
          placeholderTextColor="gray"
          underlineColorAndroid='transparent'
          onChangeText={(Confirm) => this.setState({ Confirm })}
        />
        </View>

        <View style={{ margin: 5 }}>
         <Button
         title="          SUBMIT           "
         color='#003d99'
         onPress={this.Insert_Data_Into_Mysql}
          />
          </View>
      </View>
    );
  }
}


const RootStack = StackNavigator(
  {
    singup: {
      screen: menusingup,
    },
  },
  {
    initialRouteName: 'singup',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
