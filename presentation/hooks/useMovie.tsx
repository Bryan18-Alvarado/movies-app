import { getMovieByIdAction } from '@/core/actions/movies/get-movie-by-id.action'
import { GetMovieCastAction } from '@/core/actions/movies/get-movie-cast.action'
import { useQuery } from '@tanstack/react-query'

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24 // mantenemos la data fresca por 24 horas
  })

  const castQuery = useQuery({
    queryKey: ['cast', id],
    queryFn: () => GetMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24
  })

  return {
    movieQuery,
    castQuery
  }
}
