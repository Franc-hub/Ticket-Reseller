const request = require('supertest');
const { setupMongo } = require('./test.setup');
const { app } = require('../src/server');

setupMongo('check-testing');

test('Check should work', async () => {
    await request(app)
        .get('/')
        .expect(200)
});
