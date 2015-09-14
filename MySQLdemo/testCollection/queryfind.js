
var coll = ds.leads.all();
coll;
//coll.query("first_name == moinow3")  // fonctionne

//related
 
coll.query('leads_image_id = :1',  "d7ed53d1-3b4f-11e5-9b4b-14feb5b938f8")