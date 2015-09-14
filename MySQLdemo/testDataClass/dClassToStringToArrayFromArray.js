//toArray(
ds.accounts.toArray("name,website");

//ds.accounts.toString("name,website");

//fromArray
//var arrAdd = []     // Create an empty array
//arrAdd[0] = {last_name: "Potter", first_name: "Harold", created: "fred"};
//arrAdd[1] = {last_name: "Luke", first_name: "Lucy", created: "fred", converted: true};
//     // 'married' is ignored if the attribute does not exist in the datastore class
//arrAdd[2] = {last_name: "Blue", first_name: "George", created: "fred"};
//var newColl = ds.leads.fromArray(arrAdd);     // entities are created and saved
//newColl; // displays the resulting collection


//verif
//ds.leads.count();




// Array Parameters
//var all = ds.leads.toArray("id ,first_name, last_name", "first_name, last_name", 0, 50);
//all;
//all.toArray("first_name", "first_name" );