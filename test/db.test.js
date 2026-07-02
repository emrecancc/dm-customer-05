const { User } = require('../models');

describe('User model', () => {
  beforeEach(() => User.destroy({ where: {}, truncate: true }));

  it('creates a user', async () => {
    const user = await User.create({ name: 'John Doe', email: 'john@example.com' });
    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});