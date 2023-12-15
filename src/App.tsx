import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle='dark-content' backgroundColor= '#FFF'/>
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c3137', '#282d33', '#24272d']} style={{ flex: 1 }}>
      <Routes />
    </LinearGradient>
  </NavigationContainer>
)

export default App
