import { NowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { popularMoviesAction } from '@/core/actions/movies/popular.action' // Importamos la nueva acción
import { ratedMoviesAction } from '@/core/actions/movies/top-rated'
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming'
import { useQuery } from '@tanstack/react-query'

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: NowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24
  })

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24
  })

  const ratedQuery = useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: ratedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24
  })

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24
  })

  return {
    nowPlayingQuery,
    popularQuery,
    ratedQuery,
    upcomingQuery
  }
}
