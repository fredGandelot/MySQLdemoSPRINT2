//================OrderBy simple case

//dataClass
var a = ds.leads.orderBy('first_name')
//collection
//var a = ds.leads.query('date_entered is not null').orderBy('date_modified');
a;
//var first = ds.leads.find('date_entered is not null');

//first.date_entered ="2015-07-06T09:11:20.000Z"
//first.date_modified ="2015-07-02T09:12:54.000Z"
//first.save();
//first;
//a.toArray( "date_entered, date_modified");



//======== OrderBy relation

ds.leads.query('leads_image_id is not null').orderBy('leads_image_id.ID')



//orderBy in Array
//var all = ds.leads.toArray("id ,first_name, last_name", "first_name, last_name", 0, 50);
//all;
//all.toArray("first_name", "first_name" );


