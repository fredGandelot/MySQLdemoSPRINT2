
//trello https://trello.com/c/rz39lN3s/11-bug-related-the-related-entity-is-not-properly-saved-createentity-method


//creation
var e = ds.leads.createEntity()
e.first_name ="moinow29" ;
e.last_name="pepito3";
e.leads_image_id = ds.leads_image.find("ID == d7ed53d1-3b4f-11e5-9b4b-14feb5b938f8");
e.save();
e;


////verification

//var e = ds.leads.find('id = BFC1E15224CF48169CFEECFC3FFDF122');
////e.first_name = null ;
//e.save();
//e;



//BFC1E15224CF48169CFEECFC3FFDF122


//====================BUG1   ====================


//var e = ds.leads.query('first_name == "moinow29');
//var result = e.toArray("id, first_name,last_name, leads_image_id");
//result;




//test other sens =========================

//var a = ds.leads_image('d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8');
//a.leadsCollection.first_name;




// SPRINT 3===================BUG2 https://trello.com/c/yYIuHeGF/4-cp-mysql-relations-query=======================


//var e = ds.leads.query('leads_image_id is not null');
//e.leads_image_id




//BUG QUERY RELATED//https://trello.com/c/yYIuHeGF/4-cp-mysql-relations-query
//var a = ds.leads.query('leads_image_id =:1', "c492f0b0-3b4f-11e5-9b4b-14feb5b938f8");
//a;


//var a = ds.leads.query('id =:1', "08811E6F70694D449182D47CF4A5A3CE")
//a;


//ds.leads.all();
