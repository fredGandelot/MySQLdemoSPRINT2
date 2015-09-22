


var bug =ds.leads.query('leads_image_id is not null');
//bug; // all the same >_< weird :)))
bug.leads_image_id //(does not work for the related attribute)


var a = ds.leads.query('leads_image_id =:1', "c492f0b0-3b4f-11e5-9b4b-14feb5b938f8");
a;

//var d = ds.leads_image('c492f0b0-3b4f-11e5-9b4b-14feb5b93838');
//d;
var b = ds.leads.find('leads_image_id = :1', "c492f0b0-3b4f-11e5-9b4b-14feb5b93838");
b;

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
//c = ds.leads.query('leads_image_id != null')

//res = []

//start = new Date().getTime()

//for(i = 0; i < 100; ++i) {
// o = {}
// 
// c.forEach(function(e) {
//  o[e.leads_image_id.getKey()] = true
// })
// 
// if(Object.keys(o).length != 4) {
//  res.push(o)
// }
//}

//var dt = (new Date().getTime() - start) / 1000

//x = [dt, res]

//x

