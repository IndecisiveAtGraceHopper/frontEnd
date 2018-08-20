const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../app')
const Pod = db.model('pods')

describe('Pod routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('/api/pods', () => {
        beforeEach(() => {
            return Pod.create({
                name: 'Peas in a pod'
            })
        })

        it('GET /api/pods', async () => {
            const res = await request(app)
                .get('/api/pods')
                .expect(200)
            expect(typeof res.body).to.be.equal('array')
        })

        it('GET /api/pods/:id', async () => {
            const res = await request(app)
                .get('/api/pods/1')
                .expect(200)
            expect(res.body.name).to.be.equal("Peas in a pod")
            expect(res.body.id).to.be.equal(1)
        })

        it('POST /api/pods', async () => {
            const res = await request(app)
                .post('/api/pods', {
                    name: 'Peas in a pod 2'
                })
                .expect(200)
            expect(res.body.name).to.be.equal('Peas in a pod 2')
        })

        it('PUT /api/pods/:id', async () => {
            const res = await request(app)
                .put('/api/pods/2', {
                    name: 'Spice Girls'
                })
                .expect(201)
            expect(res.body.name).to.be.equal('Spice Girls')
        })

        it('DELETE /api/pods/:id', async () => {
            const res = await request(app)
                .delete('/api/pods/2')
                .expect(204)
        })
    })
})