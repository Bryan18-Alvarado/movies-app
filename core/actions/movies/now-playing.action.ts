import { movieApi } from '@/api/movie-api'
import { MovieDBResponse } from '@/infrastructure/interfaces/moviedb-response'

export const NowPlayingAction = async () => {
  try {
    //URL final sera: baseURL+ '/now_playing' + params (api_key, language)
    const { data } = await movieApi.get<MovieDBResponse>('/now_playing')

    console.log(JSON.stringify(data, null, 2))

    return []
  } catch (error) {
    console.log(error)
    throw 'No se pudieron cargar las peliculas en cartelera'
  }
}
