/**
 * Created by khizar on 3/29/14.
 */
//this is
require(['underscore.backbone'],function(Backbone){

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

    var router=new Router();
    router.on('route:chatIndex',function()
    {
        console.log("router working fine");
    });

    router.on('route:welcome',function(){
        console.log("welcome router is called");
    });

    Backbone.history.start();
});