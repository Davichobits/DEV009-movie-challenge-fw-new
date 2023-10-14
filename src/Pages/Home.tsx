import { useEffect, useState } from "react";
import { Genre } from "../components/Genre";
import { useCustomSelector, useCustomDispatch } from "../hooks/redux";
import { setAccessToken } from '../redux/slices/auth'


const URLS = {
  authentication: "https://api.themoviedb.org/3/authentication",
  movieList: "https://api.themoviedb.org/3/genre/movie/list",
};

type Genre = {
  id: number;
  name: string;
};

export const Home: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const dispatch = useCustomDispatch()

  const accessToken = useCustomSelector((state) => state.auth.accessToken);
  console.log(accessToken)

  // Acces token

  useEffect(() => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY_ACCESS}`,
    },
  };

  fetch(URLS.authentication, options)
    .then((res) => res.json())
    .then((json) => dispatch(setAccessToken(json.status_message)))
    .catch((err) => console.error("error:" + err));
}, []);

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

    fetch(URLS.movieList, options)
      .then((res: Response) => res.json() as Promise<MovieListresponse>)
      .then((json: MovieListresponse) => setGenres(json.genres))
      .catch((err) => console.error("error:" + err));
  }, []);


  return (
    <div className="flex flex-wrap justify-between gap-2">
      {genres.map((genre: Genre) => (
        <Genre key={genre.id} genre={genre.name} />
      ))}
    </div>
  );
};