import React, { useState, useEffect } from "react";

// Components
import Loader from "./Loader";

// API
import { getCoin } from "../services/api";

const Landing = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <input type="text" placeholder="Search" />
      {coins.length ? (
        <div>
          {coins.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
