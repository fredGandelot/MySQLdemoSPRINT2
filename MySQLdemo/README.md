##Welcome to Wakanda##

This is the place to describe your Wakanda application.

Please visit [www.wakanda.org](http://www.wakanda.org "wakanda.org") for more information.

 
*************************************************************
                 DEV CONTINUED ON 0.188776
************************************************************






EVOLUTION FROM SPRINT1
==========================================================




CALCULATED ATTRIBUTE
=====================

- Add a Fullname attribute -> Leads DC
- Event onGet,onSet,onQuery,onSort
- onQuery event with a % wildcard ! ouf ! :)
- Add a calculated.js file with a query to test (in testEntity folder)
- FS Sukanda : Tab 2 (leads) Grid with fullname + textInput on FullName



BLOB / IMAGE HANDLING
=====================

- In MYSQL : Add table "leads_image" with a blob kind attribute (named 'blob') and one ID (PK)
- In Wakanda : mysqldb.js > this blob attribute declared as an image type
- Add an image.js file (testEntity) to navigate through Image attibute (height, lenght..size..etc)



FK HANDLING
===========


*MYSQL - FK*

- In MySQL > Add a FK in LEADS table linked to LEADS_IMAGE table (field called  leads_image_id) 
			So LEADS_IMAGE.ID = LEADS.LEADS_IMAGE_ID 
   
- In Image.js file, some queries to navigate through related objects (var l = ds.leads.first().leads_image_id.PHOTO)


*WAKANDA INNER FK*

-





note for Sprint3 : declare a non existing relation in Wakadna (between CONTACT and a new table contacts_image which has to be created in MYSQL)



