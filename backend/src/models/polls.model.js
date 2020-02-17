// polls-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const polls = new Schema({
    question: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, required: true },
    eventId: { type: Schema.Types.ObjectId, required: true },
    options: [
      { yes: { type: String, required: true } },
      { no: { type: String, required: true } },
      { maybe: { type: String, required: true } },
    ],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('polls');
  } catch (e) {
    return mongooseClient.model('polls', polls);
  }
};
