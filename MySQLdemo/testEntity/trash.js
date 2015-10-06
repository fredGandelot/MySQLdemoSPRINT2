//var att= ds.leads.id;
//ds.accounts.all().orderBy('name').toArray('id,name');
ds.leads('3328d3c7-c206-db71-c8e2-559502ca0109').account.name
//att.type;

//var entity = ds.accounts_audit.createEntity();
//entity.id = '123456789'
//entity.save();
//entity;
//ds.leads.query('first_name == moinow12');
//ds.leads_image.all();

//var a = ds.accounts.all();
//a.name;


//var coll = ds.leads.query('account_name is not null');
//coll.forEach(function(e){

//	result = ds.accounts.find('name == e.account_name');
//    e.account_id = result.id ;
//    e.save();
//});

//var result = ds.leads.query('account_name is not null');
//result.account_id;


//var a = ds.accounts.first(); a;


var uno = ds.accounts.find('name = :1', "fredAccount2") ;
var que = ds.accounts.find('name = :1', uno.name).name;
que;


var a = ds