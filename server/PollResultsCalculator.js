const Poll = require('./db/models/poll')



function tallyPoll(adventureId){
  //eventually find by id
let {data} = Poll.findAll({where: {adventureId: id}})
	let pollResults = []

  let groupPriceRange = 0
  let groupActivity = 0
  let groupArtsy = 0
  let groupHunger = 0
  let groupDrink = 0
  let maxLat = 0
  let minLat = Infinity
  let maxLng = -Infinity
  let minLng = 0


  let priceAvg, activityAvg, artsyAvg, hungerAvg, drinkAvg, longitudeAvg, latitudeAvg

  for (let i = 0; i < data.length; i++){
    groupPriceRange += data[i].priceRange
    groupActivity += data[i].activityLevel
    groupArtsy += data[i].hungerLevel
    groupHunger += data[i].drinkLevel
    groupDrink += data[i].drinkLevel

    if (maxLat < data[i].latitude){
      maxLat = data[i].latitude
    }

    if (minLat > data[i].latitude){
      minLat = data[i].latitude
    }

    if (maxLng < data[i].longitude){
      maxLng = data[i].longitude
    }

    if(minLng > data[i].longitude){
      minLng = data[i].longitude
    }
  }

    priceAvg = Math.floor(groupPriceRange/data.length)
    activityAvg = groupActivity/data.length
    artsyAvg = groupArtsy/data.length
    hungerAvg = groupHunger/data.length
    drinkAvg = groupDrink/data.length
    latitudeAvg =  (maxLat + minLat)/2
    longitudeAvg = (maxLng + minLng)/2

    pollResults.push({
      priceRange: priceAvg,
      activityLevel:activityAvg,
      artsyLevel:artsyAvg,
      hungerLevel:hungerAvg,
      drinkLevel:drinkAvg,
      location: [latitudeAvg, longitudeAvg]
    })

    console.log(pollResults)
    return pollResults;
  }

module.exports = tallyPoll







