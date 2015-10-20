//ds.leads.first().account.name; //FONCTIONNE
//ds.leads.all().account.name; //FONCTIONNE PAS


//ds.leads.first()

var coll = ds.leads.query('account.id is not null');
//var coll = ds.leads.query('account_name is not null');

//ds.leads('1cf60963-f51f-e851-0c3c-5595026bb474').account.name;



var coll1 = ds.leads.all();
var coll2 = ds.leads.query('account_name is not null');
var coll3 = ds.leads.query('account.id is not null');

coll1.account;
coll2.account;
coll3;


