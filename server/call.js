const axios = require('axios')
//const Activity = require('./db/models/Activity')

async function apiCalls(categories, location, price) {
  console.log('props', categories, location, price)
  for (let i =0; i<categories.length; i++) {
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location[0]},${location[1]}&radius=1500&type=${categories[i]}&key=${process.env.GOOGLE_MAPS_KEY}`)
    console.log('hey data data data data', data)

  }
}

module.exports = apiCalls
