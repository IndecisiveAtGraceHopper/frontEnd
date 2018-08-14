import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const data = [
  {id: 1,
  latitude: 40.80,
  longitude: -73.92,
  priceRange: 1,
  activityLevel: 1,
  artsyLevel:2,
  hungerLevel: 3,
  drinkLevel: 2,
  userId: 1,
  adventureId: 3
  },
  {id: 2,
  latitude: 50.02,
  longitude: -73.25,
  priceRange: 1,
  activityLevel: 1,
  artsyLevel:2,
  hungerLevel: 3,
  drinkLevel: 2,
  userId: 1,
  adventureId: 3
  },
  {id: 1,
  latitude: 48.00,
  longitude: -74.00,
  priceRange: 3,
  activityLevel: 1,
  artsyLevel: 2,
  hungerLevel: 3,
  drinkLevel: 2,
  userId: 1,
  adventureId: 3
  },
]

export default function tallyPoll(adventureId){
  //eventually find by id
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
    console.log(latitudeAvg, longitudeAvg)

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








