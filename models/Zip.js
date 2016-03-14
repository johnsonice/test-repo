var mongoose = require('mongoose');


// Create the MovieSchema.
var ZipSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },  
  postal: {
    type: String,
    required: true
  },  
  latitude: {
    type: String,
    required: true
  },  
  longitude: {
    type: String,
    required: true
  },      
});

// Export the model.
module.exports = mongoose.model('zip', ZipSchema); // zip will be the collectino name