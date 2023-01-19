const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  if (breedName === "") {
    callback(error);
  } else {
    const breedID = breedName.slice(0, 4);
    request(
      `https://api.thecatapi.com/v1/breeds/search?q=${breedID}`,
      (error, response, body) => {
        if (error) {
          callback(error, null);
        } else {
          if (response.statusCode === 200) {
            const data = JSON.parse(body);
            const description = data[0].description;
            callback(null, description);
          }
        }
      }
    );
  }
};

module.exports = { fetchBreedDescription };
