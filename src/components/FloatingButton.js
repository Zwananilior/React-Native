import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function FloatingButton({ onPress }) {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  btn: {
    backgroundColor: '#ff7b3a',
    width:64,
    height:64,
    borderRadius:32,
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#000',
    elevation:6
  },
  plus: { color:'#fff', fontSize:36, marginTop:-2 }
});
