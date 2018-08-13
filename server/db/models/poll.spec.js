const {expect} = require('chai')
const db = require('../index')
const Poll = db.model('poll')

describe('Poll Model', () => {
  beforeEach(()=> {
    return db.sync({force: true })
  })

  describe ('hook', ()=> {
    let poll, poll1, poll2
    beforeEach( async ()=> {
      poll = await Poll.create({
        activityLevel:4,
        adventureId:2
      })
      poll1= await Poll.create({
        activityLevel:2,
        adventureId:2
      })
      poll2 = await Poll.create({
        activityLevel: 3,
        adventureId: 1
      })
      it('returns all users with the same adventureId', ()=> {
        throw 'test failed'
      })
    })
  })
})
