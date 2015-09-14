// ===========AND ==========
//ds.accounts.all();

//var coll1 = ds.accounts.query("name =:1", "eeeau") ;
//var coll2 = ds.accounts.query("assigned_user_id=:1", "seed_chris_id") ;
//var coll3 = coll1.and(coll2);


//=======MINUS ===============

var coll1 = ds.accounts.query("name =:1", "eeeau") ;
var coll2 = ds.accounts.query("assigned_user_id=:1", "seed_chris_id") ;
var coll3 = coll1.minus(coll2);



// ========== OR ==========

var coll1 = ds.accounts.query("name =:1", "eeeau") ;
var coll2 = ds.accounts.query("assigned_user_id=:1", "seed_chris_id") ;
var coll3 = coll1.or(coll2);