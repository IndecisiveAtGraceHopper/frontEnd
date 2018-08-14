const axios = require('axios')
const Activity = require('./db/models/activity')

async function apiCalls(categories, location, price) {
  for (let i =0; i<3; i++) {
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location[0]},${location[1]}&radius=15000&type=${categories[i]}&key=${process.env.GOOGLE_MAPS_KEY}`)
    if (data.results[0]){
      Activity.create({name:data.results[0].name, address: data.results[0].vicinity})
    }
    console.log('hey data data data data', data.results[0].name, data.results[0].vicinity)

  }
}

module.exports = apiCalls
