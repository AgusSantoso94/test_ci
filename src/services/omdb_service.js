const axios = require('axios');
const OMDBAPI_URL = process.env.OMDBAPI_URL;
const OMDBAPI_APIKEY = process.env.OMDBAPI_APIKEY;

const OmdbApiService = {}

OmdbApiService.getMoviesDataByParameter = async (params) => {
  const result = await axios.get(OMDBAPI_URL + `?apikey=${OMDBAPI_APIKEY}`, { params }).then(response => {
    return response;
  }).catch(error => {
    throw error;
  })

  return result;
}

module.exports = OmdbApiService
