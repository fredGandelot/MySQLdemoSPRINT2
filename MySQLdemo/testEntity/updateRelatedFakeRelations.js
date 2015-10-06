//UPDATE RELATION LEADS.ACCOUNT_ID = ACCOUNT.ID à partir du ACCOUNT NAME




//var myColl = ds.leads.query('account_name is not null');
//myColl.forEach(function(onePerson)
//{
//var e = ds.accounts.find('name =:1', onePerson.account_name);
//	if (e) {
//	onePerson.account_id = e.id ;
//	console.log(onePerson.id + '    ' +  onePerson.account_id + '  Each Each Each ' + onePerson.account_name);
//	onePerson.website = "www.wakanda.io"
//	onePerson.save();
//	console.log(onePerson.id + '    ' +  onePerson.account_id + '  Each Save Each Save ' + onePerson.account_name);
//}
//});



////avec for 
//var myColl = ds.leads.query('account_name is not null');
//for (var onePerson = myColl.first(); onePerson != null; onePerson=onePerson.next())
//{
//	
//	
//	
//	var e = ds.accounts.find('name = :1', onePerson.account_name);
//		if (e) {
//		onePerson.account_id = e.id ;
//		onePerson.save();
//		console.log(onePerson.id + '    ' +  onePerson.account_id + '  Ho Oh Ho ' + onePerson.account_name);
//   }
//   }


//verif 
//var myColl = ds.leads.query('account_name is not null');
//myColl.toArray('id, account_id, account_name');


//var a = ds.accounts.query('name =:1','BAY FUNDING CO');
//a;


//ds.accounts.all().orderBy('name');

//var myColl = ds.leads.query('account_name is not null');
//for (var onePerson = myColl.first(); onePerson != null;      onePerson=onePerson.next())
//{
//    var ent = ds.accounts.find('name = :1', onePerson.account_name);

//}




//ds.leads('3328d3c7-c206-db71-c8e2-559502ca0109');






//UPDATE LEADS.CONTAXT_ID FAKE RELATION WITH CONTACT : CONTACT FIRST NAME AND LAST NAME = LEADS FIRST NAME AND LASTNAME
var myColl = ds.leads.all();
myColl.forEach(function(onePerson)
{
if(onePerson.last_name){
var e = ds.contacts.find('first_name == :1 AND last_name == :2', onePerson.first_name, onePerson.last_name);
	if (e) {
	onePerson.contact_id = e.id ;
	console.log('avant save  ' + onePerson.id + '    ' +  onePerson.contact_id + '  Each Each Each ' + onePerson.first_name + ' ' + onePerson.last_name);
	onePerson.save();
	console.log('après save  ' + onePerson.id + '    ' +  onePerson.contact_id + '  Each Each Each ' + onePerson.first_name + ' ' + onePerson.last_name);
		  }
												}
																				
});


////avec for 
//var myColl = ds.leads.query('account_name is not null');
//for (var onePerson = myColl.first(); onePerson != null; onePerson=onePerson.next())
//{
//	
//	
//	
//	var e = ds.accounts.find('name = :1', onePerson.account_name);
//		if (e) {
//		onePerson.account_id = e.id ;
//		onePerson.save();
//		console.log(onePerson.id + '    ' +  onePerson.account_id + '  Ho Oh Ho ' + onePerson.account_name);
//   }
//   }