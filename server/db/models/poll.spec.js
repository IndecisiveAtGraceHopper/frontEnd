const {expect} = require('chai')
const db = require('../index')
const Poll = db.model('poll')

describe('Poll Model', () => {
  beforeEach(()=> {
    return db.sync({force: true })
  })
})
