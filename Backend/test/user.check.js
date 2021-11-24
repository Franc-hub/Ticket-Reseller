const request = require('supertest');
const { setupMongo } = require('./test.setup');
const { app } = require('../src/server');

setupMongo('check-testing');

test('Create user model should work', async () => {
    
});