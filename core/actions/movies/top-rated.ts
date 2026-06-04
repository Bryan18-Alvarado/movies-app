import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

interface Options {
  page?: number
  limit?: number //Por si la API lo soporta en el futuro
}

//2. recibimos la paginacion que por defecto es 1

export const ratedMoviesAction = async ({ page = 1, limit = 10 }) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
      params: { page: page }
    })

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

    return movies
  } catch (error) {
    console.log(error)
    throw 'Cannot load rated movies'
  }
}
