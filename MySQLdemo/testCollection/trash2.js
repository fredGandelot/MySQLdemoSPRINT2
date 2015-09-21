
//var doudou = ds.leads.query('account_name is not null');
//doudou.forEach(function(e)
//{
//	e.account_name = e.account_name.toUpperCase();
//	e.save();
//});


//ds.leads.query('account_name is not null').toArray('id, account_name,account_id');
//var a = ds.leads('3328d3c7-c206-db71-c8e2-559502ca0109');
//a.account_id = "d878113f-8bf6-e42a-f47f-55950159be91";
//a.save();
//a;

//ds.leads.contact



//ds.accounts.query('name =="5D INVESTMENTS"').toArray('id,name');

////ds.leads.query('account_name == "5D INVESTMENTS"');

//var a = ds.leads.first(); 
//a.account_id = "d878113f-8bf6-e42a-f47f-55950159be91";
//a.last_name  ="VerifTout";
//a.save();
//a;


//var a = ds.leads('0289CDECCFE04BA487689FADC71CF5C4'); a.last_name = "LastName" ; a.save(); a;
var a = ds.leads.find('last_name == LastName');
a.leads_image_id = ds.leads_image.find('ID == c492f0b0-3b4f-11e5-9b4b-14feb5b938f8');
a.save();
a;
//ds.leads.query('account_id = "d878113f-8bf6-e42a-f47f-55950159be91"');
