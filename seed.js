'use strict'

const db = require('./server/db')
const {User, Pod, Adventure, Activity, Note, Poll} = require('./server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

//users
    const karaH = await User.create({
      firstName: 'Kara',
      lastName: 'Hirschman',
      email: 'karah@indecisive.com',
      password: '123',
      phone:2403296669,
      address: '5 Hanover Square'})

    const karaF = await User.create({
      firstName: 'Kara',
      lastName: 'Ferrari',
      email: 'karaf@indecisive.com',
      password: '123',
      phone:8608179810,
      address: '10 Hanover Square'})

    const sarah = await User.create({
      firstName: 'Sarah',
      lastName: 'Lynch',
      email: 'sarah@indecisive.com',
      password: '123',
      phone:2039062676,
      address: '20 Hanover Square'})

    const hawa = await User.create({
      firstName: 'Hawa',
      lastName: 'Sako',
      email: 'hawa@indecisive.com',
      password: '123',
      phone:6462281767,
      address: '25 Hanover Square'})

    const sophia = await User.create({
      firstName: 'Sophia',
      lastName: 'Milano',
      email: 'sophia@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '205 Water street'})

    const rayna = await User.create({
      firstName: 'Rayna',
      lastName: 'Mauss',
      email: 'rayna@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '2 East 126th street'
    })
    const james = await User.create({
      firstName: 'James',
      lastName: 'Miao',
      email: 'James@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '4 East 126th street'})

    const lucas = await User.create({
      firstName: 'Lucas',
      lastName: 'Simoné',
      email: 'lucas@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '10 West 130th street'})

    const mia = await User.create({
      firstName: 'Mia',
      lastName: 'Carpenter',
      email: 'mia@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '10 East 99th street'})

    const alex = await User.create({
      firstName: 'Alex',
      lastName: 'Rivera',
      email: 'alex@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '140 Joralemon street'})

    const peter = await User.create({
      firstName: 'Peter',
      lastName: 'Mills',
      email: 'peter@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '111-12 Atlantic Avenue'
    })

    const matt = await User.create({
      firstName: 'Matt',
      lastName: 'Norwett',
      email: 'matt@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '140 Joralemon street'})

    const rema = await User.create({
      firstName: 'Rema',
      lastName: 'Singh',
      email: 'rema@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '5 Atlantic Avenue'})

    const brandon = await User.create({
      firstName: 'Brandon',
      lastName: 'Ortega',
      email: 'brandon@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '10 east 52nd street'})

    const jake = await User.create({
      firstName: 'Jake',
      lastName: 'Matthews',
      email: 'jake@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '12 East 12th street'})

    const silas = await User.create({
      firstName: 'Silas',
      lastName: 'Miller',
      email: 'silas@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '1 Bank Street'})

    const john = await User.create({
      firstName: 'John',
      lastName: 'McDonald',
      email: 'john@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '1433 Harrod Avenue'})

    const mitch = await User.create({
      firstName: 'Peter',
      lastName: 'Michaelson',
      email: 'michaelson@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '12 E Tremont Ave'})

    const simon = await User.create({
      firstName: 'Simon',
      lastName: 'Francis',
      email: 'simon@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '1170 Grand Concourse'})

    const carter = await User.create({
      firstName: 'Carter',
      lastName: 'Brady',
      email: 'carter@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '10 East 24th street'})

    const resse = await User.create({
      firstName: 'Reese',
      lastName: 'Pinkerton',
      email: 'reese@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '12 East 24th street'})

    const dan = await User.create({
      firstName: 'Dan',
      lastName: 'Sohval',
      email: 'dan@indecisive.com',
      password: '123',
      phone:8342988329,
      address: '5 East 110th street'})


    const adventure1 = await Adventure.create({name: 'Rock Climbing', date: Date.now(), coordinator: 4})
    const pod1 = await Pod.create({name: 'fab four'})
    const adventure2 = await Adventure.create({name:'testing', date: Date.now(), totalCount: 5})
    const nitehawkCinema = await Activity.create({date: Date.now(), address: '136 Metropolitan Ave, Brooklyn, NY', selected: false, adventureId: 1, name:'Nitehawk Cinema'})
    const bigGayIceCream = await Activity.create({date: Date.now(), address: '61 Grove St, New York, NY', selected: false, adventureId: 1, name: 'Big Gay Ice Cream Shop'})

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
