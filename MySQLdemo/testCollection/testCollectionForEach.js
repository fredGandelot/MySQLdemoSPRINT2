//display

var collection = ds.leads.query('first_name == moinow');

//forEach
//var l = [];
//collection.forEach(	function(e)
//{
//	l.push(e.first_name);
//});
//l

//update forEach

var collection = ds.leads.query('primary_address_city == Cupertino');
//forEach
collection.forEach(	function(e)
{
	e.first_name = 'moinow798';
	e.last_name = 'pepito998';
	e.save();
});
collection ;


