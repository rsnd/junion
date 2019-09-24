const app = require('../../src/app');

describe('\'polls\' service', () => {
  it('registered the service', () => {
    const service = app.service('polls');
    expect(service).toBeTruthy();
  });
});
