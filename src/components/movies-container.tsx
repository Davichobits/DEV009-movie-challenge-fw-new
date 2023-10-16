import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card"
import { URLS } from "../utils/urls";

type Movies = {
  id: number;
  name: string;
};

export const MoviesContainter = () => {

  const [movies, setMovies] = useState<[]>([]);

  // Discover Movie
useEffect(() => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY_ACCESS}`,
    },
  };

  type MovieListresponse = {
    genres: Movies[];
  };

  fetch(URLS.movieDiscover, options)
    .then((res: Response) => res.json() as Promise<MovieListresponse>)
    .then((json: MovieListresponse) => setMovies(json.results))
    .catch((err) => console.error("error:" + err));
}, []);

  return (
    <section className="flex gap-4 flex-wrap">
      {
        movies.map((movie: Movies) => (
          <MovieCard key={movie.id} name={movie.original_title} url={URLS.base + movie.poster_path} />
        ))
      }
    </section>
  )
}
