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
        if(window.openDatabase)
        {
            $('#dbStatus').html("database can work");
        }
        else
        {
            $('#dbStatus').html("database cannot work");
        }

        $('#contactStatus').html("Contact cannot work");
        if(navigator.contacts)
        {
            $('#contactStatus').html("Contact can work");
        }
        $('#localStorageStatus').html("local storage will not work");

        if(localStorage)
        {
            $('#localStorageStatus').html("local storage will work");
        }
});