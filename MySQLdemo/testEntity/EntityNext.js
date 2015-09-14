//===exemple loopp

//var myColl = ds.accounts.query("deleted = :1", 0);
//// myColl; 
//for (var account = myColl.first(); account != null; account=account.next())  
//{
//   	account.name = account.name.toUpperCase();
//    account.save();
//}


//==exemple simple

var coll = ds.accounts.query('deleted == 0')
var uno = coll.first();
uno;
var deuzio = uno.next();
deuzio;
