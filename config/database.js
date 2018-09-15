const mongoose = require ('mongoose');

const mongoUrl = 'mongodb://Diegobs:D030794s@ds145138.mlab.com:45138/booksapi123'

const connect = () => mongoose.connect(mongoUrl);

module.exports = {connect};
