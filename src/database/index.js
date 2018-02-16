const mongoose = require('mongoose');

mongoose.connect('mongodb://euler:euler@ds011248.mlab.com:11248/mereo-performance', { useMongoClient: true });

// mongodb://<dbuser>:<dbpassword>@ds123658.mlab.com:23658/mereo-performance

// mongoose.connect('mongodb://euler:euler@ds011248.mlab.com:11248/mereo-performance',['app']);
mongoose.Promise = global.Promise;

module.exports = mongoose;
