import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Faicon from 'react-native-vector-icons/dist/FontAwesome5'
import Entypo from 'react-native-vector-icons/dist/Entypo'

function LoginScreen(props){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


return (
  <View style={styles.container}>
    <View style={{justifyContent: 'flex-end', flexDirection: 'row', alignItems:'center', marginTop:-50}}>
      <Text style={{marginTop: 0}}>Don't have an account? </Text>
      <Entypo
        name="add-user"
        size={30}
        color="#ffb6b6"
        style={{marginTop: 0}}
        onPress={() => props.navigation.navigate('SignUp')}
      />
    </View>
    <View style={styles.logo}>
      <Faicon name="canadian-maple-leaf" size={250} color="#679b9b" />
    </View>
    <View style={styles.input}>
      <TextInput
        mode="contained"
        placeholder="Username"
        autoCompleteType="username"
        value={username}
        onChangeText={setUsername}
        style={{marginBottom: 10}}
        underlineColor="#e6739f"
      />
    </View>
    <View style={styles.input}>
      <TextInput
        mode="contained"
        value={password}
        placeholder="Password"
        style={{marginBottom: 10}}
        underlineColor="#e6739f"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
    </View>
    <View style={styles.login}>
      <Button
        mode="contained"
        color="#ffb6b6"
        onPress={() => props.navigation.navigate('App')}>
        Sign In
      </Button>
    </View>
  </View>
);
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        padding : 16,
        backgroundColor :"#fde2e2"
    },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  input: {
    marginTop :5,
    marginLeft: 20,
    marginRight: 20,
    alignContent:'center',
  },
  login:{
      borderRadius:39,
      alignItems: 'center'
  }
});