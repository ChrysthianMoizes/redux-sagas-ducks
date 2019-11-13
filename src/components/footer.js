import React from "react";

import { useSelector } from "react-redux";

export default function Footer() {
  const count = useSelector(state => state.favorites.data.length);

  return <p>Você tem {count} favoritos.</p>;
}
