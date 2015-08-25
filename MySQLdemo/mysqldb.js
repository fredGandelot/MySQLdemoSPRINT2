
//LEADS TABLE
model.leads.fullName=new Attribute("calculated","string") ;


//Add new FK for commodity ^^
//model.leads.account_id = new Attribute("relatedEntity","accounts", "accounts" ) ;
//model.accounts.leads =   new Attribute("relatedEntities", "leadsCollection", "account_id", {reversePath:true});


//model.leads.contact_id = new Attribute("relatedEntity","contacts", "contacts") ;
//model.contacts.leads =   new Attribute("relatedEntities", "leadsCollection", "contact_id", {reversePath:true});


include("./Model/leads/leads-events.js");


//ACCOUNT TABLE
include("./Model/accounts/accounts-events.js");


//LEADS_IMAGE TABLE
 model.leads_image.PHOTO.type = "image";



