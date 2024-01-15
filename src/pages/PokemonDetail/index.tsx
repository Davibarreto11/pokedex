import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import apiPokemon from '../../services/Api'

import {
  Container,
  Header,
  IconContainer,
  Pokemon,
  PokemonImage,
  PokemonNameText,
  PokemonTypeText,
  PokemonContainer,
  PokemonAttributes,
  Row, DescriptionPokemon,
  TypeAttributeText,
  ValueAttributeText,
  DescriptionTitle,
  DescriptionText
} from './styles'

interface RouteParams {
  pokemonId: number
}

interface PokemonType {
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
  name: string
  types: any[]
  abilities: any[]
  weight: number
  height: number
  base_experience: number
  moves: any[]
}

const PokemonDetail: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonType>()

  const { goBack } = useNavigation()
  const route = useRoute()

  const routesParams = route.params as RouteParams

  const navigateBack = useCallback(() => {
    goBack()
  }, [goBack])

  useEffect(() => {
    apiPokemon.get(`pokemon/${routesParams.pokemonId}`).then(response => { setPokemon(response.data) })
  }, [])

  return (
    <Container>
      <Header>
        <IconContainer onPress={navigateBack} style={{ borderRadius: 25 }}>
          <Icon name='chevron-left' size={25} color='#7b7b7c'/>
        </IconContainer>
        <IconContainer style={{ borderRadius: 25 }}>
          <Icon name='heart' size={25} color='#7b7b7c'/>
        </IconContainer>
      </Header>

      <Pokemon>
        <PokemonImage source={{ uri: pokemon?.sprites.other?.home.front_default }} />
        <PokemonNameText>{pokemon?.name}</PokemonNameText>
        <PokemonTypeText>{pokemon?.types[0].type.name}</PokemonTypeText>
      </Pokemon>

      <PokemonContainer>
        <PokemonAttributes>
          <Row>
            <ValueAttributeText>{pokemon?.abilities[0].ability.name}</ValueAttributeText>
            <TypeAttributeText>Ability</TypeAttributeText>
          </Row>
          <Row>
            <ValueAttributeText>{pokemon?.abilities[1]?.ability.name ? pokemon?.abilities[1]?.ability.name : 'Não possue' }</ValueAttributeText>
            <TypeAttributeText>Ability</TypeAttributeText>
          </Row>
          <Row>
            <ValueAttributeText>{pokemon?.weight}kg</ValueAttributeText>
            <TypeAttributeText>Weight</TypeAttributeText>
          </Row>
          <Row>
            <ValueAttributeText>{pokemon?.height} cm</ValueAttributeText>
            <TypeAttributeText>tall</TypeAttributeText>
          </Row>
        </PokemonAttributes>

        <DescriptionPokemon>
          <DescriptionTitle style={{ borderTopWidth: 1, borderColor: '#f4ede8', opacity: 0.5, paddingTop: 8 }}>Description</DescriptionTitle>
          <DescriptionText>
            Pokemon do tipo {pokemon?.types[0].type.name} com base de experiencia de {pokemon?.base_experience} com movimentos como {pokemon?.moves[0].move.name}, {pokemon?.moves[1].move.name}, {pokemon?.moves[3].move.name}, {pokemon?.moves[4].move.name}, {pokemon?.moves[5].move.name}!
          </DescriptionText>
        </DescriptionPokemon>
      </PokemonContainer>
    </Container>
  )
}
export default PokemonDetail
