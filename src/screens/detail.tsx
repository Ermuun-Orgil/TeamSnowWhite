import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFireStoreCol} from '../hooks';

export const Account = () => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
      </View>
      <View style={styles.titleContainer}>
        
      </View>
      <View style={styles.productDetailContainer}>

      </View>
      <View style={styles.nutritionsContainer}>

      </View>
      <View style={styles.rewiewContainer}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: 371,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: 180,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: 'rgba(226, 226, 226, 0.7)',
    borderRadius: 25,
  },
  productDetailContainer: {
    height: 127,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: 'rgba(226, 226, 226, 0.7)',
    borderRadius: 25,
  },
  nutritionsContainer: {
    height: 55,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: 'rgba(226, 226, 226, 0.7)',
    borderRadius: 25,
  },
  rewiewContainer: {
    height: 55,
    width: '100%',
  },
});
