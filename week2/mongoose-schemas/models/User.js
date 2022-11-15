const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      minlength: 3,
      maxlength: 15,
      required: true
    },
    email: String,
    isAuthor: {
      type: Boolean,
      default: false
    },
    city: {
      type: String,
      enum: ['Lisbon', 'Setúbal', 'Amadora']
    },
    booksOwned: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
