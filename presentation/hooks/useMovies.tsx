import { NowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { popularMoviesAction } from '@/core/actions/movies/popular.action' // Importamos la nueva acción
import { ratedMoviesAction } from '@/core/actions/movies/top-rated'
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

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

  const ratedQuery = useInfiniteQuery({
    initialPageParam: 1, //pagina inicial
    queryKey: ['movies', 'top-rated'],
    //extraemos el pageParams y se lo pasamos a nuestra accion
    queryFn: ({ pageParam }) => ratedMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1
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
