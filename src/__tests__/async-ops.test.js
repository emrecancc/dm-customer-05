import { batchProcess } from '../src/batchProcess';

describe('batch processing', () => {
  test('processes all items', async () => {
    const items = [...Array(10).keys()];
    const results = [];
    await batchProcess(items, async (item) => {
      results.push(item);
    });
    expect(results).toHaveLength(10);
  });
});