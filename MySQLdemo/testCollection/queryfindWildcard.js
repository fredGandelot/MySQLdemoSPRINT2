
var coll = ds.leads.all();
coll;
//coll.query("first_name == moinow3")  // fonctionne

//related
 
//coll.query('leads_image_id = :1',  "d7ed53d1-3b4f-11e5-9b4b-14feb5b938f8");



//avec wilcard

coll.query("first_name == *inow3*") //.count();  // fonctionne


//If firstName contains a * in it
//var a = ds.leads('03EFF88ED24645D5A9FE6E94EB4D2C9D');
//a.first_name = "moi*ow3*";
//a.save();


//coll.query("first_name == *oi**ow3**").orderBy('first_name').first_name;



//If firstName contains a % at the beginning
var a = ds.leads('03EFF88ED24645D5A9FE6E94EB4D2C9D');
a.first_name = "moi*%ow3";
a.save();
a.first_name;

coll.query('first_name =:1', '*moi%ow3' ).toArray('id, first_name')
//coll.query('first_name =:1', '%moi*ow3' ).toArray('id, first_name')