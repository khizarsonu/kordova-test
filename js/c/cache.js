/**
 * Created by khizar on 3/31/14.
 */
define([],function(){
    var cache;
    cache.set=function(key,value)
    {
        return window.localStorage.setItem(key,value);
    }
    cache.get=function(key)
    {
        return window.localStorage.getItem(key);
    }
    cache.remove=function(key)
    {
        return window.localStorage.removeItem(key);
    }
    cache.delete=cache.remove;
    return cache;
});