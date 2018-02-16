const mongoose = require('mongoose');

const LOCAL_URI = 'mongodb://localhost/noderest';
const MLABL_URI = 'mongodb://euler:euler@ds011248.mlab.com:11248/mereo-performance';

mongoose.connect(process.env.MLABL_URI, { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
