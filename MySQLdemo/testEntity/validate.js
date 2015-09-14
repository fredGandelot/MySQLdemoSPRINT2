//model leads > last_name not null (checké dans un event Validate)

var e = new ds.leads();
		e.first_name = "tutu";
		e.last_name = "lastName"
		e.validate();
		e.save()
		e;
		
