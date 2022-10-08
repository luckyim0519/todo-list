import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image source="/images/hamster.png" 
      style={styles.image} 
      resizeMode="contain"
      />
        <Text style={styles.description}>You have completed all the task</Text>
    </View>
  );
}
  const styles = StyleSheet.create({
    block:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description:{
        fontSize: 24,
        color: 'grey',
    },
    image:{
      width: 240,
      height: 179,
      marginBottom: 16,
      marginTop: 50,
      backgroundColor: 'white',
    },
  });


export default Empty;