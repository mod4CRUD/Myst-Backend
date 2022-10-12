# Template for Backend Express

The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | sets up the database locally                                                        |
| `npm run setup-heroku` | sets up the database on heroku                                                      |

## User Routes

| Route                    | HTTP Method | HTTP Body                                                                              | Description                                        |
| ------------------------ | ----------- | -------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `/api/v1/users/`         | `POST`      | `{email: 'example@test.com', password: '123456', firstName: 'Test', lastName: 'User'}` | Creates new user                                   |
| `api/v1/users/sessions/` | `POST`      | `{email: 'example@test.com', password: '123456'}`                                      | Signs in existing user                             |
| `/api/v1/users/me/`      | `GET`       | None                                                                                   | Returns current user                               |
| `/api/v1/users/`         | `GET`       | None                                                                                   | Authorized endpoint - returns all users for admin. |
| `api/v1/users/sessions/` | `DELETE`    | None                                                                                   | Deletes a user session                             |


  // it('/users should return a 200 if user is admin', async () => {
  //   const [agent] = await registerAndLogin({ email: 'admin' });
  //   const res = await agent.get('/api/v1/users/');
  //   expect(res.status).toEqual(200);
  // });

    it('/protected should return the current user if authenticated', async () => {
    const [agent] = await registerAndLogin();
    const res = await agent.get('/api/v1/users/me');
    expect(res.status).toEqual(200);
  });

    it('/users should return 200 if user is admin', async () => {
    const agent = request.agent();

    // create a new user
    await agent.post('/api/v1/users').send({
      email: 'admin',
      password: '1234',
    });
    // sign in the user
    const user = await agent
      .post('/api/v1/users/sessions')
      .send({ email: 'admin', password: '1234' });
    
    // const [agent] = await registerAndLogin({ email: 'admin' });
    const res = await agent.get('/api/v1/users');
    // console.log(res.body);
    expect(res.status).toEqual(200);
  });