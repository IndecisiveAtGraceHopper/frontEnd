var express = require('express')
var router = express.Router()
//const googleMapsClient = require('./googleMapsClient')
var axios = require('axios')


router.get('/places', async function(req, res, next) {
	console.log('key= ',process.env.GOOGLE_MAPS_KEY)
	const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&key=${process.env.GOOGLE_MAPS_KEY}`)
	console.log("im here")
	res.send(data)
});


module.exports = router;