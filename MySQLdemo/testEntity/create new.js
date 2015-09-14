//syntaxe 1

//var acc = new ds.accounts();     // create a new object of the entity type
//          acc.name = "fredAccount2";     // assign 'Dupont' to the 'name' attribute
//          acc.name = "fredAccountRefresh"
//          acc.save();  
//          
//acc;


//syntax2 

var emp = new ds.leads( { first_name:"Dupont", last_name:"John"} ); 
        emp.save(); 
    emp;