const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../app')
const User = db.model('user')

describe('User routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('/api/users', () => {
        beforeEach(() => {
            return User.create({
                firstName: 'Sophia',
                lastName: 'Milano',
                email: 'sophiamilano@indecisive.com'
            })
        })

        it('GET /api/user', async () => {
            const res = await request(app)
                .get('/api/users')
                .expect(200)
            expect(typeof res.body).to.be.equal('array')
        })

        it('GET /api/users/:id', async () => {
            const res = await request(app)
                .get('/api/users/1')
                .expect(200)
            expect(res.body.fullName).to.be.equal("Sophia Milano")
            expect(res.body.id).to.be.equal(1)
        })

        it('POST /api/users', async () => {
            const res = await request(app)
                .post('/api/users', {
                    firstName: 'Kara',
                    lastName: 'Hirschman',
                    email: 'karahirschman@indecisive.com'
                })
                .expect(200)
            expect(res.body.email).to.be.equal('karahirschman@indecisive.com')
        })

        it('PUT /api/users/:id', async () => {
            const res = await request(app)
                .put('/api/users/2', {
                    email: 'kara.h@indecisive.com'
                })
                .expect(201)
            expect(res.body.email).to.be.equal('kara.h@indecisive.com')
        })

        it('DELETE /api/users/:id', async () => {
            const res = await request(app)
                .delete('/api/users/2')
                .expect(204)
        })
    })
})