import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export interface Pokemon {
  id: number
  name: string
  order: number
  sprites: {
    front_default: string | undefined
  }
  types: Array<{
    slot: number
    type: {
      name: string
    }
  }>
}

export interface PokeProps {
  url: string
  name: string
}

export interface AllPoke {
  count: number
  next: string
  previous?: string
  results: PokeProps[]
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type MainStackParamList = {
  Home: undefined
  Details: { name: string }
}

export type MainStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  T
>

export const typesColors = {
  normal: 'light',
  fighting: 'danger',
  flying: 'indigo',
  poison: 'violet',
  ground: 'amber',
  rock: 'amber',
  bug: 'lime',
  ghost: 'violet',
  steel: 'trueGray',
  fire: 'red',
  water: 'blue',
  grass: 'green',
  electric: 'yellow',
  psychic: 'pink',
  ice: 'lightBlue',
  dragon: 'purple',
  dark: 'dark',
  fairy: 'pink',
  unknown: 'gray',
  shadow: 'dark',
}

export const getTypeColor = (type: string) => {
  return typesColors[type as keyof typeof typesColors] || 'light'
}

// formats number to three digits
export const formatNumber = (num: number) => {
  return num.toString().padStart(3, '0')
}
