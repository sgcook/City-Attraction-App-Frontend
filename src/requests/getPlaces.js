import axios from "axios";

const getPlaces = (
  city,
  restaurantType,
  cuisine,
  mobility,
  museum,
  garden,
  landmarks
) => {
  // const baseUrl = dev ? "localhost:3000" : "actualURL";
  const data = "";
  const config = {
    method: "get",
    url: `http://localhost:3000/pathway`,
    headers: {},
    data,
    params: {
      city,
      restaurantType,
      cuisine,
      mobility,
      museum,
      garden,
      landmarks,
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
