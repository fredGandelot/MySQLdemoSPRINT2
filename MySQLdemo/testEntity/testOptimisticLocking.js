var e = ds.accounts.query('').first();
e.name = "eeeeee";
var f = ds.accounts.query('').first();
f.name = "ffffff";

e.save()
f.save()

var x = [e, f];
x;

