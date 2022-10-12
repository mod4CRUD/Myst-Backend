const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


const cors = require('cors');



app.use(cors({
  origin: [
    'https://euphonious-sopapillas-dbe549.netlify.app',
    'http://localhost:7891',
    
  ],
  credentials: true,
})
);
  
// Built in middleware
app.use(express.json());
app.use(cookieParser());

// App routes
app.use('/api/v1/users', require('./controllers/users'));
app.use('/api/v1/games', require('./controllers/games'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
