import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Loader from "react-loader-spinner";

export default function middlewares() {
  const { colors } = useCotext(ThemeContext);
  return (
    <div>
      <Loader
        type="Puff"
        color={colors.first}
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <h1>Carregando...</h1>;
    </div>
  );
}
