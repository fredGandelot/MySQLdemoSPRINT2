function doTestSharedWorker()
{
    var theWorker = new SharedWorker("TestWorker/SendRequestsWorker.js", "SendRequests");
    var thePort = theWorker.port; // MessagePort
    thePort.onmessage = function(evt)
    {
        var message = evt.data;
        switch(message.type)
            {
                case 'error':
                    debugger;
                    break;
            }
      }
     wait(); //waits for new messages in onmessage
}

	doTestSharedWorker();
	

