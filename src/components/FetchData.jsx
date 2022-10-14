import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Input } from "gv-components-formacion";

// const url =
//   process.env.NODE_ENV === "production"
//     ? "https://rickandmortyapi.com/api/character/2"
//     : "https://rickandmortyapi.com/api/character/5";

const url = process.env.REACT_APP_API_URL;

const FetchData = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setInfo(res))
      .catch(console.error);
  }, []);
  
  return info ? (
    <div>
      <span>{info.data.name}</span>
      <br />
      <span>Entorno: {process.env.NODE_ENV}</span>
      <br />
      <Button primary={false} rgb size="large" label="Botón custom" />
    </div>
  ) : <div>Loading...</div>;
};

export default FetchData;
