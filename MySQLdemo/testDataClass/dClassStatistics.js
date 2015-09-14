////find max and min of a dataClass
ds.leads.min("last_name");
ds.users.max("last_name");

////sum function
ds.leads.sum("converted");


//compute()
ds.accounts.compute("date_entered");


//average
ds.leads.average("converted")


