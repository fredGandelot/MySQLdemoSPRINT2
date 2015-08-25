//next()
var collection = ds.accounts.query('id >=:1', '196a8fcd-1884-2a71-0b37-55acbdf188f6');
var ent = collection.first();

//iteration
ent.next();
