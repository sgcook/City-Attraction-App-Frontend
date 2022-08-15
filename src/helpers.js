const findAverageCoords = (lat, lng) => {
  const latAverage = lat.reduce((a, b) => a + b, 0) / lat.length;
  const lngAverage = lng.reduce((a, b) => a + b, 0) / lng.length;

  const coords = [];
  coords.push(latAverage, lngAverage);
  return coords;
};

module.exports = { findAverageCoords };
