const { OmdbApiService } = require('../services');
const { validateSearchParams, validateGetDetailParams} = require('../utils')

const MovieController = {
  search: async (req, res, next) => {
    try {
      await validateSearchParams(req.query)
      const result = await OmdbApiService.getMoviesDataByParameter(req.query);

      res.send({
        status: 200,
        message: 'success',
        data: {
          totalResults: result.data.totalResults,
          searchData: result.data.Search
        }
      });

    } catch (error) {
      next(error);
    }
  },

  getDetail: async (req, res, next) => {
    try {
      await validateGetDetailParams(req.query);
      const result = await OmdbApiService.getMoviesDataByParameter(req.query);

      res.send({
        status: 200,
        message: 'success',
        data: result.data
      });

    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController

