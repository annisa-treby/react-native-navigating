import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper'

const ProfileScreen=(props)=>{

    return (
      <View style={styles.container}>
        <Text>WELCOME</Text>
      
        <Button
          mode="contained"
          onPress={() => props.navigation.goBack()}
          color="#efb1ff">
          go back
        </Button>
        <Button mode="contained"
        onPress={() => props.navigation.navigate('Edit')}>Edit Profile</Button>
      </View>
    );
}
export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',

    }
})