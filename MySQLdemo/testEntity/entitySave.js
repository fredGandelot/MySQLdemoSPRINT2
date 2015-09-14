
//createEntity

var entity = ds.accounts.createEntity();
//change some attributes
entity.id = "kjhjkjh";
entity.name="hamza";
entity.save();
entity.getStamp();
//entity

//var oups =ds.accounts.createEntity();
//oups.industry="entertainment2";
//oups.save();
//oups;


var oups2= ds.leads.createEntity();
oups2.first_name = 'cmoideRetour';
oups2.save();
oups2;


////updateEntity
//var entity = ds.accounts.first();
//entity.name="Save3";
//entity.save();
//entity;


////createEntity
//var entity = ds.contacts.createEntity();
//entity.id = generateUUID();
//entity.first_name = "toutou2";
//entity.last_name = "generateUUID";
//entity.title = "CTO";
//entity.save();
//entity

// var z = new ds.leads({
//                             first_name    : "fred" ,
//                             last_name     :  "gandelot" ,
//                             lead_source : "sharedWorker"
//                                                     });
//       z.save();
//            z;
