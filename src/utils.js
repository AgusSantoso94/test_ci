const validateSearchParams = (query) => {
  // validate query params must not be null
  if (!Object.keys(query).length) {
    throw {
      status: 400,
      message: 'Query Params cannot be empty or null'
    };
  }

  // validate for mandatory query params
  if (!("s" in query)) {
    throw {
      status: 400,
      message: "The 's' query param is required"
    }
  }

  return null
}

const validateGetDetailParams = (query) => {
  // validate query params must not be null
  if (!Object.keys(query).length) {
    throw {
      status: 400,
      message: 'Query Params cannot be empty or null'
    };
  }

  // validate for mandatory query params
  if (!("i" in query) && !("t" in query)) {
    throw {
      status: 400,
      message: "At least one argument is required between 'i' or 't'"
    }
  }

  return null
}

module.exports = {
  validateSearchParams,
  validateGetDetailParams
}