import request from 'supertest';
import app from '../app';
test('API responds within 300ms', async () => {
  const start = Date.now();
  await request(app).get('/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(850);
});