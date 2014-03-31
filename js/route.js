/**
 * Created by khizar on 3/29/14.
 */
//this is
require(['underscore.backbone','log'],function(Backbone){

    var Router=Backbone.Router.extend({
        routes:{
            //URL : ROUTE_NAME
            '':'chatIndex',
            'welcome':'welcome',
            'tnc':'termAndCondition',
            'verifyNumber':'verifyNumber',
            'restore':'restore',
            'profileInfo':'profileInfo',
            'welcome2App':'welcome2App',
            'setting':'setting',
            'help':'help',
            'account':'account',
            'profile':'myProfile',
            'chatSetting':'chatSetting',
            'notification':'notification',
            'contacts':'contacts',
            'about':'about',
            'faq':'faq',
            'systemStatus':'systemStatus',
            'privacy':'privacy',
            'paymentInfo':'paymentInfo',
            'changeNumber':'changeNumber',
            'deleteMyAccount':'deleteMyAccount',
            'contactUs':'contactUs',
            'chat/:phoneNumber':'chat',
            'profile/:phoneNumber':'profile',
            'newGroup':'newGroup',
            'newChat':'newChat',
            'newBroadcastList':'newBroadcastList'
        }
    });

    var log=require('log');
    var router=new Router();
    router.on('route:chatIndex',function()
    {
        log(this.routes[Backbone.history.fragment]);
    });

    router.on('route:welcome',function(){
        log(this.routes[Backbone.history.fragment]);
    });

    router.on('route:termAndCondition',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:verifyNumber',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:restore',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:paymentInfo',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:welcome2App',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:setting',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:help',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:account',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:myProfile',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:chatSetting',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:notification',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:contacts',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:about',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:faq',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:systemStatus',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:privacy',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:changeNumber',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:deleteMyAccount',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:contactUs',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:chat',function(id){
        log("chat:"+id);
    }); //phoneNumber/id Argument
    router.on('route:profile',function(id){
        log("profile:"+id);
    });//phoneNumber/id Argument
    router.on('route:newGroup',function(){
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:newChat',function()
    {
        log(this.routes[Backbone.history.fragment]);
    });
    router.on('route:newBroadcastList',function(){
        log(this.routes[Backbone.history.fragment]);
    });

    Backbone.history.start();
});