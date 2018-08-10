function categories (pollResults) {
  let categories = new Set()
  if (pollResults.hungerLevel > 2) {
    categories.add('bakery')
    categories.add('cafe')
    categories.add('restaurant')
  }
  if (pollResults.drinkLevel > 2) {
    categories.add('bar')
    categories.add('night_club')
  }

  if (pollResults.activityLevel > 2) {
    categories.add('amusement_park')
    categories.add('bowling_alley')
    categories.add('park')
    categories.add('casino')
  }

  if (pollResults.artsyLevel > 2) {
    categories.add('art_gallery')
    categories.add('museum')
  }

  if (pollResults.activityLevel < 2) {
    categories.add('spa')
  }

  return categories
}


function keywords (pollResults) {
  let keywords = []
  if (pollResults.hungerLevel > 2 && pollResults.drinkLevel > 2) {
    keywords.push('food')
    keywords.push('drinks')
  }
}
