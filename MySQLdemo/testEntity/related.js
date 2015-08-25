
// THE PROBLEM IS HERE !!!!
//EVERYTIME THE SAME KEY §
////*********FROM LEADS TO IMAGE***************

var bug =ds.leads.query('leads_image_id is not null');
//bug.toArray ("id,leads_image_id.");   // HERE WE CAN NOTICE THAT THE IDs are different ! 
bug; // all the same >_< weird :)))


//:Bug n°2
//bug.leads_image_id //(does not work for the related attribute)
//bug.id //works

////Selection d'un Lead
//var l = ds.leads.first()


////Display his relatedAtt
//l.leads_image_id;


////Navigate through the related DC
//l.leads_image_id.PHOTO.meta





//=============================================


//var c = ds.leads.query('leads_image_id != null');

//var res = {};

//c.forEach(function(e) {
// res[e.leads_image_id] = true;
//});
//o = Object.keys(res);

//o;


//=============================================================

//var c = ds.leads.query('leads_image_id != null');

//var res = {};

//c.forEach(function(e) {
// res[e.leads_image_id.getKey()] = true;
//});

//o = Object.keys(res);

//o;



//=============FONCTION POUR LR ================
c = ds.leads.query('leads_image_id != null')

res = []

start = new Date().getTime()

for(i = 0; i < 100; ++i) {
 o = {}
 
 c.forEach(function(e) {
  o[e.leads_image_id.getKey()] = true
 })
 
 if(Object.keys(o).length != 4) {
  res.push(o)
 }
}

var dt = (new Date().getTime() - start) / 1000

x = [dt, res]

x

