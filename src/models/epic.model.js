const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const epicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      minLength:3,
      maxLength:40,
      trim:true,
    },
    img: {
      type: [String],
      required: true,
    },
    tasks: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
      minLength:3,
      maxLength:300,
      trim:true,
    },
    getInvolved: {
      type: String,
      required: true,
      minLength:3,
      maxLength:300,
      trim:true,
    },
    sizeRating: {
      type: Number,
      enum: [1, 2, 3, 5, 8, 13, 21, 34],
      required: true,
    },
    progress: {
      type: Number,
      required: true,
      min: 0, max: 100,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
epicSchema.plugin(toJSON);

/**
 * @typedef Epic
 */
const Epic = mongoose.model('Epic', epicSchema);

module.exports = Epic;
