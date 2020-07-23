import React, { useState } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { TextInput, Button} from 'react-native-paper'

const screenHeight = Dimensions.get('screen').height

const HomeScreen = (props) =>{

    const [name, setName] = useState("")
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TextInput
            placeholder="Enter your name"
            onChangeText={text => setName(text)}
            style={{marginBottom: 10}}
            underlineColor="#e6739f"
          />
          <Button
            mode="contained"
            onPress={() => props.navigation.navigate('Profile', {name})}
            color="#efb1ff">
            Go to profile
          </Button>
        </View>
      </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        padding : 16,
    }
})