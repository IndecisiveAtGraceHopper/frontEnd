const axios = require('axios')
//const Activity = require('./db/models/Activity')

async function apiCalls(categories, location, price) {
  for (let i =0; i<categories.length; i++) {
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location[0]},${location[1]}&radius=1500&type=${categories[i]}&rankby=prominence&minprice=0&maxprice=${price}key=${process.env.GOOGLE_MAPS_KEY}`)
    console.log(data[0])

  }
}

module.exports = apiCalls
