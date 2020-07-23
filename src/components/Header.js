import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: 'edf0e1',
          textAlign: 'center',
        }}>NAVIGATION</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#91a832',
    flexDirection: 'row-reverse',
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
