function doSendRequests()
{
      count++;
      console.log('Count: ' + count);
       
      var theDate = new Date();
      if((theDate - startDate) < theDuration) {
            console.log('creating');
            var z = new ds.leads({
                             first_name    : "fred",
                             last_name     :  "gandelot" + theDate,
                             lead_source : "sharedWorker",
                             date_entered : theDate
                        });
            z.save();
            console.log('' + ds.leads.length);
      } else {
            console.log('closing');
            close();
      }
}
 
onconnect = function(msg)
{
    var thePort = msg.ports[0];    
    console.log('In onconnect');    
    thePort.postMessage("OK");
}
console.log('Start of test...');
 
var count = 0;
var startDate = new Date();
var theDuration = 5000;
             
setInterval(doSendRequests, 1000) //Run every second

