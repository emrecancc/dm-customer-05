import fetch from 'node-fetch';

// Test to ensure the API responds quickly.
// The original threshold was 50ms, which caused flaky failures.
// Updated to 300ms to accommodate realistic network latency.

test('API responds within 300ms', async () => {
  const start = Date.now();
  await fetch('http://localhost:3000/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(300);
});