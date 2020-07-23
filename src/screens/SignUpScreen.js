import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function SignUpScreen (){
    const [fullName, setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [username,setUsername]=useState('')
    const [birthDate, setBirthDate] = useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    return (
      <View>
        <ScrollView>
          <View>
            <Text>Register</Text>
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="Fullname"
              value={fullName}
              onChangeText={setFullname}
              style={{marginBottom: 10}}
              underlineColor="#e6739f"
            />
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="BirthDate"
              value={birthDate}
              onChangeText={setBirthDate}
              style={{marginBottom: 10}}
            />
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="Username"
              autoCompleteType="username"
              value={username}
              onChangeText={setUsername}
              style={{marginBottom: 10}}
            />
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="Gender"
              value={gender}
              onChangeText={setGender}
              style={{marginBottom: 10}}
            />
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{marginBottom: 10}}
            />
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={{marginBottom: 10}}
              secureTextEntry={true}
            />
          </View>
          <View>
            <TextInput
              mode="contained"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={{marginBottom: 10}}
              secureTextEntry={true}
            />
          </View>
          <View>
            <Button
              mode="contained"
              color="#ffb6b6"
              onPress={() => props.navigation.navigate('App')}>
              Register
            </Button>
          </View>
        </ScrollView>
      </View>
    );}

    export default SignUpScreen