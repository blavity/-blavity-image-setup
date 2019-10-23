module.exports = {
  parseImage(queryString) {
    if (queryString[0] === '?') {
      queryString = queryString.substring(1)
    }
    const queryParams = {}
    queryString.split(',').forEach(query => {
      const queryObject = query.split('_')
      queryParams[queryObject[0]] = queryObject[1]
    })
    return queryParams
  },
  removeEmpty(obj) {
    Object.keys(obj).forEach((key) => (obj[key] === null || obj[key] === undefined) && delete obj[key])
    return obj
  },
  stringifyImageParams(queryObject) {
    queryObject = this.removeEmpty(queryObject)
    return Object.keys(queryObject).map(el => `${el}_${queryObject[el]}`).join(',')
  },
  setUpImage({imgSlug, org='blavity', mode, options}) {
    if (mode.trim().toLowerCase() === 'custom') {
      const stringifiedOptions = this.stringifyImageParams(options)
      return `https://res.cloudinary.com/${org}/image/upload/${stringifiedOptions}/${imgSlug}`
    } else if (mode.trim().toLowerCase() === 'enhance') {
      const { w='640', h='360', c='fill', ar='16:9', g='center', z='1.0', x='0', y='0', q='100', r, a } = options
      return (r && a) ? `https://res.cloudinary.com/${org}/image/upload/w_${w},h_${h},c_${c},ar_${ar},g_${g},z_${z},x_${x},y_${y},q_${q},r_${r},a_${a}/${imgSlug}` : r ? `https://res.cloudinary.com/${org}/image/upload/w_${w},h_${h},c_${c},ar_${ar},g_${g},z_${z},x_${x},y_${y},q_${q},r_${r}/${imgSlug}` : a ? `https://res.cloudinary.com/${org}/image/upload/w_${w},h_${h},c_${c},ar_${ar},g_${g},z_${z},x_${x},y_${y},q_${q},a_${a}/${imgSlug}` : `https://res.cloudinary.com/${org}/image/upload/w_${w},h_${h},c_${c},ar_${ar},g_${g},z_${z},x_${x},y_${y},q_${q}/${imgSlug}`
    } else {
      return `https://res.cloudinary.com/${org}/image/upload/c_fit,g_center,w_900,q_auto:best,g_center,x_0/${imgSlug}`
    }
  }
}
