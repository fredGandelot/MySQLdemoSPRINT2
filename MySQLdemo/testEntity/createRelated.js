
//trello https://trello.com/c/rz39lN3s/11-bug-related-the-related-entity-is-not-properly-saved-createentity-method


//creation
//var e = ds.leads.createEntity()
//e.first_name ="glouglu25021980" ;
//e.last_name="pepito";
////e.leads_image_id = ds.leads_image.find("ID === d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8");
//e.save();
//e.leads_image_id = ds.leads_image.find("ID === d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8");
//e.save()
//e;


//verification
//var e = ds.leads.all();
//var e = ds.leads.query('first_name == glouglu25021980');
//e.leads_image_id




//update sans for each
//image = c492
var update = ds.leads("11710590-8eb8-f0d2-8e07-559502af47c3")
update.leads_image_id= ds.leads_image.find('ID=d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8')
update.save();
update;

//====================BUG1   ====================


//var e = ds.leads.query('first_name == "alfonso2"');
//var result = e.toArray("id, first_name,last_name, leads_image_id");
//result;


//===================BUG2 https://trello.com/c/yYIuHeGF/4-cp-mysql-relations-query=======================


//var e = ds.leads.query('leads_image_id is not null');
//e.leads_image_id


//test other sens =========================

//var a = ds.leads_image('d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8');
//a.leadsCollection.first_name;









//BUG QUERY RELATED//https://trello.com/c/yYIuHeGF/4-cp-mysql-relations-query
//var a = ds.leads.query('leads_image_id =:1', "c492f0b0-3b4f-11e5-9b4b-14feb5b938f8");
//a;


//var a = ds.leads.query('id =:1', "08811E6F70694D449182D47CF4A5A3CE")
//a;


//ds.leads.all();
