const setup = require('../data/setup');
const pool = require('../lib/utils/pool.js');
const request = require('supertest');
const app = require('../lib/app');


describe('backend route testing', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /Games should return a list of games', async () => {
    const resp = await request(app).get('/api/v1/games');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      {
        id: expect.any(String),
        img: expect.any(String),
        genre: expect.any(String),
        title: expect.any(String),
        description: expect.any(String)
      },
      {
        id:'2',
        img:'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/220px-Gears_of_war_cover_art.jpg',
        genre:'THIRD PERSON SHOOTER',
        title:'GEARS OF WAR',
        description:'LAST DITCH ATTEMPT TO SAVE HUMANITY FROM MONSTERS'
      }
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
