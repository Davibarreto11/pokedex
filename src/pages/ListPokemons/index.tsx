import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'
import apiPokemon from '../../services/Api'

import pokeBall from '../../assets/pokeball.png'

import { Container, Header, HeaderTitle, PokemonSearch, PokemonSearchTextInput, PokemonContainer, PokemonDetail, PokemonName, PokemonType, PokemonNumber, PokemonImage } from './styles'

interface pokemon {
  data: {
    id: number
    name: string
    types: any[]
    order: number
    sprites: {
      other: {
        home: {
          front_default: string
        }
      }
    }
  }
}

const ListPokemons: React.FC = () => {
  const { navigate } = useNavigation()

  const [searchText, setSearchText] = useState('')
  const [pokemons, setPokemons] = useState<pokemon[]>([])
  const [listPokemons, setListPokemons] = useState<pokemon[]>([])

  useEffect(() => {
    if (searchText === '') {
      const getPokemons = async () => {
        const endPoints = []
        for (let i = 1; i <= 200; i++) {
          endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        setListPokemons(pokemons)
        await Promise.all(endPoints.map(async (endpoint) => await apiPokemon.get(endpoint))).then(response => { setPokemons(response) })
      }

      getPokemons()
    } else {
      setListPokemons(pokemons.filter(item => {
        if (item.data.name.includes(searchText)) {
          return true
        } else {
          return false
        }
      }))
    }
  }, [searchText, pokemons])

  const navigateToPokemonDetail = useCallback((pokemonId: number) => {
    navigate('PokemonDetail', { pokemonId })
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
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#7b7b7c'
        placeholder='Search Pokemon'
        value={searchText}
        onChangeText={(t) => { setSearchText(t) }} />
        <Icon style={{ position: 'absolute', top: 25, left: 35 }} name='search' size={20} color='#7b7b7c' />
      </PokemonSearch>

      <FlatList<pokemon>
        style={{ paddingTop: 32, paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}
        data={listPokemons}
        // keyExtractor={(pokemon) => pokemon.data.id}
        renderItem={({ item: pokemon }) => (
          <PokemonContainer onPress={() => { navigateToPokemonDetail(pokemon.data.id) }} style={{ borderRadius: 25 }}>

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
