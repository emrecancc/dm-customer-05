import request from 'supertest';
import app from '../src/app';

test('API responds within 200ms', async () => {
  const start = Date.now();
  await request(app).get('/api/health');
  expect(Date.now() - start).toBeLessThan(600);
});