// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    userCode: { type: String, required: true },
    userAlias: { type: String, required: true },
    userRole: { type: String, required: true },
    avatar: { type: String, required: true },
    auth0Id: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
    twitterId: { type: String },
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
