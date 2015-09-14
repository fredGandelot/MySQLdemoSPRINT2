//update
var e = ds.accounts.first();
e;
e.name = "toto fred"
e;
e.refresh();
e;

//create New 
//var acc = new ds.accounts();     // create a new object of the entity type
//          acc.name = "fredAccount2";     // assign 'Dupont' to the 'name' attribute
//          acc.id = "key0"
//          acc.refresh();
//          acc.id = "key2"
//          acc.name = "fredAccountRefresh"
//          acc.save();  
//          
//acc;

//createEntity
var acc = ds.accounts.createEntity();     // create a new object of the entity type
          acc.name = "fredAccount1";     // assign 'Dupont' to the 'name' attribute
          acc.id = "key0"
          acc.refresh();
          acc.id = "key3"
          acc.name = "fredAccountRefresh2"
          acc.save();  
          
  acc;
