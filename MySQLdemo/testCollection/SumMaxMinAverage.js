

//var coll = ds.leads.first();
//coll.converted =1;
//coll.save(); 
//coll.converted;

var collection = ds.leads.query('');
//collection.converted;
//collection.max("id");
//collection.min("id");
//collection.minus('id');
var a = collection.sum("converted");
//collection.average("converted")
//collection.compute("converted");



typeof a;

