import React, { useState, useEffect } from "react";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

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
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
