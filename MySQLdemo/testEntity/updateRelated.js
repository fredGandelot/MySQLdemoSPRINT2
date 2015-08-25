//update sans for each
//avant update image = c492 apres = d7ec


var update = ds.leads("11710590-8eb8-f0d2-8e07-559502af47c3")
update.leads_image_id= ds.leads_image.find('ID=d7ec22a9-3b4f-11e5-9b4b-14feb5b938f8')
update.save();
update;
