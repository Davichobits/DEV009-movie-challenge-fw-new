import { useEffect, useState } from "react";
import { URLS } from "../utils/urls";
import { Genre } from "./genre-card";

type Genre = {
  id: number;
  name: string;
};

export const GenreContainer = () => {

  const [genres, setGenres] = useState<Genre[]>([]);

  // Todos los generos
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY_ACCESS}`,
      },
    };

    type MovieListresponse = {
      genres: Genre[];
    };

    fetch(URLS.movieGenreList, options)
      .then((res: Response) => res.json() as Promise<MovieListresponse>)
      .then((json: MovieListresponse) => setGenres(json.genres))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <section className="flex flex-wrap gap-2 mb-4">
      {genres.map((genre: Genre) => (
        <Genre key={genre.id} genre={genre} />
      ))}
    </section>
  )
}
