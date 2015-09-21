//NEW RELATIONS !
//leads>Account
model.leads.account = new Attribute("relatedEntity", "accounts", "accounts", { foreignKey : "account_id" });
model.accounts.leadsAccountCollection = new Attribute("relatedEntities", "leadsCollection", "account", {reversePath : true});

//leads>Contact
model.leads.contact = new Attribute("relatedEntity", "contacts", "contacts", { foreignKey : "contact_id" });
model.contacts.leadsContactCollection = new Attribute("relatedEntities", "leadsCollection", "contact", {reversePath : true});

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





