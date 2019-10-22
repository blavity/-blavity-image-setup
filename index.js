module.exports = {
  parseImage : (queryString) => {
  	if (queryString[0] === '?') {
  		queryString = queryString.substring(1)
  	}
  	let queries = queryString.split(",")
  	const params = {}
  	queries.forEach(query => {
  		const queryObject = query.split('_')
  		params[queryObject[0]] = queryObject[1]
  	})
  	return params
  },
  removeEmpty:  (obj) => {
	   Object.keys(obj).forEach((key) => (obj[key] === null || obj[key] === undefined) && delete obj[key])

	    return obj
    },
  stringifyImageParams: (queryObject) => {
	   queryObject = removeEmpty(queryObject)
	    let queryString = ''
	    for (let element of Object.keys(queryObject)) {
		       queryString = `${queryString},${element}_${queryObject[element]}`
	        }
	    return queryString.substring(1)
    } ,
    setUpImage ({imgSlug, org: 'blavity', mode, options}) {
    if ( mode.trim().toLowerCase() === 'custom') {
    const stringifiedOptions = stringifyImageParams(options)
    return `https://res.cloudinary.com/${org}/image/upload/${stringifiedOptions}/${imgSlug}`
  } else if (mode.trim().toLowerCase() === 'enhance') {
    const { w = 'w_640',h = 'h_360',c='c_fill',ar='ar_16:9',g='g_center',z='z_1.0',x='x_0',y='y_0',q ='q_100',r,a } = parsedOptions
    return (r && a) ? `https://res.cloudinary.com/${org}/image/upload/${w},${h},${c},${ar},${g},${z},${x},${y},${q},r_${r},a_${a}/${imgSlug}`:  r ? `https://res.cloudinary.com/${org}/image/upload/${w},${h},${c},${ar},${g},${z},${x},${y},${q},r_${r}/${imgSlug}`: a ? `https://res.cloudinary.com/${org}/image/upload/${w},${h},${c},${ar},${g},${z},${x},${y},${q},a_${a}/${imgSlug}`: `https://res.cloudinary.com/${org}/image/upload/${w},${h},${c},${ar},${g},${z},${x},${y},${q}/${imgSlug}`
  } else {
     return `https://res.cloudinary.com/${org}/image/upload/c_fit,g_center,w_900,q_auto:best,g_south_east,x_0/${imgSlug}`
    }
  }
}
