import axios from "axios";

const getPlaces = () => {
  // const baseUrl = dev ? "localhost:3000" : "otherThing";
  const data = "";
  const config = {
    method: "get",
    url: "http://localhost:3000/pathway",
    headers: {},
    data,
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
