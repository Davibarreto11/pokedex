import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import apiPokemon from '../../services/Api'

import pokeBall from '../../assets/pokeball.png'

import { Container, Header, HeaderTitle, PokemonSearch, PokemonSearchTextInput, PokemonContainer, PokemonDetail, PokemonName, PokemonType, PokemonNumber, PokemonImage } from './styles'

interface pokedex {
  name: string
  front_default: string
}

interface pokemon {
  id: number
  name: string
  image: string
  types: any[]
  order: number
  front_default: string
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const ListPokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemon[]>([])
  const [pokemon, setPokemon] = useState()

  // useEffect(() => {
  //   apiPokemon.get('pokemon').then((response) => {
  //     setPokemons(response.data.results)
  //   })
  // }, [])

  useEffect(() => {
    const getPokemons = async () => {
      const endPoints = []
      for (const number of numbers) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${number}`)
      }
      await Promise.all(endPoints.map(async (endpoint) => await apiPokemon.get(endpoint))).then(response => { setPokemons(response) })
    }

    getPokemons()
  }, [])

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Pokedéx
        </HeaderTitle>

        <Image style={{ width: 35, height: 35 }} source={pokeBall} />
        {/* <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }}/>
        </ProfileButton> */}
      </Header>

      <PokemonSearch style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 16, paddingRight: 16 }}>
        <PokemonSearchTextInput
        style={{
          borderRightWidth: 2,
          borderRightColor: '#3f94f2',
          borderBottomWidth: 2,
          borderBottomColor: '#3f94f2'
        }}
        placeholderTextColor='#7b7b7c' placeholder='Search Pokemon' />
        <Icon style={{ position: 'absolute', top: 25, left: 35 }} name='search' size={20} color='#7b7b7c' />
      </PokemonSearch>

      <FlatList<pokemon>
        style={{ paddingTop: 32, paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.data.id}
        renderItem={({ item: pokemon }) => (
          <PokemonContainer style={{ borderRadius: 25 }}>

            <PokemonDetail>
              <PokemonName>{pokemon.data.name}</PokemonName>
              <PokemonType>{pokemon.data.types[0].type.name}</PokemonType>
              <PokemonNumber>{`#0${pokemon.data.order}`}</PokemonNumber>
            </PokemonDetail>

            <PokemonImage source={{ uri: pokemon.data.sprites.other.home.front_default }} />
          </PokemonContainer>
        )}
        />
  </Container>
  )
}

export default ListPokemons
