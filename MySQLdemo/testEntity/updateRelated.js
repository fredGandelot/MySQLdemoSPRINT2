//update sans for each
//avant update image = c492 apres = d7ec

//update OK
var update = ds.leads("03EFF88ED24645D5A9FE6E94EB4D2C9D");
update.leads_image_id= ds.leads_image.find('ID=d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8');
update.save();
update;



//updateNull

//var e = ds.leads.find('id = 03EFF88ED24645D5A9FE6E94EB4D2C9D');
//e.leads_image_id = null;
//e.first_name = null ;
//e.save();
//e;