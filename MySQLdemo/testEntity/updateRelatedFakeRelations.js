//var a = ds.leads.query('account_name is not null');
//a.forEach(function(personne)
//{
//var bonCompte = ds.accounts.find('name =:1', personne.account_name);
//personne.account_id = bonCompte.id ;
//personne.save();
//});



//avec for 
var myColl = ds.leads.query('account_name is not null');
for (var onePerson = myColl.first(); onePerson != null; onePerson=onePerson.next())
{
	
	
	
	var e = ds.accounts.find('name = :1', onePerson.account_name);
		if (e) {
		onePerson.account_id = e.id ;
		e.save();
		console.log(onePerson.account_id + '  Ho Oh Ho ' + onePerson.account_name);
   }
   }
      

