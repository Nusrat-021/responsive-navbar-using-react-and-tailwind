import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("gym.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl my-10 text-center font-medium">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {prices.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
