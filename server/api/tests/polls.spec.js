// const { expect } = require('chai')
// const request = require('supertest')
// const db = require('../../db')
// const app = require('../../app')
// const Poll = db.model('poll')

// describe('Poll routes', () => {
//     beforeEach(() => {
//         return db.sync({force: true})
//     })

//     describe('/api/polls', () => {
//         beforeEach(() => {
//             return Poll.create({
//                 latitude: 47.3451095,
//                 longitude: 82.6793642,
//                 priceRange: 1,
//                 activityLevel: 2,
//                 artsyLeve: 4,
//                 hungerLevel: 2,
//                 drinkLevel: 1
//             })
//         })

//         it('GET /api/polls', async () => {
//             const res = await request(app)
//                 .get('/api/polls')
//                 .expect(200)
//             expect(typeof res.body).to.be.equal('array')
//         })

//         it('GET /api/polls/:id', async () => {
//             const res = await request(app)
//                 .get('/api/polls/1')
//                 .expect(200)
//             expect(res.body.priceRange).to.be.equal(1)
//             expect(res.body.id).to.be.equal(1)
//         })

//         it('POST /api/polls', async () => {
//             const res = await request(app)
//                 .post('/api/polls', {
//                     latitude: 65.954236,
//                     longitude: 78.452964
//                 })
//                 .expect(200)
//             expect(res.body.latitude).to.be.equal(65.954236)
//         })

//         it('PUT /api/polls/:id', async () => {
//             const res = await request(app)
//                 .put('/api/polls/2', {
//                     latitude: 43.657398
//                 })
//                 .expect(201)
//             expect(res.body.latitude).to.be.equal(43.657398)
//         })

//         it('DELETE /api/polls/:id', async () => {
//             const res = await request(app)
//                 .delete('/api/polls/2')
//                 .expect(204)
//         })
//     })
// })