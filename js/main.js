//"js/bootstrap.min.js","js/custom.js","js/handlebars.js","js/script.js","js/index.js"
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    paths:{
        jquery: 'lib/jquery',
        "jquery.bootstrap": "lib/bootstrap.min",
        app: 'lib/app',
        bootstrap: 'lib/bootstrap.min',        
        underscore: 'lib/underscore',
        "underscore.backbone": 'lib/backbone',
        //script: 'lib/script',
        handlebars: 'lib/handlebars',        
        apps: 'lib/app',
        fastclick: 'lib/fastclick',
        'log':'lib/log'
    },
    shim: {
        "jquery.bootstrap": {
            //dependency
            deps: ["jquery"]
        },
        "underscore.backbone":{
            deps:['underscore']
        }
    }
});

require(['jquery','fastclick','jquery.bootstrap'],function($,fastclickAttach)
{
    //inilializeing fast click
    new fastclickAttach(document.body);
        
    $(document).ready(function(){
       require(['common']);
    });
});