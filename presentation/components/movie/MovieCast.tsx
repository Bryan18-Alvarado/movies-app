import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { FlatList } from 'react-native'
import { ActorCard } from './ActorCard'

interface Props {
  cast: Cast[]
}

export const MovieCast = ({ cast }: Props) => {
  return (
    <FlatList
      horizontal
      data={cast}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ActorCard actor={item} />}
      showsHorizontalScrollIndicator={false}
      className="mb-10"
    />
  )
}
