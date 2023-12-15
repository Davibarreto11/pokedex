import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View``

export const Header = styled.View`
  padding: 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const IconContainer = styled(RectButton)`
  background: #2e3339;
  padding: 15px;
`

export const Pokemon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PokemonImage = styled.Image`
  width: 350px;
  height: 350px;
  margin-top: -75px;
  margin-bottom: 30px;
`

export const PokemonNameText = styled.Text`
  text-transform: capitalize;
  font-size: 36px;
  color: #F4ede8;
`

export const PokemonTypeText = styled.Text`
  text-transform: capitalize;
  font-size: 15px;
  color: #F4ede8;
  opacity: 0.5;
`

export const PokemonContainer = styled.View`
  border-radius: 10px;
  margin: 25px;
  background: #2e3339;
`

export const PokemonAttributes = styled.View`
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Row = styled.View`
  display: flex;
  align-items: center;
`

export const TypeAttributeText = styled.Text`
  text-transform: capitalize;
  font-size: 14px;
  color: #3b75b6;
`

export const ValueAttributeText = styled.Text`
  text-transform: capitalize;
  color: #F4ede8;
`

export const DescriptionPokemon = styled.View`
  padding: 0 20px 0 20px;
`

export const DescriptionTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: #F4ede8;
`

export const DescriptionText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #F4ede8;
  opacity: 0.5;
  margin-bottom: 10px;
`
