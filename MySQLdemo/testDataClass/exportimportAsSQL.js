myFolder = new Folder("/Users/fgandelot/Documents/WAKANDA\ DEMO/MYSQL/MySQLdemoSPRINT2-master/export");     // get a reference to the export folder
if (myFolder.exists)     // if the folder actually exists
{
    ds.exportAsSQL( myFolder ) ;     // export the datastore
}

