
//ALL = > 50
//ds.accounts.all().count();

//query with placeholder
//var entity = ds.accounts.find('name =:1',"King Software Inc");
//entity;


////Query - Count = 39
//var result = ds.accounts.query('date_entered > 2015-07-02');
//result.count();


////Query AND - Count = 37
//var result2 = ds.accounts.query('(created_by== 1 and deleted==0)');
//result2.count();



//var result3 = ds.accounts.query('(created_by== 1 and deleted==0) OR date_entered > 2015-07-02 OR id !==null');
//result3.count();



//===========LIKE OPERATOR================


var a = ds.leads.query('first_name = :1', "Jamal");
//var a = ds.leads.query('first_name like "Jamal"')
a;

ds.leads.first();

//========================PLCEHOLDER CONSTANT


//var toto, tata;
//toto = 1;
//tata = 0;

//var result3 = ds.accounts.query('created_by == :1 and deleted==:2',1,0);
//result3.count();




//==================PLACEHOLDERS VARIABLE

//var onePerson = ds.leads.all();
//var toto= ds.contacts.find('first_name == :1 AND last_name == :2', onePerson.first_name, onePerson.last_name);
//toto;

//var onePerson = ds.leads.first()
////onePerson;
//var onePerson ="Fredo"
//var toto= ds.contacts.query('first_name == :1' , onePerson);
//toto;




////ds.contacts.all().orderBy('last_name').toArray('first_name, last_name')
//ds.leads.all().orderBy('last_name').toArray('first_name, last_name')

//ds.contacts.find('first_name == "Fredo"');
//var b = ds.leads('0289CDECCFE04BA487689FADC71CF5C4');
//b.first_name = "fred";
//b.last_name = "Gandelot2";
//b.save();
//b;


