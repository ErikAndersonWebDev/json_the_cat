const request = require("request");
const breed = process.argv.slice(2);
console.log(breed);
if (breed === "") {
  return "try again"
} else {
  const breedID = breed.toString().slice(0, 3);
  console.log(breedID);
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedID}`,
    (error, response, body) => {
      if (error) {
        console.log("error:", "Breed not found");
        process.exit();
      }
      if (response.statusCode === 200) {
        const data = JSON.parse(body);
        console.log(data);
      }
    }
  );
}
