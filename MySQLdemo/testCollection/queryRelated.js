


//QUERY RELATED => WORKS

//var a = ds.leads.find('leads_image_id.ID like  "c492f0b0-3b4f-11e5-9b4b-14feb5b938f8"');
//a;

//QUERY RELATED PLACE HOLDER => KO

//var a = ds.leads.find('leads_image_id.ID eq :1',  "c492f0b0-3b4f-11e5-9b4b-14feb5b938f8");
//a;







//var a = ds.leads.query('leads_image_id.ID like  "c492f0b0-3b4f-11e5-9b4b-14feb5b938f8"');
//var a = ds.leads.query('account.name is not null');

var a = ds.leads.query('leads_image_id is not null');
//var a = ds.leads.query('account is not null');
a.count();






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

