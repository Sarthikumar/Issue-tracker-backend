'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  Name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createdOn :{
    type:Date,
    default:""
  }


})
mongoose.model('User', userSchema);