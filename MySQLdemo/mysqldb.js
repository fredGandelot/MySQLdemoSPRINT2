//SCOPE
model.accounts_audit.properties.scope ="publicOnServer"


//LEADS_IMAGE TABLE
 model.leads_image.PHOTO.type = "image";


//LEADS TABLE
//CALCULATED
model.leads.fullName=new Attribute("calculated","string") ;

//EVENT
include("./Model/leads/leads-events.js");

//METHOD
include ("./Model/leads/leads-methods.js");




//ACCOUNT TABLE
include("./Model/accounts/accounts-events.js");





