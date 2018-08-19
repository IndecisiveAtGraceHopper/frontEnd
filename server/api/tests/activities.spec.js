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

        it('GET /api/activities/:id', async () => {
            const res = await request(app)
                .get('/api/activities/1')
                .expect(200)
            expect(res.body.name).to.be.equal('Brooklyn Bridge walk')
            expect(res.body.id).to.be.equal(1)
        })
    })
})