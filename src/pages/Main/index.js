import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as FavoriteActions } from "../../store/ducks/favorites";

export default function Main() {
  const [repository, setRepository] = useState("");

  const favorites = useSelector(state => state.favorites.data);
  const loading = useSelector(state => state.favorites.loading);
  const error = useSelector(state => state.favorites.error);
  const dispatch = useDispatch();

  function handleAddRepository(e) {
    e.preventDefault();

    dispatch(FavoriteActions.addFavoriteRequest(repository));
    setRepository("");
  }

  return (
    <>
      <form onSubmit={handleAddRepository}>
        <input
          placeholder="usuário/repositório"
          value={repository}
          onChange={e => setRepository(e.target.value)}
        />
        <button type="submit">Adicionar</button>

        {loading && <span>Carregando...</span>}
        {!!error && <span style={{ color: "#F00" }}>{error}</span>}

        <ul>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
