var collection = ds.leads.query('first_name == moinow');

//forEach
var l = [];
collection.forEach(	function(e)
{
	l.push(e.first_name);
});
l
