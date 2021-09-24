import React, { useEffect, useState, createContext, useMemo } from "react";

import { resturantsRequest, camelizeData } from "./resturants.mock";

export const ResturantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurantsData, setRestaurantsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    resturantsRequest()
      .then((data) => {
        setTimeout(() => {
          console.count("effect");
          setRestaurantsData(camelizeData(data));
          setIsLoading(false);
        }, 2000);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  // useMemo(async () => {
  //   resturantsRequest()
  //     .then((data) => {
  //       setTimeout(() => {
  //         console.count("memo");
  //         setRestaurantsData(camelizeData(data));
  //         setIsLoading(false);
  //       }, 2000);
  //     })
  //     .catch(() => {
  //       setIsLoading(false);
  //       setError(true);
  //     });
  // }, []);

  console.log(restaurantsData);

  return (
    <ResturantsContext.Provider
      value={{
        restaurants: restaurantsData,
        error,
        isLoading,
      }}
    >
      {children}
    </ResturantsContext.Provider>
  );
};
