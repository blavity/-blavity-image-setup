

module.exports = {
  parse : (queryString) => {
  	if (queryString[0] === '?') {
  		queryString = queryString.substring(1)
  	}
  	let queries = queryString.split("&")
  	const params = {}
  	queries.forEach(query => {
  		const queryObject = query.split('=')
  		params[queryObject[0]] = queryObject[1]
  	})
  	return params
  },
  removeEmpty:  (obj) => {
	   Object.keys(obj).forEach((key) => (obj[key] === null || obj[key] === undefined) && delete obj[key])

	    return obj
    },
  stringify: (queryObject) => {
	   queryObject = removeEmpty(queryObject)
	    let queryString = ''
	    for (let element of Object.keys(queryObject)) {
		       queryString = `${queryString}&${element}=${queryObject[element]}`
	        }
	    return queryString.substring(1)
    } ,
    setUpImage (vueInstance, imgSlug, imageType, options) {
      const { $route } = vueInstance
      // take in the image slug
      // if options is defined parse it
      // set up a switch case that sets up a url based on cloudinary for image type
      // if one of the options says return as an object return the image link as an object
    }
}
