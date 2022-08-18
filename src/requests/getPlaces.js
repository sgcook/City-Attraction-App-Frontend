import axios from "axios";

const getPlaces = (city, restaurantType, cuisine, mobility, attractionType) => {
  // const baseUrl = dev ? "localhost:3000" : "actualURL";
  const data = "";
  const config = {
    method: "get",
    url: `http://localhost:3000/pathway`,
    headers: {},
    data,
    params: {
      city,
      mobility,
      eatingDrinking: {
        restaurantType,
        cuisine,
      },
      attractionType,
    },
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getPlaces;
