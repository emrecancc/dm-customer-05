import request from 'supertest';
import app from '../src/app';

describe('Performance tests', () => {
  it('API responds within 1250ms', async () => {
    const start = Date.now();
    await request(app).get('/api/endpoint');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(1250);
  });
});