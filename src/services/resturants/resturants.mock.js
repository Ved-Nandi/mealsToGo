import { mocks, mockImages } from "./mocks";
import camelize from "camelize";

export const resturantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    if (mocks[location]) {
      return resolve(mocks[location]);
    }
    return reject("no daata found that location");
  });
};

export const camelizeData = ({ results = [] }) => {
  results = results.map((res) => {
    res.photos = res.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosed: res.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(results);
};
