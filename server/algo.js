function categories (pollResults) {
  let categories = []
  if (pollResults.hungerLevel > 2) {
    categories = categories.concat(['bakery', 'cafe', 'restaurant'])
  }
  if (pollResults.drinkLevel > 2) {
    categories = categories.concat(['bar', 'night_club'])
  }

  if (pollResults.activityLevel>2) {
    categories = categories.concat(['amusement_park', 'bowling_alley', 'park'])
  }

  return
}
