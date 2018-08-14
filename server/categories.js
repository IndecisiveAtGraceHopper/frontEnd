

function categories (pollResults) {
  let categories = new Set()
  if (pollResults.hungerLevel >= 2 || pollResults.hungerLevel < 3) {
    categories.add('bakery')
    categories.add('cafe')
  }
  if (pollResults.hungerLevel <= 3) {
    categories.add('restaurant')
  }
  if (pollResults.drinkLevel >= 2 && pollResults.activityLevel < 2) {
    categories.add('bar')
  }

  if (pollResults.drinkLevel >= 2 && pollResults.activityLevel >= 2) {
    categories.add('night_club')
  }

  if (pollResults.activityLevel >= 2 && pollResults.activityLevel < 2.5) {
    categories.add('park')

  }

  if (pollResults.activityLevel >=3 && pollResults.drinkLevel >= 2 && pollResults.hungerLevel>= 2){
    categories.add('casino')
  }

  if (pollResults.activityLevel >= 2.5 && pollResults <= 3.6){
    categories.add('bowling_alley')
  }

  if (pollResults.activityLevel >= 3.6) {
    categories.add('amusement_park')
  }

  if (pollResults.artsyLevel > 2) {
    categories.add('art_gallery')
    categories.add('museum')
  }

  if (pollResults.activityLevel < 2) {
    categories.add('spa')
  }

  if (categories.length < 3) {
    categories.add('zoo')
    categories.add('aquarium')
  }
  return [...categories]
}


function keywords (pollResults) {
  let keywords = []
  if (pollResults.hungerLevel > 2 && pollResults.drinkLevel > 2) {
    keywords.push('food')
    keywords.push('drinks')
  }
}
