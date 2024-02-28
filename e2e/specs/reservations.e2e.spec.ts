describe('Reservations', () => {
  beforeAll(async () => {
    const user = {
      email: 'alex.bezdetny@eclape.com',
      password: 'Password123!',
    };

    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  });

  test('Create', () => {});
});
