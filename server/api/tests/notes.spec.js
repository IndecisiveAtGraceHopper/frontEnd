const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../app')
const Note = db.model('note')

describe('Note routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('/api/notes', () => {
        beforeEach(() => {
            return Note.create({
                notes: ""
            })
        })

        it('GET /api/notes', async () => {
            const res = await request(app)
                .get('/api/notes')
                .expect(200)
            expect(typeof res.body).to.be.equal('array')
        })

        it('GET /api/notes/:id', async () => {
            const res = await request(app)
                .get('/api/notes/1')
                .expect(200)
            expect(res.body.text).to.be.equal("")
            expect(res.body.id).to.be.equal(1)
        })

        it('POST /api/adventure', async () => {
            const res = await request(app)
                .post('/api/notes', {
                    notes: ''
                })
                .expect(200)
            expect(res.body.notes).to.be.equal('')
        })

        it('PUT /api/notes/:id', async () => {
            const res = await request(app)
                .put('/api/notes/2', {
                    notes: ''
                })
                .expect(201)
            expect(res.body.name).to.be.equal('')
        })

        it('DELETE /api/notes/:id', async () => {
            const res = await request(app)
                .delete('/api/notes/2')
                .expect(204)
        })
    })
})