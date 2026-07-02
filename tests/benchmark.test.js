import request from 'supertest';
import app from '../src/app';

describe('API benchmark', () => {
  it('responds within 400ms', async () => {
    const start = Date.now();
    await request(app).get('/');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(400);
  });
});