import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du film:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4">Chargement...</div>;
  }

  if (!movie) {
    return <div className="container mx-auto p-4">Film non trouvé</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                Pas d'image disponible
              </div>
            )}
          </div>
          
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            
            <div className="mb-4">
              <span className="text-gray-600">Date de sortie: </span>
              <span>{new Date(movie.release_date).toLocaleDateString()}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-600">Note moyenne: </span>
              <span>{movie.vote_average} / 10</span>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p className="text-gray-700">{movie.overview || 'Aucune description disponible.'}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span
                    key={genre.id}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {movie.production_companies && movie.production_companies.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Sociétés de production</h2>
                <div className="flex flex-wrap gap-4">
                  {movie.production_companies.map(company => (
                    <span key={company.id} className="text-gray-700">
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
