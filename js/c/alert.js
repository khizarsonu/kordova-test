/**
 * Created by khizar on 3/31/14.
 */
define([],function(){
    var alrt=function(message,title,ButtonName,callBack)
    {
        ButtonName=ButtonName||"OK";
        title=title||"Alert!";
        if(navigator.notification)
        {
            navigator.notification.alert(
                message,  // message
                callBack,         // callback
                title,            // title
                ButtonName                  // buttonName
            );
        }
        else
        {
            alert(message);
            if(typeof callBack == 'function')
                callBack();
        }
    }
    return alrt;
});