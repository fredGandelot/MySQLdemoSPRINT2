
var a = ds.leads.query('account_id is not null');

//.toArray('account_name, account_id'); 

a;
a.toArray('account_name, account_id');

var b = ds.accounts('d878113f-8bf6-e42a-f47f-55950159be91');

var e = b.leadsAccountCollection.first()

e.id;  //FONCTIONNE

[e.first_name,e.last_name] ; //FONCTIONNE PAS 

//e.leadsAccountCollection.leads_image_id.PHOTO;


//ds.leads("3328d3c7-c206-db71-c8e2-559502ca0109");