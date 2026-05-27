import { NowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import '../global.css'

const queryClient = new QueryClient()
const RootLayout = () => {
  NowPlayingAction()
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  )
}

export default RootLayout
