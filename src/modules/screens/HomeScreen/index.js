import React, { Component, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import AppStatusBar from 'modules/components/AppStatusBar'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function HomeScreen(props) {
  console.log('HomeScreen is rendering !!!!')
  console.log(props)
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 20, color: 'black' }}>HomeScreen</Text>
      </SafeAreaView>
    </View>
  )
}
