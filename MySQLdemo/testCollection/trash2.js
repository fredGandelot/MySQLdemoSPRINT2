
//var doudou = ds.leads.query('account_name is not null');
//doudou.forEach(function(e)
//{
//	e.account_name = e.account_name.toUpperCase();
//	e.save();
//});


ds.leads.query('account_name is not null').toArray('id, account_name,account_id');
//var a = ds.leads('3328d3c7-c206-db71-c8e2-559502ca0109');
//a.account_id = "d878113f-8bf6-e42a-f47f-55950159be91";
//a.save();
//a;

ds.leads.contact;
