const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../app')
const Adventure = db.model('adventure')

describe('Adventure routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('/api/adventures', () => {
        beforeEach(() => {
            return Adventure.create({
                name: "Kara's birthday",
                date: '06/14/2019'
            })
        })

        it('GET /api/adventures', async () => {
            const res = await request(app)
                .get('/api/adventures')
                .expect(200)
            expect(typeof res.body).to.be.equal('array')
        })

        it('GET /api/adventures/:id', async () => {
            const res = await request(app)
                .get('/api/adventures/1')
                .expect(200)
            expect(res.body.name).to.be.equal("Kara's birthday")
            expect(res.body.id).to.be.equal(1)
        })

        it('POST /api/adventure', async () => {
            const res = await request(app)
                .post('/api/activities', {
                    name: 'Beach Day',
                    date: '06/14/2019'
                })
                .expect(200)
            expect(res.body.name).to.be.equal('Super fun activity')
        })

        it('PUT /api/adventures/:id', async () => {
            const res = await request(app)
                .put('/api/activities/2', {
                    name: 'Upper East Side Museums'
                })
                .expect(201)
            expect(res.body.name).to.be.equal('Upper East Side Museums')
        })

        it('DELETE /api/adventures/:id', async () => {
            const res = await request(app)
                .delete('/api/adventures/2')
                .expect(204)
        })
    })
})