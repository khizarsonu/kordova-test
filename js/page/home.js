/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * <script src="lib/backbone.js" />
 */
require(['jquery'],function($){
       $('h1').html("Device Ready"); 

       $('#testb').click(function(){

           $('#testp').toggle();
        });
        document.addEventListener("menubutton",onmenukey, false);

        function onmenukey()
        {
            function alertDismissed() {
                // do something
            }

            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
            alert("menu button pressed");
        }
});