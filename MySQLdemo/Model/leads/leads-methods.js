//METHODE CLASS
model.leads.methods.getFirstOnes = function(limit) {
    limit = limit || 2000;
    var col = ds.leads.query("id < :1", limit);
    return col;
};



//METHOD ENTOTY

model.leads.entityMethods.nameCaps = function () {

var result = this.first_name.toUpperCase() + ' ' + this.last_name.toUpperCase();
return result;
	
	
	
}; 



//METHOD COLLECTION

model.leads.collectionMethods.coll = function () {
	
//	 var results = [];         //empty array
//    //in this context, this is an entity collection
//    //so we can cycle through the entities using forEach
//    this.forEach(function(theStudent)
//    {
//        results.push({
//        name: theStudent.firstName + ' ' + theStudent.lastName,
//        GPA: theStudent.getGPA(year)});
//    })
	
};