// events-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const events = new Schema({
    createdBy: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    avatar: { type: String, required: true },
    passcode: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    website: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    attendance: [ mongooseClient.Schema.Types.ObjectId ],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('events');
  } catch (e) {
    return mongooseClient.model('events', events);
  }
};
