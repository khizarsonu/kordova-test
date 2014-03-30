document.addEventListener('deviceready',function(){
   var uuid=window.device.uuid;
   var model=window.device.model;
   var cordova=window.device.cordova;
   var platform=window.device.platform;
   var dv=window.device.version;
   var name=window.device.name;
   $('#uid').html(uuid);
   $('#model').html(model);
   $('#cordova').html(cordova);
   $('#platform').html(platform);
   $('#dv').html(dv);
   $('#name').html(name);
   
   var  field=["id","displayName"];
    var options = new ContactFindOptions();
    options.filter="";          // empty search string returns all contacts
    options.multiple=true; 
   var contat=navigator.contacts.find(field, contactSucc, contactError,options);
   
   function contactSucc(contacts) {
       alert("loading contact "+contacts.length);
       var str="";
        for (var i=0; i<contacts.length; i++) {
            if(contacts[i].displayName)
            str="Name = " +(contacts[i].displayName) + " <br/>";        
            $('#contactId').append(str);
        }
        
        
    }

    function contactError(error)
    {
        var er="No message";
        
        if(error.code===error.INVALID_ARGUMENT_ERROR)
            er="invalid argument";
        
        if(error.code===error.TIMEOUT_ERROR)
            er="timeout error";
        
        if(error.code===error.PENDING_OPERATION_ERROR)
            er="pending operation";
        
        if(error.code===error.IO_ERROR)
            er="IO error";
        
        if(error.code===error.NOT_SUPPORTED_ERROR)
            er="Not supported Error";
        
        if(error.code===error.PERMISSION_DENIED_ERROR)
            er="permission denied";
        
        if(error.code===error.UNKNOWN_ERROR)
            er="unknown error";

    
        alert("Error! "+er);
    }

});