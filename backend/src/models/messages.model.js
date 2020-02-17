// messages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const messages = new Schema({
    createdBy: { type: Schema.Types.ObjectId, required: true },
    eventId: { type: Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    annonymous: { type: Boolean, required: true },
    upvotes: { type: Number, required: true },
    downvotes: { type: Number, required: true },
    replies: [
      {
        createdAt: { type: Date, default: Date.now },
        createdBy: { type: Schema.Types.ObjectId, required: true },
        text: { type: String, required: true },
      }
    ],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('messages');
  } catch (e) {
    return mongooseClient.model('messages', messages);
  }
};
