import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient'

function Home () {
  return (
    <LinearGradient
    colors={['#fad665', '#ffc713']}
    style={style.container}
    useAngle={true}
    angle={45}>


    </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'center',
  },
  Card: {
    padding: 20,
    borderRadius: 3,
    marginVertical: 20,
  },
  CardBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Rendimento: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    marginVertical: 20,
  },
  h4: {
    fontSize: 20,
    marginHorizontal: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  span: {
    fontSize: 15,
    color: '#fff',
    textTransform: 'uppercase',
  },
  p: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home