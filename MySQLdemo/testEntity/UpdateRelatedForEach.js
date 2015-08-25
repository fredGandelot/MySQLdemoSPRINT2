//AFFECTATION THROUGH forEach

var a = ds.leads_image.query('ID = c492f0b0-3b4f-11e5-9b4b-14feb5b938f8');
a.forEach(function(personne)
{
personne.leadsCollection.forEach(function(prenom)
{ prenom.first_name = 'toutuForEachForME25'
})
});



ds.leads.query('first_name = toutuForEachForME25');

