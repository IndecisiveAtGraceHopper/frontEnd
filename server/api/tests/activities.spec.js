const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../app')
const Activity = db.model('activity')

describe('Activity routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('/api/activities', () => {
        beforeEach(() => {
            return Activity.create({
                name: 'Brooklyn Bridge walk'
            })
        })

        it('GET /api/activities', async () => {
            const res = await request(app)
                .get('/api/activities')
                .expect(200)
            expect(Array.isArray(res.body)).to.be.true
        })

        it('GET /api/activities/:id', async () => {
            const res = await request(app)
                .get('/api/activities/1')
                .expect(200)
            expect(res.body.name).to.be.equal('Brooklyn Bridge walk')
        })

        it('POST /api/activities', async () => {
            const res = await request(app)
                .post('/api/activities')
                .send({
                    name: 'Super fun activity',
                    date: '06/14/2019'
                })
                .expect(200)
            expect(res.body.name).to.be.equal('Super fun activity')
        })

        it('PUT /api/activities/:id', async () => {
            const res = await request(app)
                .put('/api/activities/1')
                .send({
                    name: 'Picnic',
                    address: 'Prospect Park',
                    rating: 5
                })
                .expect(201)
            expect(res.body.name).to.be.equal('Picnic')
        })

        it('DELETE /api/activities/:id', async () => {
            const res = await request(app)
                .delete('/api/activities/1')
                .expect(204)
        })
    })
})