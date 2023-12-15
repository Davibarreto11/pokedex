import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListPokemons from '../pages/ListPokemons'
import PokemonDetail from '../pages/PokemonDetail'

const List = createStackNavigator()

const ListRoutes: React.FC = () => (
  <List.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#2a2f35' }
    }}
  >
    <List.Screen name="ListPokemons" component={ListPokemons} />
    <List.Screen name="PokemonDetail" component={PokemonDetail} />
  </List.Navigator>
)

export default ListRoutes
