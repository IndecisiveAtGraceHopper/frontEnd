'use strict'

const db = require('./server/db')
const {User, Pod, Adventure, Activity, Note, Poll} = require('./server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')


    const karaH = await User.create({firstName: 'Kara', lastName: 'Hirschman', email: 'karah@indecisive.com', password: '123'})
    const karaF = await User.create({firstName: 'Kara', lastName: 'Ferrari', email: 'karaf@indecisive.com', password: '123'})
    const sarah = await User.create({firstName: 'Sarah', lastName: 'Lynch', email: 'sarah@indecisive.com', password: '123'})
    const hawa = await User.create({firstName: 'Hawa', lastName: 'Sako', email: 'hawa@indecisive.com', password: '123'})

    const adventure1 = await Adventure.create({name: 'Rock Climbing', date: Date.now()})
    // await Pod.bulkCreate([{userId: 1, adventureId: 1}, {userId: 2, adventureId: 1}, {userId: 3, adventureId: 1}, {userId: 4, adventureId: 1}])
    const adventure2 = await Adventure.create({name:'testing', date: Date.now(), totalCount: 5})
    const activity1 = await Activity.create({date: Date.now(), address: 'NY, NY', selected: true, adventureId: 1})

  const board1 = await Note.create({notes: "can't wait to go rock climbing!", adventureId: 1})

  const poll1 = await Poll.create({priceRange: 4, activityLevel: 4, artsyLevel: 1, hungerLevel: 2, drinkLevel: 2, userId: 1, adventureId:1})
  const poll2 = await Poll.create({priceRange: 4, activityLevel: 4, artsyLevel: 1, hungerLevel: 2, drinkLevel: 2, userId: 2, adventureId:1})
  const poll3 = await Poll.create({priceRange: 4, activityLevel: 4, artsyLevel: 1, hungerLevel: 2, drinkLevel: 2, userId: 3, adventureId:1})
  const poll4 = await Poll.create({priceRange: 4, activityLevel: 4, artsyLevel: 1, hungerLevel: 2, drinkLevel: 2, userId: 4, adventureId:1})

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
