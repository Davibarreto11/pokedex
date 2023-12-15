import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 25px;

  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
`

export const HeaderTitle = styled.Text`
  color: #F4ede8;
  font-weight: bold;
  font-size: 32px;
  font-family: 'RobotoSlab-Regular';
  padding-right: 10px;
`

export const PokemonSearch = styled.View`
  
`

export const PokemonSearchTextInput = styled.TextInput`
  height: 70px;
  padding-left: 50px;
  background: #111216;
  border-radius: 15px;
  color:#F4ede8;
  font-size: 20px;
`

export const PokemonContainer = styled(RectButton)`
  background: #2e3339;
  height: 100vh;
  padding: 20px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`

export const PokemonDetail = styled.View`
  flex: 1;
  margin-left: 20px;
`

export const PokemonName = styled.Text`
  text-transform: capitalize;
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #f4ede8;
`

export const PokemonType = styled.Text`
text-transform: capitalize;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  opacity: 0.5;
  color: #f4ede8;
  padding: 2px 0;
`

export const PokemonNumber = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #3b75b6;
`

export const PokemonImage = styled.Image`
  width: 120px;
  height: 120px;
`
