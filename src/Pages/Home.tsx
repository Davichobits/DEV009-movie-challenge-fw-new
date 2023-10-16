import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { GenreContainer } from "../components/genres-container";
import { useCustomSelector, useCustomDispatch } from "../hooks/redux";
import { MoviesContainter } from "../components/movies-container";
import {Helmet} from "react-helmet";

import { setAccessToken } from '../redux/slices/auth'
import { URLS } from "../utils/urls";

export const Home: React.FC = () => {
  const dispatch = useCustomDispatch()

  const accessToken = useCustomSelector((state) => state.auth.accessToken);
  console.log(accessToken)

  // Accesstoken

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

  

  return (
    <>
      <Helmet><title>Home | The Movie List</title></Helmet>
      <Header />
      <GenreContainer />
      <MoviesContainter />
    </>
  );
};