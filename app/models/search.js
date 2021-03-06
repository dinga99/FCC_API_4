 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// El nombre es search, debido a que es una busqueda reciente.
var Searchschema = new Schema({
    //_id: {type: String },
    term: { type: String },
    when:  Date 
});

Searchschema.pre('save', function(next){
  var doc = this;
  doc.when = new Date();
  next();
  });

var Recentsearch = mongoose.model('Recentsearch', Searchschema);
module.exports = Recentsearch;

/*
var counter = mongoose.model('counter', CounterSchema);

// create a schema for our links
var urlSchema = new Schema({
  _id: {type: Number, index: true},
  long_url: String,
  created_at: Date
});

urlSchema.pre('save', function(next){
  var doc = this;
  counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, function(error, counter) {
      if (error)
          return next(error);
      doc.created_at = new Date();
      doc._id = counter.seq;
      next();
  });
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
*/
