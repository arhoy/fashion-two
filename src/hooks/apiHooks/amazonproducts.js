// Calling the Amazon Products from pilotjs.com
import axios from 'axios';

// My database for electronics
export const getElectronics = async (page, limit) => {
  const results = await axios(
    `https://pilotjs.com/api/v1/amazon-electronics?page=${page ||
      1}&limit=${limit || 12}`,
  );

  // setstate of results to results obj. here results.data is the object
  return results.data;
};

// My database for Amazon products
export const getAmazonProducts = async (page, limit) => {
  let results;
  if (process.env.NODE_ENV === 'development') {
    results = await axios(
      `http://localhost:5000/api/v1/amazonproducts?page=${page ||
        1}&limit=${limit || 12}`,
    );
  } else {
    results = await axios(
      `https://pilotjs.com/api/v1/amazonproducts?page=${page ||
        1}&limit=${limit || 12}`,
    );
  }

  // setstate of results to results obj. here results.data is the object
  return results.data;
};

// The AMAZON Database
export const getAmazonProductAPI = async keywords => {
  let results;
  if (process.env.NODE_ENV === 'development') {
    results = await axios(
      `http://localhost:5000/api/v1/amazon-product-api?keywords=${keywords}`,
    );
  } else {
    results = await axios(
      `https://pilotjs.com/api/v1/amazon-product-api?keywords=${keywords}`,
    );
  }

  // setstate of results to results obj. here results.data is the object
  return results.data;
};
