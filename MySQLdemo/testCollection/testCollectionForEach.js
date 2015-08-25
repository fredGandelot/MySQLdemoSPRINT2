var collection = ds.contacts.query('');

//forEach
var l = [];
collection.forEach(	function(e)
{
	l.push(e.first_name);
});
l
