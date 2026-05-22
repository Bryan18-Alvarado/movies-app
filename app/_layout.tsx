import { NowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { Text, View } from 'react-native'
import '../global.css'
const RootLayout = () => {
  NowPlayingAction()
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-600">RootLayout</Text>
    </View>
  )
}

export default RootLayout
