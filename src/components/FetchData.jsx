import axios from "axios";
import React, { useEffect, useState } from "react";

// const url =
//   process.env.NODE_ENV === "production"
//     ? "https://rickandmortyapi.com/api/character/2"
//     : "https://rickandmortyapi.com/api/character/5";

const url = process.env.REACT_APP_API_URL

const FetchData = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setInfo(res))
      .catch(console.error);
  }, []);
  console.log(info);
  return info ? (
    <div>
      <span>{info.data.name}</span>
      <br />
      <span>Entorno: {process.env.NODE_ENV}</span>
    </div>
  ) : null;
};

export default FetchData;
