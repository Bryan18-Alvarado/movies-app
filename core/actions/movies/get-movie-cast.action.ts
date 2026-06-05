import { movieApi } from '@/core/api/movie-api'
import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { CreditsResponse } from '@/infrastructure/interfaces/credits-response'
import { CastMapper } from '@/infrastructure/mappers/cast.mapper'

export const GetMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`)

    const movies = data.cast.map(CastMapper.fromMovieDBCastToEntity)

    return movies
  } catch (error) {
    throw 'No se pudieron cargar el elenco de la pelicula'
  }
}
