var e = ds.accounts.first();
//à chaque fois changer la valeur
e.name = "eeeau";
var f = ds.accounts.first();
f.name = "ffffff";

e.save()
f.save()

var x = [e, f];
x;

