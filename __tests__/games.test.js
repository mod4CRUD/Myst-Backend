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

  it('#GET /Games:id should return a single game', async () => {
    const resp = await request(app).get('/api/v1/games/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({ 
      id:'1',
      img: expect.any(String),
      genre: expect.any(String),
      title: 'HALO COMBAT EVOLVED',
      description: expect.any(String)
    });
  });

  it('#POST /Games should add to game to catalog', async () => {
    const newGame = {
      img:'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg',
      genre:'FIRST PERSON SHOOTER',
      title:'CALL OF DUTY MODERN WARFARE',
      description:'FAST PACE WAR'
    };
    const resp = await request(app).post('/api/v1/games').send(newGame);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({ 
      id: expect.any(String),
      ...newGame,
    });
  });
        




  afterAll(() => {
    pool.end();
  });
});
















