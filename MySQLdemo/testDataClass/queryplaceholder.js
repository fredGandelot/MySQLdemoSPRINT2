
////ALL = > 50
//ds.accounts.all().count();

////query with placeholder
//var entity = ds.accounts.find('name =:1',"King Software Inc");
//entity;


////Query - Count = 39
//var result = ds.accounts.query('date_entered > 2015-07-02');
//result.count();


////Query AND - Count = 37
//var result2 = ds.accounts.query('(created_by== 1 and deleted==0)');
//result2.count();



//var result3 = ds.accounts.query('(created_by== 1 and deleted==0) OR date_entered > 2015-07-02 OR id !==null');
//:result3.count();


//========================perso


