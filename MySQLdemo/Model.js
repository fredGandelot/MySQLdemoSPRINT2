model.addSQLCatalog("mysqldb", {
   // hostname: '192.168.7.25',
    user: 'root',
    //password: 'qauser',
    database: 'sugarcrm',
    port: 3306,
    ssl: false,
    dbType: 'mysql'
});




//model.addSQLCatalog("testSQLBridgeDB", {
//hostname: '192.168.7.43',
//user: 'root',
//password: 'qa',
//database: "mac_database",
//port: 3306,
//ssl: false
//});