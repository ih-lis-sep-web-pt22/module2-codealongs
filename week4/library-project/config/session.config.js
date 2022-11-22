const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

module.exports = app => {
  // config needed for when the app is deployed
  app.set('trust proxy', 1);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60000 // value in ms. 60 * 1000 s === 1min
      },
      rolling: true, // session gets refreshed
      store: MongoStore.create({
        mongoUrl:
          process.env.MONGODB_URI || 'mongodb://localhost/library-project'
      })
    })
  );
};
